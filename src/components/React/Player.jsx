import { useRef, useEffect } from "react";
import { usePlayerStore } from "@/store/playerStore";

import { Pause, Play } from "./icons";
import { VolumeControl } from "./VolumeControl";
import { SongControl } from "./SongControl";
import { CurrentSong } from "./CurrentSong";

export function Player() {
	const { isPlaying, setIsPlaying, currentMusic, volume } = usePlayerStore(
		(state) => state
	);
	const audioRef = useRef();

	useEffect(() => {
		isPlaying ? audioRef.current.play() : audioRef.current.pause();
	}, [isPlaying]);

	useEffect(() => {
		audioRef.current.volume = volume;
	}, [volume]);

	useEffect(() => {
		const { playlist, song, songs } = currentMusic;

		if (song) {
			const src = `/music/${playlist?.id}/0${song?.id}.mp3`;
			audioRef.current.src = src;
			audioRef.current.volume = volume;
			audioRef.current.play();
		}
	}, [currentMusic]);

	const handleClick = () => {
		setIsPlaying(!isPlaying);
	};

	return (
		<div className="flex flex-row justify-between items-center w-full px-4 z-50 h-full">
			<CurrentSong {...currentMusic.song} />

			<div className="flex flex-col items-center">
				<button
					className="bg-white rounded-full p-2"
					onClick={handleClick}
				>
					{isPlaying ? <Pause /> : <Play />}
				</button>
				<SongControl audio={audioRef} />
			</div>

			<VolumeControl />

			<audio ref={audioRef} />
		</div>
	);
}
