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
			var video = document.getElementById('movie_player');
			var vW = video.offsetWidth;
			var vH = video.offsetHeight;
			
			document.getElementById('movie_player').innerHTML = '<iframe width="'+vW+'" height="'+vH+'" src="http://www.youtube.com/embed/'+ video_id +'" frameborder="0" allowfullscreen></iframe>';
		} else {
			console.log("not found: .endscreen-created");
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
			console.log("found: #movie_player");
			replaceVideo();	
			clearInterval(timerVideo);
		} else {
			console.log("not yet found: #movie_player");
		}
	}, 1000);

	//check for warning
	var timerWarning = setInterval(function() {
		if (document.getElementById('flash-upgrade')) {
			console.log("not found: #flash-upgrade");
			removeWarning();
			clearInterval(timerWarning);
		}
	}, 10);
}
