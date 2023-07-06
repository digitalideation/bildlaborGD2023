/*let bild;
let sun;
let streifen = 10;
let colWidth = 0;

let streifenbreite = 100;
let xPos = 0;
let shiftX = 0;

let randomPosX = 0;
let randomPosY = 0;

let walkingX = 0;
let walkingY = 0;

let directionX = 1;
let directionY = 1;

function preload() {
  bild = loadImage("assets/scan0048.jpg")
  //sun=loadImage("assets/scan0039.png")

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  fullscreen();

  //image(bild, 0, 0);

  randomPosX = random(width);
  randomPosY = random(height);

  randomPosX = width/2;
  randomPosY = height/2;

  walkingX=random(10);
  walkingY=random(10);
}


function draw() {

  randomPosX = randomPosX + walkingX * directionX;
  randomPosY = randomPosY + walkingY * directionY;

  if ((randomPosX > width - 300) && directionX==1) {
    directionX = -1;

    walkingX=random(10);
    walkingY=random(10);
  }

  if (randomPosX < 0 && directionX==-1) {
    directionX = 1;
  }
  if (randomPosY < 0 && directionY==-1) {
    directionY = 1;
  }
  if (randomPosY > height-300 && directionY==1) {
      directionY = -1;
      walkingX=random(10);
      walkingY=random(10);
  }
  copy(bild, 0, 0, randomPosX, randomPosY, randomPosX , randomPosY , 300, 300);
}

/*------------pures JavaScript-------
console.log("ganze hoehe" + document.documentElement.scrollHeight);
console.log("viewport hoehe" + document.documentElement.clientHeight);
let onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100

document.addEventListener("scroll", (event) => {
  let percentScrolled = Math.round(window.scrollY / onePercent);
  //console.log(window.scrollY)
  console.log(percentScrolled);

  /*walkingX = percentScrolled / 10 + random(10);
  walkingY = percentScrolled / 10 + random(10);

  walkingX=walkingX*percentScrolled / 80 + 5;
  walkingY=walkingY*percentScrolled / 80 + 5;


  if (percentScrolled > 50) {
    document.getElementById("defaultCanvas0").style.opacity = 0;
  } else {
    document.getElementById("defaultCanvas0").style.opacity = 1;
  }

});*/

let bg;
let images = [];

function preload() {
  bg = loadImage("assets/000.jpg");
  images[0] = loadImage("assets/scan0048.jpg");
  images[1] = loadImage("assets/scan0040.jpg");
  images[2] = loadImage("assets/scan0041.jpg");
  images[3] = loadImage("assets/scan0050.jpg");
  images[4] = loadImage("assets/scan0051.jpg");
  images[5] = loadImage("assets/scan0047.jpg");
  images[6] = loadImage("assets/scan0044.jpg");
  images[7] = loadImage("assets/scan0042.jpg");
  images[8] = loadImage("assets/scan0046.jpg");
  images[9] = loadImage("assets/scan0049.jpg");
  images[10] = loadImage("assets/scan0039.jpg");
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

