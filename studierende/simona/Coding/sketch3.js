let bild;
let xPos = 0;
let shiftX = 0;
let shiftY = 0;
let speed = 1;
let direction = 1;
let skalierung = 3;
let clickInvert = false;

function preload() {
  bild = loadImage("assets/Bild12.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bild.resize(width / skalierung, 0);
  frameRate(60);
}

function draw() {
  background(220);

  push();
  translate(shiftX, shiftY);
  scale(-1, 1);

  if (clickInvert) {
    let invertedImage = createImage(bild.width, bild.height);
    invertedImage.copy(bild, 0, 0, bild.width, bild.height, 0, 0, bild.width, bild.height);
    invertedImage.filter(INVERT);
    image(invertedImage, 0, 0, bild.width * skalierung, bild.height * skalierung);
  } else {
    image(bild, 0, 0, bild.width * skalierung, bild.height * skalierung);
  }

  pop();

  shiftX = shiftX + speed * direction;
  shiftY = shiftY + speed * direction;

  if (shiftX > width || shiftX < -bild.width * skalierung) {
    direction *= -1;
  }
}

function mouseClicked() {
  if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
    clickInvert = !clickInvert;
  }
}

function mouseMoved() {
  speed = map(mouseX, 0, width, 0.1, 5);
  direction = map(mouseY, 0, height, -1, 1);
}
