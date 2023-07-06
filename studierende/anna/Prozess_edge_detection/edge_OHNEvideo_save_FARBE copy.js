let threshold = 50;
let video;
let isSaving = false;

let videowidth = 960;
let videoheight = 540;

let edgeWidth = 3; // neue Variable für die Breite der Kantenpixel

function setup() {
  createCanvas(3 * videowidth, videoheight); // Die Breite der Canvas für die Kantenentdeckung auf das Dreifache setzen
  pixelDensity(1);

  video = createVideo("assets/ANIMATION.mp4");
  video.size(videowidth, videoheight);
  video.loop();
  video.hide();

  // Füge den Event Listener hinzu, um auf die Taste "s" zu reagieren
  window.addEventListener("keydown", keyPressed);
}

function draw() {
  background(0);
  image(video, 0, 0, videowidth, videoheight);
  detectEdge();

  // Zeige das gespeicherte Bild an, falls isSaving true ist
  if (isSaving) {
    saveCanvas("canvas_image", "png");
    isSaving = false;
    console.log("Bild gespeichert!");
  }
}

function detectEdge() {
  loadPixels();

  for (let y = 0; y < videoheight; y++) {
    for (let x = 0; x < videowidth; x++) {
      let index = (x + y * videowidth) * 4;
      let c = color(
        pixels[index],
        pixels[index + 1],
        pixels[index + 2],
        pixels[index + 3]
      );
      let b = brightness(c);

      let neighbours = [
        index - 4,
        index + 4,
        index - videowidth * 4,
        index + videowidth * 4
      ];

      compareBrightness(index, b, neighbours);
    }
  }
}

function compareBrightness(me, b, neighbours) {
  for (let n = 0; n < neighbours.length; n++) {
    if (
      neighbours[n] > 0 &&
      neighbours[n] < pixels.length - 1 &&
      (n === 0 || n === 1 || n === 2) // Nur die horizontalen Nachbarn überprüfen
    ) {
      let i = neighbours[n];
      let c = color(
        pixels[i],
        pixels[i + 1],
        pixels[i + 2],
        pixels[i + 3]
      );
      let neighbourBrightness = brightness(c);

      if (abs(b - neighbourBrightness) > threshold) {
        plotPoint(me, randomColor());
      }
    }
  }
}

function plotPoint(index, color) {
  let x = (index / 4) % videowidth;
  let y = Math.floor((index / 4) / videowidth);

  push();
  translate(2 * videowidth, 0); // Die x-Koordinate um das Doppelte verschieben
  strokeWeight(edgeWidth);
  stroke(color);
  point(x, y);
  pop();
}

function randomColor() {
  return color(random(255), random(255), random(255));
}

function keyPressed(event) {
  // Überprüfe, ob die Taste "s" gedrückt wurde
  if (event.key === "s") {
    // Setze isSaving auf true, um das Bild im draw() zu speichern
    isSaving = true;
  }
}
