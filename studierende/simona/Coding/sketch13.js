let img;
let initialSize = 1600; // Ausgangsgröße des Bildes
let minSize = 1600 ; // Minimale Größe während der Pulsation
let maxSize = 1800; // Maximale Größe während der Pulsation
let pulseSpeed = 0.05; // Geschwindigkeit der Pulsation
let currentSize = initialSize; // Aktuelle Größe des Bildes

function preload() {
  img = loadImage("assets/shockblack.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(255, 255, 255); // Blauer Hintergrund

  let x = width / 2;
  let y = height / 2;

  // Pulsationseffekt
  let pulse = sin(frameCount * pulseSpeed);
  currentSize = map(pulse, -1, 1, minSize, maxSize);

  let aspectRatio = img.width / img.height;
  let imageWidth = currentSize;
  let imageHeight = currentSize / aspectRatio;

  image(img, x, y, imageWidth, imageHeight);

    // Zeichne den Cursor-Punkt
    drawCursor();
  }
  
  function drawCursor() {
    fill(0);
    noStroke();
    circle(mouseX, mouseY, 30); // Geänderte Größe des Cursor-Punktes
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
