let img;
let numDuplicates = 20;
let yOffsets = [];

function preload() {
  img = loadImage("assets/youblack.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background(0, 0, 255);

  for (let i = 0; i < numDuplicates; i++) {
    yOffsets[i] = 0;
  }
}

function draw() {
  background(255, 255, 255);

  let yOffset = map(mouseY, 0, height, -img.height, img.height);

  for (let i = 0; i < numDuplicates; i++) {
    yOffsets[i] = yOffset * i;
  }

  let scaleFactor = width / (img.width * 1.2); // Reduce the scaleFactor to 1.2 (20% smaller)

  for (let i = 0; i < numDuplicates; i++) {
    let x = width / 2;
    let y = height / 2 + yOffsets[i];

    push();
    translate(x, y);
    scale(scaleFactor);
    image(img, 0, 0);
    pop();
  }

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
