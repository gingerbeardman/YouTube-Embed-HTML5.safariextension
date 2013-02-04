if (window.top === window) {
	function init() {
		var video_id = window.location.search.split('v=')[1];
		var ampersandPosition = video_id.indexOf('&');
		if(ampersandPosition != -1) {
			video_id = video_id.substring(0, ampersandPosition);
		}

		if (document.getElementById('movie_player-html5').classList.contains('endscreen-created') === false) {
			document.getElementById('watch7-video').innerHTML = '<iframe width="640" height="390" src="http://www.youtube.com/embed/'+ video_id +'" frameborder="0" allowfullscreen></iframe>';
		}
	}

	setTimeout(init, 2500);
}
