import { useRef, useEffect, useState } from "react";
import { usePlayerStore } from "@/store/playerStore";

import { Left, Pause, Play, Right } from "./icons";
import { VolumeControl } from "./VolumeControl";
import { SongControl } from "./SongControl";
import { CurrentSong } from "./CurrentSong";

export function Player() {
	const {
		isPlaying,
		setIsPlaying,
		currentMusic,
		volume,
		setCurrentMusic,
		numberSong,
		setNumberSong,
	} = usePlayerStore((state) => state);

	const audioRef = useRef();
	const { playlist, song, songs } = currentMusic;

	useEffect(() => {
		isPlaying ? audioRef.current.play() : audioRef.current.pause();
	}, [isPlaying]);

	useEffect(() => {
		audioRef.current.volume = volume;
	}, [volume]);

	useEffect(() => {
		if (song) {
			const src = `/music/${playlist?.id}/0${song?.id}.mp3`;
			audioRef.current.src = src;
			audioRef.current.volume = volume;
			audioRef.current.play();
		}
	}, [currentMusic]);

	useEffect(() => {
		if (!song) return;

		const src = `/music/${playlist?.id}/0${numberSong}.mp3`;
		audioRef.current.src = src;
		audioRef.current.volume = volume;
		audioRef.current.play();
		setCurrentMusic({
			...currentMusic,
			song: songs.find((song) => song.id === numberSong),
		});
	}, [numberSong]);

	const handleClick = () => {
		if (!song) return;
		setIsPlaying(!isPlaying);
	};

	const handleNextSong = () => {
		if (!song) return;

		if (songs.length === numberSong) {
			setNumberSong(1);
		} else {
			setNumberSong(numberSong + 1);
		}
	};

	const handlePreviusSong = () => {
		if (!song) return;

		if (numberSong <= 1) {
			setNumberSong(songs.length);
		} else {
			setNumberSong(numberSong - 1);
		}
	};

	return (
		<div className="[grid-area:player] min-h-[80px] flex flex-row justify-between items-center">
			<CurrentSong {...currentMusic.song} />

			<div className="flex flex-col items-center">
				<div className="flex gap-4 items-center">
					<button
						className="w-4 h-4 text-gray-300 hover:text-white active:scale-95"
						onClick={handlePreviusSong}
					>
						<Left />
					</button>
					<button
						className="bg-white rounded-full p-2 active:scale-95"
						onClick={handleClick}
					>
						{isPlaying ? <Pause /> : <Play />}
					</button>
					<button
						className="w-4 h-4 text-gray-300 hover:text-white active:scale-95"
						onClick={handleNextSong}
					>
						<Right />
					</button>
				</div>
				<SongControl audio={audioRef} />
			</div>

			<VolumeControl />

			<audio ref={audioRef} />
		</div>
	);
}
