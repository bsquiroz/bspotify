import { usePlayerStore } from "@/store/playerStore";

export const Overlay = () => {
	const { colorBanner } = usePlayerStore((state) => state);

	return (
		<div
			className="absolute inset-0 rounded-lg opacity-10 transition-all duration-1000"
			style={{
				background: `linear-gradient(0deg, rgba(73,90,109,0) 60%, ${colorBanner} 100%)`,
			}}
		></div>
	);
};
