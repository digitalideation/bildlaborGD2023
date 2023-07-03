let images = [];
let anzahlBilder = 19;
let farben= [];
let font;

function preload() {
  for (let i = 1; i < anzahlBilder; i++) {
    images[i] = loadImage("Bilder/" + i + ".png");
    //font = loadFont("Font/SwissNow Trial-VF.ttf");
  }
}


function setup() {
  var f4Width = 895;  
  var f4Height = 1280;  
  let cvn=createCanvas(f4Width, f4Height);
  frameRate(1);
  //noLoop();
  pixelDensity(1);
  rectMode(CENTER);
  imageMode(CENTER);
  farben=['rgb(255, 170, 0)', 'rgb(243, 255, 0)']
  //textFont(font); 
  //textSize(20);
  //textAlign(CENTER, CENTER); 
}


function draw() {
  //background(255);
   //let textContent = "Hallo, hier ist der Text!";
  let x = width / 2; 
  blendMode(SOFT_LIGHT);
  for (let i = 1; i < images.length; i++) {
    let img = images[i];
    let x = random(width);
    let y = random(height);
    let scalar = (0.1);
    if (random(1) < 0.5) {
      push();
      translate(x, y);
      scale(scalar);
      //img.resize(1000, 0);
      image(img, 0, 0);
      pop();
    }else{
    let shapeType = random(['rect', 'ellipse', 'triangle', 'quad', 'line']);
    let x = random(width);
    let y = random(height);
    let size = random(20, 100);
    let wuerfel = int(random(farben.length));
    let fillColor=farben[wuerfel];
    fill(fillColor);
    noStroke();
    if (shapeType === 'rect') {
      rect(x, y, size, size);
    } else if (shapeType === 'ellipse') {
      ellipse(x, y, size, size);
    } else if (shapeType === 'triangle') {
      let x2 = random(width);
      let y2 = random(height);
      let x3 = random(width);
      let y3 = random(height);
      triangle(x, y, x2, y2, x3, y3);
    } else if (shapeType === 'quad') {
      let x2 = random(width);
      let y2 = random(height);
      let x3 = random(width);
      let y3 = random(height);
      let x4 = random(width);
      let y4 = random(height);
      quad(x, y, x2, y2, x3, y3, x4, y4);
    } else if (shapeType === 'line') {
      let x2 = random(width);
      let y2 = random(height);
      line(x, y, x2, y2);
    }

    }
  }
 
}
