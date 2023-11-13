import { useEffect, useState } from "react";
import { SliderRange } from "./SlicerRange";

import { usePlayerStore } from "../../store/playerStore";

export const SongControl = ({ audio }) => {
	const [currentTime, setCurrentTime] = useState(0);

	const { numberSong, setNumberSong, currentMusic } = usePlayerStore(
		(state) => state
	);

	useEffect(() => {
		audio.current.addEventListener("timeupdate", handleTimeUpdate);

		return () => {
			audio.current.removeEventListener("timeupdate", handleTimeUpdate);
		};
	}, []);

	useEffect(() => {
		if (currentTime === audio?.current?.duration) {
			if (numberSong === currentMusic.songs?.length) {
				setNumberSong(1);
				return;
			}

			setNumberSong(numberSong + 1);
		}
	}, [currentTime]);

	const handleTimeUpdate = () => {
		setCurrentTime(audio.current.currentTime);
	};

	const formatTime = (time) => {
		if (time == null) return `0:00`;

		const seconds = Math.floor(time % 60);
		const minutes = Math.floor(time / 60);

		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	};

	const duration = audio?.current?.duration ?? 0;

	return (
		<div className="flex gap-x-3 text-xs pt-2 ">
			<span className="opacity-50 w-12 text-right">
				{formatTime(currentTime)}
			</span>

			<SliderRange
				value={[currentTime]}
				max={audio?.current?.duration ?? 0}
				min={0}
				className="w-[150px] md:w-[200px] lg:w-[400px]"
				onValueChange={(value) => {
					const [newCurrentTime] = value;
					audio.current.currentTime = newCurrentTime;
				}}
			/>

			<span className="opacity-50 w-12">
				{duration ? formatTime(duration) : "0:00"}
			</span>
		</div>
	);
};
