let img;
let initialSize = 200; // Ausgangsgröße des Bildes
let minSize = 230; // Minimale Größe während der Pulsation
let maxSize = 300; // Maximale Größe während der Pulsation
let pulseSpeed = 0.05; // Geschwindigkeit der Pulsation
let currentSize = initialSize; // Aktuelle Größe des Bildes

function preload() {
  img = loadImage("assets/clickblack.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor(); // Deaktiviert den Standard-Mauszeiger
}

function draw() {
  background(0, 0, 0); // Blauer Hintergrund

  let x = width / 2;
  let y = height / 2;

  // Pulsationseffekt
  let pulse = sin(frameCount * pulseSpeed);
  currentSize = map(pulse, -1, 1, minSize, maxSize);

  let aspectRatio = img.width / img.height;
  let imageWidth = currentSize;
  let imageHeight = currentSize / aspectRatio;

  // Zeichne den Cursor-Punkt
  drawCursor();

  // Zeichne das Bild
  image(img, x, y, imageWidth, imageHeight);
}

function drawCursor() {
  fill(255);
  noStroke();
  circle(mouseX, mouseY, 30); // Geänderte Größe des Cursor-Punktes
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
