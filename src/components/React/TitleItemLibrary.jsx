import { usePlayerStore } from "../../store/playerStore";

export const TitleItemLibrary = ({ id, title, albumId }) => {
	const { setNumberSong, setCurrentMusic, setIsPlaying, currentMusic } =
		usePlayerStore((state) => state);

	const isPlayingSong =
		currentMusic?.song?.id === id &&
		albumId === currentMusic?.song?.albumId;

	const handleClick = () => {
		const albumId = window.location.href.split("/").at(-1);
		fetch(`/api/get-info-playlist.json?id=${albumId}`)
			.then((res) => res.json())
			.then((data) => {
				const { playlist, songs } = data;
				const song = songs.find((song) => song.id === +id);

				setIsPlaying(true);
				setCurrentMusic({ songs, playlist, song });
				setNumberSong(song.id);
			});
	};

	return isPlayingSong ? (
		<h3
			className="text-green-500 text-base font-normal cursor-pointer hover:underline"
			onClick={handleClick}
		>
			{title}
			<span></span>
		</h3>
	) : (
		<h3
			className="text-white  text-base font-normal cursor-pointer hover:underline"
			onClick={handleClick}
		>
			{title}
		</h3>
	);
};
