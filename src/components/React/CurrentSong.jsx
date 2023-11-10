export const CurrentSong = ({ id, image, title, artists }) =>
	id ? (
		<div className="[grid-area:currentSong] flex items-center gap-2 relative overflow-hidden">
			<picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
				<img src={image} alt={title} />
			</picture>

			<div className="flex flex-col">
				<h3 className="font-semibold text-sm block">
					{id} {title}
				</h3>
				<span className="text-xs opacity-80">
					{artists?.join(", ")}
				</span>
			</div>
		</div>
	) : (
		<div></div>
	);
