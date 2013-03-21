if (window.top === window) {
	function replaceVideo() {
		//remove flash warning
		var video_id, ampersandPosition;

		video_id = window.location.search.split('v=')[1];
		if (video_id) ampersandPosition = video_id.indexOf('&');
		if (video_id && ampersandPosition != -1) {
			video_id = video_id.substring(0, ampersandPosition);
		}
		if (video_id == '')
			return;

		//replace with embed
		if (video_id && document.getElementById('movie_player').classList.contains('endscreen-created') === false) {
			var video = document.getElementById('watch7-player');
			var vW = video.offsetWidth;
			var vH = video.offsetHeight;
			
			document.getElementById('watch7-video').innerHTML = '<iframe width="'+vW+'" height="'+vH+'" src="http://www.youtube.com/embed/'+ video_id +'" frameborder="0" allowfullscreen></iframe>';
		}
	}
	
	function removeWarning() {
		var element =  document.getElementById('flash-upgrade');
		if (typeof(element) != 'undefined' && element != null) {
			document.getElementById('flash-upgrade').innerHTML = '';
		}
	}

	//check for no video
	var timerVideo = setInterval(function() {
		if (document.getElementById('movie_player')) {
		 replaceVideo();
		 clearInterval(timerVideo);
		}
	}, 1000);

	//check for warning
	var timerWarning = setInterval(function() {
		if (document.getElementById('flash-upgrade')) {
			removeWarning();
			clearInterval(timerWarning);
		}
	}, 10);
}
