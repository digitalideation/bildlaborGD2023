let bild;
let shiftX = 0;
let shiftY = 0;
let speed = 1;
let direction = 1;
let skalierung = 3;
let clickInvert = false;

function preload() {
  bild = loadImage("assets/Bild13.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bild.resize(width / skalierung, 0);
  frameRate(60);
}

function draw() {
  background(220);

  let maxShiftX = width - bild.width * skalierung;
  let maxShiftY = height - bild.height * skalierung;

  shiftX = constrain(shiftX + speed * direction, -maxShiftX, 0);
  shiftY = constrain(shiftY + speed * direction, -maxShiftY, 0);

  let distortionRadius = 200; // Adjust the size of the distortion region

  let mouseXDistorted = mouseX - width / 2 + bild.width * skalierung / 2;
  let mouseYDistorted = mouseY - height / 2 + bild.height * skalierung / 2;

  push();
  translate(width / 2, height / 2);
  translate(shiftX, shiftY);

  if (clickInvert) {
    let invertedImage = createImage(bild.width, bild.height);
    invertedImage.copy(bild, 0, 0, bild.width, bild.height, 0, 0, bild.width, bild.height);
    invertedImage.filter(INVERT);
    applyDistortion(invertedImage, mouseXDistorted, mouseYDistorted, distortionRadius);
    image(invertedImage, -bild.width * skalierung / 2, -bild.height * skalierung / 2, bild.width * skalierung, bild.height * skalierung);
  } else {
    applyDistortion(bild, mouseXDistorted, mouseYDistorted, distortionRadius);
    image(bild, -bild.width * skalierung / 2, -bild.height * skalierung / 2, bild.width * skalierung, bild.height * skalierung);
  }

  pop();
}

function mouseClicked() {
  if (mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height) {
    clickInvert = !clickInvert;
  }
}

function mouseMoved() {
  speed = map(mouseX, 0, width, 0.1, 5);
  direction = map(mouseY, 0, height, -1, 1);
}

function applyDistortion(img, mouseXDistorted, mouseYDistorted, distortionRadius) {
  img.loadPixels();
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let distX = x - mouseXDistorted;
      let distY = y - mouseYDistorted;
      let distance = dist(distX, distY, 0, 0);
      if (distance < distortionRadius) {
        let distortionAmt = map(distance, 0, distortionRadius, 0, 0.1);
        let offsetX = noise(x * distortionAmt, y * distortionAmt) * 20 - 10;
        let offsetY = noise(x * distortionAmt + 1000, y * distortionAmt + 1000) * 20 - 10;
        let srcX = x + offsetX;
        let srcY = y + offsetY;
        srcX = constrain(srcX, 0, img.width - 1);
        srcY = constrain(srcY, 0, img.height - 1);
        let srcPixel = img.get(srcX, srcY);
        img.set(x, y, srcPixel);
      }
    }
  }
  img.updatePixels();
}
