export function totalTimePlaylist(playListSongs) {
	let totalSeconds = 0;

	playListSongs.forEach((song) => {
		const time = song.duration.split(":");
		const minutes = parseInt(time[0], 10);
		const seconds = parseInt(time[1], 10);
		totalSeconds += minutes * 60 + seconds;
	});

	const totalHours = Math.floor(totalSeconds / 3600);
	const totalMinutes = Math.floor((totalSeconds % 3600) / 60);
	const totalSecondsRests = totalSeconds % 60;

	let timeStr = "";

	if (totalHours > 0) {
		timeStr += `${totalHours} hora${totalHours > 1 ? "s" : ""} `;
	}
	if (totalMinutes > 0) {
		timeStr += `${totalMinutes} minuto${totalMinutes > 1 ? "s" : ""} `;
	}

	timeStr += `${totalSecondsRests} segundo${
		totalSecondsRests > 1 ? "s" : ""
	}`;

	return timeStr;
}
