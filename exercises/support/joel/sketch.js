// Declare and initialize and array of images 
let images = [];
let pixelatedimages = [];
let anzahlBilder = 2;
let tilesX = 150;
let tilesY = tilesX;



function preload(){

  // Load images to the array
  for (let i = 1; i < anzahlBilder; i++) {
   
    // Load the specific image to the slot in the array
    images[i] = loadImage("Bilder/" + i + ".jpg");


  }

}

function setup() {
  createCanvas(1500, 900);

  // Slow down the whole thing
  //frameRate(1);
  noLoop();

  pixelDensity(1);

  //pixelate images
  for (let i = 1; i < images.length; i++) {
    
    let tileW = images[i].width / tilesX;
    let tileH = images[i].height / tilesY;
    pixelatedimages[i]=pixelate(images[i], tileW,tileH);
      
  }
 

  // center images and rectangles 
  rectMode(CENTER);
  imageMode(CENTER);

 
  
}


function draw() {
  //background(200);


  // create a red ellipse at the center of the background
  fill(0, 255, 0);
  noStroke();
  //ellipse(width / 2, height / 2, 700, 700);

  for (let i = 1; i < images.length; i++) {

    // Get the specific image
    let img = pixelatedimages[i];
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
      //scale(scalar);
      // resize that image
      //img.resize(1000, 0);
      // Apply a grayscale filter to the image
      //img.filter(GRAY);
      //image(img, 0, 0);
      pop();
    }
  }

}
function pixelate(img, tileW, tileH){
  let pg=createGraphics(img.width, img.height);
  pg.pixelDensity(1);
  image(img, 100, 200);

  resizeImage(img, tilesX, tilesY, function(small) {
    image(small, 0, 200);
    // This code will be executed once the image has finished resizing
    for (let x = 0; x < tilesX; x++) {
      for (let y = 0; y < tilesY; y++) {
  
        let c = small.get(x, y);
        let r = round(red(c));
        let g = round(green(c));
        let b = round(blue(c));
        let bright=round((r+g+b)/3);
        //console.log(bright)
        if(bright > 150){
          pg.fill(255);
        }else{
          pg.fill(0);
        }
        
        pg.noStroke();
       
        pg.rect(x * tileW, y * tileH, tileW, tileH);
      }
    }
  
    image(pg, 100+pg.width, 200);
  
    return pg;
  });

  /*let small=createGraphics(tileW, tileH);
  small.copy(img,0,0,img.width, img.height, 0,0, tileW, tileH);

  image(small, 0, 200);
  small.loadPixels();
  small.updatePixels();*/

  
}


function resizeImage(image, newWidth, newHeight, callback) {
  image.resize(newWidth, newHeight);
  // You might need to reload the image data to reflect the resized dimensions
  image.loadPixels();
  image.updatePixels();
  if (typeof callback === 'function') {
    callback(image);
  }
}


