import type { Playlist } from "../../lib/data";
import { PlayButton } from "./PlayButton";
import { usePlayerStore } from "../../store/playerStore";
import { AnimationSong } from "./AnimationSong";

interface Props {
	playList: Playlist;
}

export const ItemMyLibrary = ({ playList }: Props) => {
	const { setColorBanner, isPlaying, currentMusic } = usePlayerStore(
		(state) => state
	);

	const isPlayingPlayList =
		isPlaying && currentMusic?.playlist.id === playList.id;

	return (
		<article
			className="relative flex items-center group justify-between pr-5 rounded-md overflow-hidden cursor-pointer group:"
			style={{
				backgroundColor: `${playList.color.accent}10`,
			}}
		>
			<div className="absolute z-10 inset-0 group-hover:bg-gray-500/10 "></div>

			<a
				href={`/playlist/${playList.albumId}`}
				className="relative z-20 flex-1 flex gap-2 justify-between items-center whitespace-nowrap"
				onMouseOver={() => {
					setColorBanner(playList.color.accent);
				}}
			>
				<picture className="w-16 h-16">
					<img src={playList.cover} alt={`image ${playList.title}`} />
				</picture>

				<h3 className="text-sm font-bold flex-1 md:hidden">
					{playList.title.length > 10
						? `${playList.title.slice(0, 10)}...`
						: playList.title}
				</h3>

				<h3 className="hidden text-sm font-bold flex-1 md:block">
					{playList.title}
				</h3>
			</a>

			{isPlayingPlayList ? (
				<AnimationSong />
			) : (
				<div className="relative z-20 opacity-0 group-hover:opacity-100 transition duration-200 hidden sm:block">
					{" "}
					<PlayButton id={playList.id} buttonAnyPosition />
				</div>
			)}
		</article>
	);
};
