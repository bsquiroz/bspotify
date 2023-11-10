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
			className="flex items-center relative group justify-between pr-5 rounded-md overflow-hidden cursor-pointer"
			style={{
				backgroundColor: `${playList.color.accent}10`,
			}}
		>
			<a
				href={`/playlist/${playList.albumId}`}
				className="flex gap-2 justify-between items-center "
				onMouseOver={() => {
					setColorBanner(playList.color.accent);
				}}
			>
				<picture className="w-16 h-16">
					<img src={playList.cover} alt={`image ${playList.title}`} />
				</picture>

				<h3 className="text-sm font-bold flex-1">{playList.title}</h3>
			</a>

			{isPlayingPlayList ? (
				<AnimationSong />
			) : (
				<div className="opacity-0 group-hover:opacity-100 transition duration-200">
					{" "}
					<PlayButton id={playList.id} buttonAnyPosition />
				</div>
			)}
		</article>
	);
};
