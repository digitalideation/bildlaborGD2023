// in this sketch the camera image will be distorted by using a sine wave function in the shader

// the shader variable
let camShader;

// the camera variable
let cam;

let myImg;

let w=0;
let h=0;

function preload(){
  // load the shader
  camShader = loadShader('effect.vert', 'effect.frag');
  myImg = loadImage('assets/scan20-small.jpg')
  
}

function setup() {
  w=myImg.width;
  h=myImg.height;
  
  // shaders require WEBGL mode to work
  createCanvas(w, h, WEBGL);
  noStroke();
  frameRate(30);
  // initialize the webcam at the window size
  //cam = createCapture(VIDEO);
  //cam.size(windowWidth, windowHeight);

  // hide the html element that createCapture adds to the screen
  //cam.hide();

}

function draw() {  
  let mX = constrain(mouseX, 0, width);
	let mY = constrain(mouseY, 0, height);

  // shader() sets the active shader with our shader
  shader(camShader);

  // lets just send the cam to our shader as a uniform
  camShader.setUniform('tex0', myImg);

  camShader.setUniform('iMouse', [mX, mY]);

  // send a slow frameCount to the shader as a time variable
  camShader.setUniform('time', frameCount * 0.01);

  // lets map the mouseX to frequency and mouseY to amplitude
  // try playing with these to get a more or less distorted effect
  // 10 and 0.25 are just magic numbers that I thought looked good
  //let freq = map(mouseX, 0, width, 0, 10.0);
  let freq=cos(radians(frameCount%360))*5;
  //let amp = map(mouseY, 0, height, 0, 0.25);
  let amp=sin(radians(frameCount%360))*0.1;

  // send the two values to the shader
  camShader.setUniform('frequency', freq);
  camShader.setUniform('amplitude', amp);

  // rect gives us some geometry on the screen
  rect(0,0,width, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}