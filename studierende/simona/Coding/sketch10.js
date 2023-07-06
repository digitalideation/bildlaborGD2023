let bilder = [
  "Datei01.jpg", "Datei02.jpg", "Datei03.jpg", "Datei04.jpg", "Datei05.jpg",
  "Datei06.jpg", "Datei07.jpg", "Datei08.jpg", "Datei09.jpg", "Datei10.jpg",
  "Datei11.jpg", "Datei12.jpg", "Datei13.jpg", "Datei14.jpg", "Datei15.jpg"
];
let currentIndex = 0;

let loadedImages = [];
let scaleFactor = 1.0;

let inverted = [];

function preload() {
  for (let i = 0; i < bilder.length; i++) {
    loadedImages[i] = loadImage("assets/" + bilder[i]);

    let invertedImage = createImage(loadedImages[i].width, loadedImages[i].height);
    invertedImage.copy(loadedImages[i], 0, 0, loadedImages[i].width, loadedImages[i].height, 0, 0, loadedImages[i].width, loadedImages[i].height);
    invertedImage.filter(INVERT);
    inverted[i] = invertedImage;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(0, 0, 0); // Blauer Hintergrund

  let mouseYRange = map(mouseY, 0, height, 0.2, 2.0);
  scaleFactor = lerp(scaleFactor, mouseYRange, 0.1);

  let currentImage = loadedImages[currentIndex];
  let scaledWidth = currentImage.width * scaleFactor;
  let scaledHeight = currentImage.height * scaleFactor;
  let x = map(mouseX, 0, width, width * 0.25, width * 0.75);
  image(currentImage, x, height / 2, scaledWidth, scaledHeight);

  // Zeichne den Cursor-Punkt
  drawCursor();
}

function drawCursor() {
  fill(255);
  noStroke();
  circle(mouseX, mouseY, 30); // Geänderte Größe des Cursor-Punktes
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
  let mouseXRange = map(mouseX, 0, width, 0, bilder.length);
  currentIndex = int(mouseXRange);
}

function mouseClicked() {
  loadedImages[currentIndex] = inverted[currentIndex];
}
