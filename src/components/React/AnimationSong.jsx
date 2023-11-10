export const AnimationSong = () => {
	return (
		<div className="flex gap-[2px] items-end justify-center w-4 h-4 overflow-hidden">
			<span className="inline-block w-[2px] h-4 animate-playSong1 bg-green-500"></span>
			<span className="inline-block w-[2px] h-4 animate-playSong2 bg-green-500"></span>
			<span
				className="inline-block w-[2px] h-4 animate-playSong1 bg-green-500"
				style={{
					animationDelay: "20ms",
				}}
			></span>
			<span
				className="inline-block w-[2px] h-4 animate-playSong2 bg-green-500"
				style={{
					animationDelay: "100ms",
				}}
			></span>
		</div>
	);
};
