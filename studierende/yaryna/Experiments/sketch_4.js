let bild;
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

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  fullscreen();

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