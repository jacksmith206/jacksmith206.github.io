var song = new Audio;
var muted = false;
var vol = 1;
song.type = 'audio/mpeg';
song.src = 'file:///C:/Users/lesti/OneDrive/%CE%A5%CF%80%CE%BF%CE%BB%CE%BF%CE%B3%CE%B9%CF%83%CF%84%CE%AE%CF%82/Swans%20-%20To%20Be%20Kind.mp3';//Audio file source url







https://jacksmith206.github.io/christos/swans2.mp3










function skip(time) {
	if (time == 'back') {
		song.currentTime = (song.currentTime - 5);
	} else if (time == 'fwd') {
		song.currentTime = (song.currentTime + 5);
	}
}
function playpause() {
	if (!song.paused) {
		song.pause();
	} else {
		song.play();
	}
}
function stop() {
	song.pause();
	song.currentTime = 0;
	document.getElementById('seek').value = 0;
}
function setPos(pos) {
	song.currentTime = pos;
}
function mute() {
	if (muted) {
		song.volume = vol;
		muted = false;
		document.getElementById('mute').innerHTML = '<i class="fa fa-volume-up"></i>';
	} else {
		song.volume = 0;
		muted = true;
		document.getElementById('mute').innerHTML = '<i class="fa fa-volume-off"></i>';
	}
}
function setVolume(volume) {
	song.volume = volume;
	vol = volume;
}
song.addEventListener('timeupdate',function() {
	curtime = parseInt(song.currentTime,10);
	document.getElementById('seek').max = song.duration;
	document.getElementById('seek').value = curtime;
})