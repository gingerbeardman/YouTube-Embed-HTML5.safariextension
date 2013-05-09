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
		if (video_id) {
			var video = document.getElementById('movie_player');
			var vW = video.offsetWidth;
			var vH = video.offsetHeight;
			
			document.getElementById('movie_player').innerHTML = '<iframe width="'+vW+'" height="'+vH+'" src="http://www.youtube.com/embed/'+ video_id +'" frameborder="0" allowfullscreen></iframe>';
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
			console.log("OK, found: #movie_player");
			if (document.getElementById('movie_player').classList.contains('endscreen-created') === false) {
				console.log("OK, not found: .endscreen-created");
				setTimeout(replaceVideo, 1500);
				clearInterval(timerVideo);
			} else {
				console.log("ABORT, found: .endscreen-created");
			}
		} else {
			console.log("WAIT, not yet found: #movie_player");
		}
	}, 1750);

	//check for warning
	var timerWarning = setInterval(function() {
		if (document.getElementById('flash-upgrade')) {
			console.log("SKIP, not found: #flash-upgrade");
			removeWarning();
			clearInterval(timerWarning);
		}
	}, 10);
}
