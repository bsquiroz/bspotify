export const CurrentSong = ({ id, image, title, artists, albumId }) =>
	id ? (
		<div className="sm:w-[250px] [grid-area:currentSong] flex items-center gap-2 relative overflow-hidden">
			<picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
				<img src={image} alt={title} />
			</picture>

			<div className="flex flex-col">
				<a
					href={`/playlist/${albumId}`}
					className="font-semibold text-sm block hover:underline"
				>
					{id} {title}
				</a>
				<span className="text-xs opacity-80">
					{artists?.join(", ")}
				</span>
			</div>
		</div>
	) : (
		<div></div>
	);
