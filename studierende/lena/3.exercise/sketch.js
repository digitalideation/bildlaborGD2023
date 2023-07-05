let img;
const stripeHeight = 50;  // Adjust the height of each stripe
const displacementRange = 30;  // Adjust the range of random displacements

function preload() {
  img = loadImage('assets/Bildschirm­foto 2023-06-19 um 13.09.39.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noSmooth();
  img.resize(width, height);
}

function draw() {
  background(0);
  image(img, 0, 0, width, height);
}

function mouseDragged() {
  glitchStripes(mouseY);
}

function glitchStripes(y) {
  const startY = y - stripeHeight / 2;
  const endY = y + stripeHeight / 2;

  for (let j = startY; j < endY; j++) {
    for (let i = 0; i < img.width; i++) {
      if (random() < 0.4) {
        const offsetX = int(random(-displacementRange, displacementRange));
        const offsetY = int(random(-displacementRange, displacementRange));
        const color = img.get(i + offsetX, j + offsetY);

        img.set(i, j, color);
      }
    }
  }
  img.updatePixels();
}
