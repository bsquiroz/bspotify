import type { Playlist } from "@/lib/data";
import { PlayButton } from "./PlayButton";
import { usePlayerStore } from "@/store/playerStore";
import { useEffect } from "react";

interface Props {
	playList: Playlist;
}

export const ItemMyLibrary = ({ playList }: Props) => {
	const { setColorBanner } = usePlayerStore((state) => state);

	return (
		<a
			href={`/playlist/${playList.albumId}`}
			className="flex gap-5 justify-between items-center bg-slate-600/20 rounded-md overflow-hidden hover:bg-slate-500/20 p-1 cursor-pointer group"
			onMouseOver={() => {
				setColorBanner(playList.color.accent);
			}}
		>
			<picture className="w-14 h-14">
				<img src={playList.cover} alt={`image ${playList.title}`} />
			</picture>

			<h3 className="text-sm font-bold">{playList.title}</h3>

			<div className="opacity-0 group-hover:opacity-100 transition duration-200">
				<PlayButton id={playList.id} buttonAnyPosition />
			</div>
		</a>
	);
};
