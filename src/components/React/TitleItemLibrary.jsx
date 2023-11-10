import { usePlayerStore } from "../../store/playerStore";

export const TitleItemLibrary = ({ id, title }) => {
	const { setNumberSong, setCurrentMusic, setIsPlaying } = usePlayerStore(
		(state) => state
	);

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

	return (
		<h3
			className="text-white text-base font-normal cursor-pointer hover:underline"
			onClick={handleClick}
		>
			{title}
		</h3>
	);
};
