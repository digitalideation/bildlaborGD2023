let video;
const quadratGroesse = 118;
let webcamAngezeigt1 = false;
let webcamAngezeigt2 = false;
let webcamAngezeigt3 = false;
let webcamAngezeigt4 = false;
let capture;
let captureCopy1;
let captureCopy2; 
let captureCopy3; 
let captureCopy4; 

function preload() {
  bild = loadImage("assets/handy1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(quadratGroesse, quadratGroesse);
  video.hide();
  pixelDensity(1);
  

  setTimeout(function() {
    showWebcam(1);
  }, 1000);
  
  setTimeout(function() {
    showWebcam(2);
  }, 2000);
  
  setTimeout(function() {
    showWebcam(3);
  }, 3000);

  setTimeout(function() {
    showWebcam(4);
  }, 4000);
  

  capture = createCapture(VIDEO);
  capture.size(quadratGroesse, quadratGroesse);
  capture.hide();

  captureCopy1 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy2 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy3 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy4 = createGraphics(quadratGroesse, quadratGroesse);
}

function showWebcam(webcamNumber) {
  if (webcamNumber === 1) {
    webcamAngezeigt1 = true;
  } else if (webcamNumber === 2) {
    webcamAngezeigt2 = true;
  } else if (webcamNumber === 3) {
    webcamAngezeigt3 = true;
  }
  else if (webcamNumber === 4) {
    webcamAngezeigt4 = true;
  }
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
    captureCopy1.image(video, 0, 0, quadratGroesse, quadratGroesse); // Kopiere das erste Webcam-Quadrat auf die Grafikoberfläche
  }

  if (webcamAngezeigt2) {
    //let zweitesQuadratX = quadrate [random][0]
    //let zweitesQuadratY = quadrate [random][1]
    captureCopy2.image(video, 0, 0, quadratGroesse, quadratGroesse); // Kopiere das zweite Webcam-Quadrat auf die Grafikoberfläche
  }

  if (webcamAngezeigt3) {
    //let zweitesQuadratX = quadrate [random][0]
    //let zweitesQuadratY = quadrate [random][1]
    captureCopy3.image(video, 0, 0, quadratGroesse, quadratGroesse); // Kopiere das zweite Webcam-Quadrat auf die Grafikoberfläche
  }

  if (webcamAngezeigt4) {
    //let zweitesQuadratX = quadrate [random][0]
    //let zweitesQuadratY = quadrate [random][1]
    captureCopy4.image(video, 0, 0, quadratGroesse, quadratGroesse); // Kopiere das zweite Webcam-Quadrat auf die Grafikoberfläche
  }



  // Anwenden des Blur-Effekts auf das captureCopy1-Video des ersten Quadrats
  captureCopy1.loadPixels();
  invert(captureCopy1);
  captureCopy1.updatePixels();

  // Anwenden des Blur-Effekts auf das captureCopy2-Video des zweiten Quadrats
  captureCopy2.loadPixels();
  invert(captureCopy2);
  captureCopy2.updatePixels();

  captureCopy3.loadPixels();
  invert(captureCopy3);
  captureCopy3.updatePixels();

  captureCopy4.loadPixels();
  invert(captureCopy4);
  captureCopy4.updatePixels();

  // Zeige die Kopien der Webcam-Quadrate an
  image(captureCopy1, 539, 583, quadratGroesse, quadratGroesse);
  image(captureCopy2, 780, 225, quadratGroesse, quadratGroesse); // Zeige das Capture Copy des zweiten Quadrats an der richtigen Position
  image(captureCopy3, 661, 343, quadratGroesse, quadratGroesse); // Zeige das Capture Copy des zweiten Quadrats an der richtigen Position
  image(captureCopy4, 661, 103, quadratGroesse, quadratGroesse);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function invert(captureCopy){
  for (let y = 0; y < captureCopy.height; y++) {
    for (let x = 0; x < captureCopy.width; x++) {
      let index = (x + y * captureCopy.width) * 4;
      let r = captureCopy.pixels[index + 0];
      let g = captureCopy.pixels[index + 1];
      let b = captureCopy.pixels[index + 2];
      let a = captureCopy.pixels[index + 3];

      // Farben invertieren (Blur-Effekt)
      captureCopy.pixels[index + 0] = 255 - r; // R
      captureCopy.pixels[index + 1] = 255 - g; // G
      captureCopy.pixels[index + 2] = 255 - b; // B
    }
  }
}