
let bg;
let images = [];

function preload() {
  bg = (0);
  images[0] = loadImage("assets/scan0048.jpg");
  images[1] = loadImage("assets/img5.png");
}

let img;
let imgIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
  pixelDensity(1);
  img = createGraphics(width, height);
}

function draw() {
  img.clear();

  for (let i = 0; i < 40; i++) {
    let x1 = floor(random(width));
    let y1 = floor(random(height));
    let x2 = x1 + round(random(-5, 5));
    let y2 = y1 + round(random(-5, 5));

    let pixelColor = images[imgIndex].get(
      x1,
      y1,
      round(random(5, 60)),
      round(random(5, 60))
    );
    img.set(x2, y2, pixelColor);
  }
  img.updatePixels();

  image(img, 0, 0);
}

function mousePressed() {
  imgIndex = (imgIndex + 1) % images.length;
}

