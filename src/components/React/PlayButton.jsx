import { Pause, Play } from "./icons";

import { usePlayerStore } from "../../store/playerStore";

export function PlayButton({ id, buttonAnyPosition = false }) {
	const {
		isPlaying,
		setIsPlaying,
		currentMusic,
		setCurrentMusic,
		setNumberSong,
	} = usePlayerStore((state) => state);

	const isPlayingPlayList = isPlaying && currentMusic?.playlist.id === id;

	const handleClick = () => {
		if (isPlayingPlayList) {
			setIsPlaying(false);
			return;
		}

		if (currentMusic.playlist?.id === id) {
			setIsPlaying(!isPlaying);
			return;
		}

		fetch(`/api/get-info-playlist.json?id=${id}`)
			.then((res) => res.json())
			.then((data) => {
				const { songs, playlist } = data;

				setIsPlaying(true);
				setCurrentMusic({ songs, playlist, song: songs[0] });
				setNumberSong(1);
			});
	};

	const styleButton = isPlayingPlayList
		? "absolute right-3 z-20 bottom-[4.5rem] opacity-100"
		: "absolute opacity-0 right-3 bottom-0 z-20 group-hover:bottom-[4.5rem] group-hover:opacity-100";

	return buttonAnyPosition ? (
		<button
			className="play-button rounded-full bg-green-500 p-4 hover:bg-green-400 active:scale-90 transition-all duration-200"
			onClick={handleClick}
		>
			{isPlayingPlayList ? (
				<Pause />
			) : (
				<>
					<Play />
					<span></span>
				</>
			)}
		</button>
	) : (
		<button className={`${styleButton}`} onClick={handleClick}>
			<div className="play-button rounded-full bg-green-500 p-4 hover:bg-green-400 active:scale-90 transition-all duration-200">
				{isPlayingPlayList ? (
					<Pause />
				) : (
					<>
						<Play />
						<span></span>
					</>
				)}
			</div>
		</button>
	);
}
