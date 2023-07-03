//https://www.youtube.com/watch?v=TXeG_GPBs0M
let canvas;

function preload() {
  img = loadImage("assets/IMG_0541.jpg");
}

function setup() {
  canvas = createCanvas(img.width, img.height);
  pixelDensity(1)
  image(img, width / 2 - img.width / 2, 0);

  
}
function draw() {}

function mouseClicked() {
 
  let pg = createGraphics(int(random(200) + 50), int(random(30) + 30));
  
  pg.copy(canvas, mouseX, mouseY, pg.width, pg.height, 0, 0, pg.width, pg.height);
  
  image(pg, mouseX + random(-10, 10), mouseY + random(-10, 10));
  
}
