// Declare and initialize and array of images 
let images = [];
// let pixelatedimages = [];
let anzahlBilder = 7;
// let tilesX = 600;
// let tilesY = tilesX;
let grenzwert = 200


function preload() {

  // Load images to the array
  for (let i = 1; i < anzahlBilder; i++) {

    // Load the specific image to the slot in the array
    images[i] = loadImage("Bilder/" + i + ".png");


  }

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Slow down the whole thing
  frameRate(1);
  noLoop();

  pixelDensity(1);

  //pixelate images
  // for (let i = 1; i < images.length; i++) {
  //   let tileW = images[i].width / tilesX;
  //   let tileH = images[i].height / tilesY;
  //   pixelatedimages[i] = pixelate(images[i], tileW, tileH);

  // }


  // center images and rectangles 
  rectMode(CENTER);
  imageMode(CENTER);



}


function draw() {
  //background(200);

  for (let i = 0; i < 10; i++) {
    let shapeType = random(['rect', 'ellipse', 'triangle', 'quad', 'line']);
    let x = random(width);
    let y = random(height);
    let size = random(20, 100);
    let fillColor = color(random(255), random(255), random(255));
    fill(fillColor);
    noStroke;
    
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
  // create a red ellipse at the center of the background
  //fill(0, 255, 0);
  //noStroke();
  //ellipse(width / 2, height / 2, 700, 700);

  for (let i = 1; i < images.length; i++) {

    // Get the specific image
    let img = images[i];
    //console.log(img)

    // set random x and y positions
    let x = random(width);
    let y = random(height);

    // decide how large the image shall be
    let scalar = random(0.1, 0.5);

    // place the image with a probability of 50%
    if (random(1) < 0.5) {

      // place the image
      push();
      translate(x, y);
      scale(scalar);
      // resize that image
      //img.resize(1000, 0);
      // Apply a grayscale filter to the image
      //img.filter(GRAY);
      image(img, 0, 0);
      pop();
    }
  }

}
function pixelate(img, tileW, tileH) {
  let pg = createGraphics(img.width, img.height);

  //image(img, 100, 200);

  let small = createGraphics(tilesX, tilesY);
  small.copy(img, 0, 0, img.width, img.height, 0, 0, tilesX, tilesY);

  //image(small, 0, 200);

  for (let x = 0; x < tilesX; x++) {
    for (let y = 0; y < tilesY; y++) {

      let c = small.get(x, y);
      let r = round(red(c));
      let g = round(green(c));
      let b = round(blue(c));
      let transparenz = round(alpha(c));
      let bright = round((r + g + b) / 3);
      //let b = brightness(c);
      //console.log(c)
      pg.fill(bright);
      pg.noStroke();
      if (bright < grenzwert && transparenz > 50){
        pg.rect(x * tileW, y * tileH, tileW, tileH)
      };
       
    }


  }

  //image(pg, 100 , 200);

  return pg;
}
