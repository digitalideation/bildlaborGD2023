let sound;
let maxVolume = 1.0;

function preload() {
  sound = loadSound('assets/creepy_glitch.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  sound.loop();
}

function draw() {
  background(220);
 
  let dx = mouseX - width / 2;
  let dy = mouseY - height / 2;
  let distance = dist(0, 0, dx, dy);
 
  let percent = distance / dist(0, 0, width / 2, height / 2);
  
  let volume = map(percent, 0, 1, 0, maxVolume);
  volume = constrain(volume, 0, maxVolume);
  
  sound.setVolume(volume);

  fill(0);
  textSize(20);
  text('Volume: ' + volume.toFixed(2), 10, 30);
}
