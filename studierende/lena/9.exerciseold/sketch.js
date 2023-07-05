let video;
let quadratX;
let quadratY;
const quadratGroesse = 118;
let webcamAngezeigt1 = false;
let webcamAngezeigt2 = false;
let capture;
let captureCopy1; // Capture Copy für das erste Quadrat
let captureCopy2; // Capture Copy für das zweite Quadrat

function preload() {
  bild = loadImage("assets/handy1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(quadratGroesse, quadratGroesse);
  video.hide();
  pixelDensity(1);


  quadratX = 660;
  quadratY = 465;

  setTimeout(showWebcam1, 5000);
  setTimeout(showWebcam2, 10000);

  capture = createCapture(VIDEO);
  capture.size(quadratGroesse, quadratGroesse);
  capture.hide();

  captureCopy1 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy2 = createGraphics(quadratGroesse, quadratGroesse);
}

function showWebcam1() {
  webcamAngezeigt1 = true; // Erstes Webcam-Quadrat anzeigen
}

function showWebcam2() {
  webcamAngezeigt2 = true; // Zweites Webcam-Quadrat anzeigen
}

function draw() {
  background(255);

  let bildRatio = bild.width / bild.height;
  let fensterRatio = width / height;

  if (bildRatio > fensterRatio) {
    let neueBreite = width;
    let neueHöhe = neueBreite / bildRatio;
    let y = (height - neueHöhe) / 2;

    image(bild, 0, y, neueBreite, neueHöhe);
  } else {
    let neueHöhe = height;
    let neueBreite = neueHöhe * bildRatio;
    let x = (width - neueBreite) / 2;

    image(bild, x, 0, neueBreite, neueHöhe);
  }

  if (webcamAngezeigt1) {
    image(video, quadratX, quadratY, quadratGroesse, quadratGroesse);
    captureCopy1.image(video, 0, 0, quadratGroesse, quadratGroesse); // Kopiere das erste Webcam-Quadrat auf die Grafikoberfläche
  }

  if (webcamAngezeigt2) {
    let zweitesQuadratX = 780; // x-Position des zweiten Quadrats
    let zweitesQuadratY = 225; // y-Position des zweiten Quadrats
    image(video, zweitesQuadratX, zweitesQuadratY, quadratGroesse, quadratGroesse);
    captureCopy2.image(video, 0, 0, quadratGroesse, quadratGroesse); // Kopiere das zweite Webcam-Quadrat auf die Grafikoberfläche
  }

  // Anwenden des Blur-Effekts auf das captureCopy1-Video des ersten Quadrats
  captureCopy1.loadPixels();
  for (let y = 0; y < captureCopy1.height; y++) {
    for (let x = 0; x < captureCopy1.width; x++) {
      let index = (x + y * captureCopy1.width) * 4;
      let r = captureCopy1.pixels[index + 0];
      let g = captureCopy1.pixels[index + 1];
      let b = captureCopy1.pixels[index + 2];
      let a = captureCopy1.pixels[index + 3];

      // Farben invertieren (Blur-Effekt)
      captureCopy1.pixels[index + 0] = 255 - r; // R
      captureCopy1.pixels[index + 1] = 255 - g; // G
      captureCopy1.pixels[index + 2] = 255 - b; // B
    }
  }
  captureCopy1.updatePixels();

  // Anwenden des Blur-Effekts auf das captureCopy2-Video des zweiten Quadrats
  captureCopy2.loadPixels();
  for (let y = 0; y < captureCopy2.height; y++) {
    for (let x = 0; x < captureCopy2.width; x++) {
      let index = (x + y * captureCopy2.width) * 4;
      let r = captureCopy2.pixels[index + 0];
      let g = captureCopy2.pixels[index + 1];
      let b = captureCopy2.pixels[index + 2];
      let a = captureCopy2.pixels[index + 3];

      // Farben invertieren (Blur-Effekt vom ersten Quadrat übertragen)
      captureCopy2.pixels[index + 0] = 255 - r; // R
      captureCopy2.pixels[index + 1] = 255 - g; // G
      captureCopy2.pixels[index + 2] = 255 - b; // B
    }
  }
  captureCopy2.updatePixels();

  // Zeige die Kopien der Webcam-Quadrate an
  image(captureCopy1, quadratX, quadratY, quadratGroesse, quadratGroesse);
  image(captureCopy2, 780, 225, quadratGroesse, quadratGroesse); // Zeige das Capture Copy des zweiten Quadrats an der richtigen Position
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
