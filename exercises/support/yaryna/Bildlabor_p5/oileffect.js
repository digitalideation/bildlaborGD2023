let bg;
let img;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let soundFile;

let externalColor;
let internalColor;

let mousePressedFlag = false;

function preload() {
  bg = "0";
  img = loadImage("assets/op.png");
  img2 = loadImage("assets/img2.png");
  img3 = loadImage("assets/op2.png");
  img4 = loadImage("assets/img3.png");
  img5 = loadImage("assets/op3.png");
  img6 = loadImage("assets/img4.png");
  img7 = loadImage("assets/op4.png");
  img8 = loadImage("assets/img5.png");
  img9 = loadImage("assets/op5.png");
  img10 = loadImage("assets/img6.png");
  img11 = loadImage("assets/op6.png");
  soundFormats('mp3', 'wav');
  soundFile = loadSound('assets/glitchsound.wav');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("canvspl");
  background(bg);
  pixelDensity(1);
  externalColor = color(100, 100, 100);
  internalColor = color(0, 255, 0);

}

function draw() {
  if (mousePressedFlag) {
    for (var i = 0; i < 30; i++) {
      let x1 = floor(random(width));
      let y1 = floor(random(height));

      let distanceX = map(mouseX, width / 2 - 50, width / 2 + 50, 0, 10);
      let distanceY = map(mouseY, height / 2 - 50, height / 2 + 50, 0, 10);
      let x2 = x1 + round(random(-1 * distanceX, distanceX));
      let y2 = y1 + round(random(-1 * distanceY, distanceY));

      let pixelColor = img.get(
        x1,
        y1,
        round(random(10, 60)),
        round(random(10, 60))
      );
      set(x2, y2, pixelColor);
      updatePixels();
    }
  }


}

function mousePressed() {
  soundFile.play();
  mousePressedFlag = true;

  img = img2;
  img2 = img3;
  img3 = img4;

  img4 = img5;
  img5 = img6;
  img6 = img7;
  img7 = img8;
  img8 = img9;
  img9 = img10;
  img10 = img11;
  img11 = img;


}


/*-----------make element follow mouse and change its color------*/

document.addEventListener("mousemove", moveCursor);
document.addEventListener("scroll", moveCursor);
function moveCursor(e) {



  /*---mouse distance from middle ----*/


  let mx = width / 2;
  let my = height / 2;



  let d = sqrt(pow((mx - mouseX), 2) + pow((my - mouseY), 2));


  let minD = 0;
  let maxD = sqrt(pow((width / 2), 2) + pow((height / 2), 2));

  let fact = map(d, minD, maxD, 0, 1)

  let interA = lerpColor(internalColor, externalColor, fact);




  /* draw cursor */
  let mouse = document.getElementById('mouse');
  mouse.style.top = (e.clientY + window.scrollY ) + "px";
  mouse.style.left = ((e.clientX) ) + "px";

  let circle = document.getElementById('circle1');
  circle.style.fill = "rgb(" + red(interA) + "," + green(interA) + ", " + blue(interA) + " )"
}



