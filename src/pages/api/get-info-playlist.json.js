import { allPlaylists, songs as allSongs } from "../../lib/data";

export function GET({ _, request }) {
	const { url } = request;
	const urlObj = new URL(url);
	const id = urlObj.searchParams.get("id");

	const playlist = allPlaylists.find((playlist) => playlist.id === id);
	const songs = allSongs.filter((song) => song.albumId === playlist.albumId);

	return new Response(
		JSON.stringify({
			playlist,
			songs,
		})
	);
}
