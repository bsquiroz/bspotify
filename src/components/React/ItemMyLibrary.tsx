import type { Playlist } from "../../lib/data";
import { PlayButton } from "./PlayButton";
import { usePlayerStore } from "../../store/playerStore";

interface Props {
	playList: Playlist;
}

export const ItemMyLibrary = ({ playList }: Props) => {
	const { setColorBanner } = usePlayerStore((state) => state);

	return (
		<a
			href={`/playlist/${playList.albumId}`}
			className="relative flex gap-2 justify-between items-center bg-gray-700/20 rounded-md overflow-hidden hover:bg-gray-500/20 cursor-pointer group"
			onMouseOver={() => {
				setColorBanner(playList.color.accent);
			}}
		>
			<div
				className="absolute inset-0 opacity-5"
				style={{
					backgroundColor: playList.color.accent,
				}}
			></div>

			<picture className="w-16 h-16">
				<img src={playList.cover} alt={`image ${playList.title}`} />
			</picture>

			<h3 className="text-sm font-bold flex-1">{playList.title}</h3>

			<div className="opacity-0 group-hover:opacity-100 transition duration-200">
				<PlayButton id={playList.id} buttonAnyPosition />
			</div>
		</a>
	);
};
