import { usePlayerStore } from "../../store/playerStore";
import { VolumeMax, Pause } from "./icons";

export const CardSide = ({ cover, title, artistsString, playlistId }) => {
	const {
		isPlaying,
		currentMusic: { playlist },
	} = usePlayerStore((state) => state);

	const isPlayingList = playlist?.id === playlistId;

	return (
		<>
			<picture className="h-12 w-12">
				<img
					src={cover}
					alt={`Cover of ${title} by ${artistsString}`}
					class="object-cover w-full h-full rounded-md"
				/>
			</picture>

			<div className="flex flex-auto flex-col truncate">
				{isPlayingList ? (
					<h4 className="text-sm text-green-500">
						<span></span>
						{title}
					</h4>
				) : (
					<h4 className="text-sm">{title}</h4>
				)}

				<p className="text-xs text-gray-400 fill-green-500">
					{artistsString}
				</p>
			</div>
			{isPlayingList && (
				<div className="w-4 text-green-500">
					{isPlaying ? (
						<VolumeMax />
					) : (
						<Pause className={"w-3 fill-green-500"} />
					)}
				</div>
			)}
		</>
	);
};
