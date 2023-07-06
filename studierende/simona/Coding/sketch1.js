let bild;
let streifen = 10;
let colWidth = 0;

let xPos = 0;
let shiftX = 0;
let skalierung = 3;

let invertCounter = 0;
let invertDuration = 120; // Adjust the duration (in frames) for how long the picture stays inverted

function preload() {
  bild = loadImage("assets/Bild12.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bild.resize(width / skalierung, 0);
  colWidth = round(width / streifen);
  frameRate(60);
}

function draw() {
  let wuerfel = random(40);

  if (wuerfel < 1) {
    bild.filter(INVERT);
    invertCounter = 0; // Reset the invert counter when the picture is inverted
  } else {
    invertCounter++; // Increment the invert counter
    if (invertCounter >= invertDuration) {
      bild.filter(INVERT); // Revert the picture back to its original state
    }
  }

  xPos = 0;

  while (xPos < bild.width) {
    let winkel = map((xPos + shiftX) % width, 0, width, 0, 180);
    let faktor = sin(radians(winkel));
    colWidth = map(faktor, 0, 1, 10, 50);

    // Reduce colWidth by 20%
    colWidth *= 0.8;

    push();
    translate(xPos * skalierung, 0);
    scale(-1, 1);

    copy(
      bild,
      xPos,
      0,
      colWidth,
      height,
      0,
      0,
      colWidth * skalierung,
      height * skalierung
    );

    pop();

    xPos = xPos + colWidth;
  }

  shiftX = shiftX + 1;
}
