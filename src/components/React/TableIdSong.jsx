import { usePlayerStore } from "../../store/playerStore";
import { AnimationSong } from "./AnimationSong";

export const TableIdSong = ({ id, albumId, hidden = false }) => {
	const { currentMusic } = usePlayerStore((state) => state);

	const isPlayingSong =
		currentMusic?.song?.id === id &&
		albumId === currentMusic?.song?.albumId;

	return isPlayingSong ? (
		<AnimationSong />
	) : (
		<span className={`${hidden ? "hidden" : "block"}`}>{id}</span>
	);
};
