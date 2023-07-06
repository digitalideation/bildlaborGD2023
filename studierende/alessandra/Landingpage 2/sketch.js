let img;
let cols = 100;
let posX = 0;
let shiftX = 0;
let secondImg;
let smallPointSize = 10;
let largePointSize = 60;
let frameWidth = 400;
let frameHeight = 300;
let typedText = "imperfections";
let currentText = typedText;
let animationActive = false;
let zoomActive = false;
let zoomLevel = 1.0;
let zoomSpeed = 0.02;
let pixelRayColor;
let zoomedImg;
let newImg;
let canvas3D;

let woerter = ["imperfections", "perfection", "transparency"];

let additionalText = [
  "I emphasize the positive consequences of these imperfections by showing the new opportunities they facilitate",
  "The user has to realize that improving is nothing more than a proprietary protocol, a deluded consumer myth about progression towards a holy grail of perfection.",
  "The quest for complete transparency has changed the computer system into a highly complex assemblage...",
];
let key = 0;

let bilder = [];

let customFont;
let wordFont;
let fontSize = 65;
let wordFontSize = 36;

let additionalTextFontSize = 18;

function preload() {
  img = loadImage("images/Bild7.jpg");
  secondImg = loadImage("images/Bild5.jpg");
  zoomedImg = loadImage("images/Bild8.jpg");
  newImg = loadImage("images/Bild3.jpg");

  bilder = [img, secondImg, zoomedImg, newImg];

  customFont = loadFont("fonts/966323.ttf");
  wordFont = loadFont("fonts/Times New Roman.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  secondImg.loadPixels();
  frameRate(5);
  pixelRayColor = color(255, 0, 0);


  canvas3D = createGraphics(windowWidth, windowHeight, WEBGL);
  canvas3D.noStroke();
  canvas3D.hide();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  canvas3D = createGraphics(windowWidth, windowHeight, WEBGL);
  canvas3D.noStroke();
  canvas3D.hide();
}

function draw() {
  if (!zoomActive) {
    background(0);

    if (animationActive) {
      image(bilder[key], 0, 0, windowWidth, windowHeight);
      for (let i = 0; i < cols; i++) {
        let x = random(windowWidth);
        let y = random(windowHeight);
        let pointillize = random(smallPointSize, largePointSize);
        let pix = bilder[key].get(x, y);
        fill(pix, 128);
        rect(x, y, pointillize, pointillize);
      }
    }

    let additionalTextX = windowWidth / 2;
    let additionalTextY = windowHeight - 600;
    fill(255);
    textFont(customFont);
    textSize(additionalTextFontSize);
    textAlign(CENTER, CENTER);
    text(additionalText[key], additionalTextX, additionalTextY);

    let textX = windowWidth / 2 + sin(frameCount * 0.02) * (windowWidth / 4);
    let textY = windowHeight / 2 + cos(frameCount * 0.03) * (windowHeight / 4);

    let complementaryColor = color(255 - red(pixelRayColor), 255 - green(pixelRayColor), 255 - blue(pixelRayColor));

    fill(complementaryColor);
    textFont(wordFont);
    textSize(fontSize);
    textAlign(CENTER, CENTER);
    text(woerter[key], textX, textY);

    let rayX = mouseX;
    let rayY = mouseY;

    for (let i = 0; i < 30; i++) {
      let raySize = i * 2;
      let rayAlpha = map(i, 0, 30, 255, 0);
      let rayColor = color(pixelRayColor);
      rayColor.setAlpha(rayAlpha);
      fill(rayColor);
      ellipse(rayX, rayY, raySize, raySize);
    }
  }
}

function mouseClicked() {
  let textAreaWidth = textWidth(currentText);
  let textAreaHeight = textAscent() + textDescent();
  let textAreaX = windowWidth / 2 - textAreaWidth / 2;
  let textAreaY = windowHeight / 2 - textAreaHeight / 2;

  key++;
  if (key > woerter.length - 1) {
    key = 0;
  }

  if (
    mouseX >= textAreaX &&
    mouseX <= textAreaX + textAreaWidth &&
    mouseY >= textAreaY &&
    mouseY <= textAreaY + textAreaHeight &&
    !animationActive
  ) {
    if (!zoomActive) {
      animationActive = true;
      currentText = "perfection";
    } else {
      zoomActive = false;
      zoomLevel = 1.0;
      currentText = typedText;
      canvas3D.hide();
    }
    return false;
  }
}

function startAnimation() {
  if (!animationActive) {
    animationActive = true;
    currentText = "perfection";
  }
}

document.addEventListener("click", startAnimation);

function mouseMoved() {
  pixelRayColor = color(random(255), random(255), random(255));
}
