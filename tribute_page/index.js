var playBtn = document.getElementById('play');
var heartbeat = document.getElementById('heartbeat');
var audios = document.querySelectorAll('audio');

playBtn.addEventListener('mouseover', function() {
    [].forEach.call(audios, function(audio) {
        audio.play();
    });
}, false);

playBtn.addEventListener('mouseleave', function() {
    [].forEach.call(audios, function(audio) {
        audio.pause();
        audio.currentTime = 0;
    });
}, false);
