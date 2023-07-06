let threshold = 3;
let video;
let isSaving = false;

function setup() {
  createCanvas(640 * 2, 640);
  pixelDensity(1);

  video = createVideo("assets/weiss_morph.mp4", videoLoaded);
  video.size(width, height);
  video.hide();

  // Füge den Event Listener hinzu, um auf die Taste "s" zu reagieren
  window.addEventListener("keydown", keyPressed);
}

function videoLoaded() {
  video.loop();
}

function draw() {
  background(0);
  image(video, 0, 0); // Zeige das Video an
  filter(POSTERIZE, 2); // Wende den Posterize-Filter an
  detectEdge(); // Rufe detectEdge() auf, um die Edge Detection zu berechnen

  // Zeige das gespeicherte Bild an, falls isSaving true ist
  if (isSaving) {
    saveCanvas("canvas_image", "png");
    isSaving = false;
    console.log("Bild gespeichert!");
  }
}

function detectEdge() {
  loadPixels();

  for (let i = 0; i < pixels.length; i += 4) {
    let c = color(pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3]);
    let b = brightness(c);

    let neighbours = [i - 4, i + 4, i - width * 4, i + width * 4];

    compareBrightness(i, b, neighbours);
  }
}

function compareBrightness(me, b, neighbours) {
  for (let n = 0; n < neighbours.length; n++) {
    if (neighbours[n] > 0 && neighbours[n] < pixels.length - 1) {
      let i = neighbours[n];
      let c = color(pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3]);
      let neighbourBrightness = brightness(c);

      if (abs(b - neighbourBrightness) > threshold) {
        plotPoint(me);
      }
    }
  }
}

function plotPoint(index) {
  let x = (index / 4) % width;
  let y = (index / 4 - x) / width;

  push();
  translate(width / 0, 1);
  strokeWeight(2);
  stroke(255, 255, 255);
  point(x, y);
  pop();
}

function keyPressed(event) {
  // Überprüfe, ob die Taste "s" gedrückt wurde
  if (event.key === "s") {
    // Setze isSaving auf true, um das Bild im draw() zu speichern
    isSaving = true;
  }
}
