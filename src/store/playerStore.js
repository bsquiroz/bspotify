import { create } from "zustand";

export const usePlayerStore = create((set) => ({
	isPlaying: false,
	currentMusic: { playlist: null, song: null, songs: [] },
	volume: 1,
	colorBanner: "",
	numberSong: 1,
	setIsPlaying: (isPlaying) => set({ isPlaying }),
	setCurrentMusic: (currentMusic) => set({ currentMusic }),
	setVolume: (volume) => set({ volume }),
	setColorBanner: (colorBanner) => set({ colorBanner }),
	setNumberSong: (numberSong) => set({ numberSong }),
}));
