// Audio 2

var audio = new Audio('/assets/audio/audio_2.mp3');
var isPlaying = false;

document.addEventListener('keydown', function(event) {
  if (event.key === 'p') {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
    } else {
      audio.play();
      isPlaying = true;
    }
  }
});
// var audio = new Audio('/assets/audio/audio_2.mp3'); 

// var playButton = document.getElementById('audio2');
// playButton.addEventListener('click', function() {
//   audio.play();
// });
