import { create } from "zustand";

export const usePlayerStore = create((set) => ({
	isPlaying: false,
	currentMusic: { playlist: null, song: null, songs: [] },
	volume: 1,
	colorBanner: "#1ed760",
	setIsPlaying: (isPlaying) => set({ isPlaying }),
	setCurrentMusic: (currentMusic) => set({ currentMusic }),
	setVolume: (volume) => set({ volume }),
	setColorBanner: (colorBanner) => set({ colorBanner }),
}));
