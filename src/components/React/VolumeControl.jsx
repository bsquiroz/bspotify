import { useRef } from "react";

import { usePlayerStore } from "@/store/playerStore";
import { VolumeCancel, VolumeMax, VolumeMedio, VolumeMin } from "./icons";
import { SliderRange } from "./SlicerRange";

export const VolumeControl = () => {
	const { volume, setVolume } = usePlayerStore((state) => state);
	const previousVolumeRef = useRef(volume);

	const IconVolum = () => {
		const handleMute = () => {
			if (volume < 0.01) {
				setVolume(previousVolumeRef.current);
			} else {
				previousVolumeRef.current = volume;
				setVolume(0);
			}
		};
		return (
			<button className="w-6" onClick={handleMute}>
				{volume >= 0.7 ? (
					<VolumeMax />
				) : volume >= 0.4 ? (
					<VolumeMedio />
				) : volume >= 0.01 ? (
					<VolumeMin />
				) : (
					<VolumeCancel />
				)}
			</button>
		);
	};

	return (
		<div className="flex gap-2">
			<IconVolum />
			<SliderRange
				defaultValue={[100]}
				max={100}
				min={0}
				value={[volume * 100]}
				className="w-[100px]"
				onValueChange={(value) => {
					const [newVolume] = value;
					const volumeValue = newVolume / 100;
					setVolume(volumeValue);
				}}
			/>
		</div>
	);
};
