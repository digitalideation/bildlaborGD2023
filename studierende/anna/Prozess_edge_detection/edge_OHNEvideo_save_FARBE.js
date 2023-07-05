let threshold = 1;
let video;
let isSaving = false;

let videowidth=1920;

let videoheight=1080

function setup() {
  createCanvas(2*videowidth, 1080); //neue Canvas für edge detection? 
  pixelDensity(1);

  video = createVideo("assets/AA.mp4");
  video.size(videowidth, videoheight);
  video.loop();
  video.hide();

  // Füge den Event Listener hinzu, um auf die Taste "s" zu reagieren
  window.addEventListener("keydown", keyPressed);
}

function draw() {
  background(0); // Reihenfolge in der draw function ändern?
  image(video, 0, 0, videowidth, height); // image soll nicht dargestellt werden
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
        plotPoint(me, randomColor());
      }
    }
  }
}

function plotPoint(index, color) {
  let x = (index / 4) % videowidth;
  let y = (index / 4 - x) / videowidth;

  push();
  translate(videowidth, 0);
  strokeWeight(3); //Konturbreite 
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
