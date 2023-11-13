import { useState } from "react";
import { songs } from "src/lib/data";
import { usePlayerStore } from "src/store/playerStore";
import { TableIdSong } from "./TableIdSong";

export const SearchSong = () => {
	const { setIsPlaying, setCurrentMusic, setNumberSong } = usePlayerStore(
		(state) => state
	);
	const currentSong = structuredClone(songs).sort((a, b) =>
		a.title.localeCompare(b.title)
	);
	const [filterSong, setFilterSong] = useState(currentSong);

	return (
		<section className="p-5">
			<input
				className="p-2 rounded-full w-[50%] text-slate-400 outline-0 bg-transparent border-2 border-slate-400 "
				type="text"
				placeholder="ej: movimiento naranja"
				onChange={(e) => {
					const value = e.target.value.toLowerCase();
					setFilterSong(
						currentSong.filter((song) =>
							song.title.toLowerCase().includes(value)
						)
					);
				}}
			/>

			<ul className="flex flex-col gap-3 pt-5">
				{filterSong.map((song, index) => {
					const handleClick = (albumId, songId) => {
						fetch(`/api/get-info-playlist.json?id=${albumId}`)
							.then((res) => res.json())
							.then((data) => {
								const { playlist, songs } = data;
								const song = songs.find(
									(song) => song.id === +songId
								);

								setIsPlaying(true);
								setCurrentMusic({ songs, playlist, song });
								setNumberSong(song.id);
							});
					};

					return (
						<li
							key={index}
							className="flex gap-3 items-center hover:bg-slate-500/20 p-1 duration-300 transition-all"
							onClick={() => handleClick(song.albumId, song.id)}
						>
							<picture className="w-14 h-14 rounded-md overflow-hidden">
								<img src={song.image} alt="" />
							</picture>
							<p className="flex flex-col">
								<strong>{song.title}</strong>
								<small>{song.artists.join(", ")}</small>
							</p>
							<p className="flex gap-1">
								<small>{song.duration}</small>
								<TableIdSong
									albumId={song.albumId}
									id={song.id}
									hidden
								/>
							</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
