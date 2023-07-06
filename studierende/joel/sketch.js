let font;

let bg = '#000000';
let fg = '#f1f1f1';

let txt = "UNKNOWN";

function preload() {
  mono = loadFont('assets/Messapia-Bold.otf'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //textFont(mono);
  textAlign(LEFT, CENTER);
  frameRate(10);
}

function draw() {
  background(bg);
  fill(fg);
  textSize(50 - (frameCount/1));
  let amount = frameCount;


  let step = 360.0 / amount;

  push();

  translate(width/2, height/2);

  for (let i = 0; i < amount; i++) {
    let rotation = step*i;
    push();
    rotate(radians(rotation + frameCount));
    text(txt, 10, 0);
    pop();
  }

  pop();

}
