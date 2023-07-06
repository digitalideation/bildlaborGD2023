// 2D Water Ripples
// The Coding Train / Daniel Shiffman
// Algorithm: https://web.archive.org/web/20160418004149/http://freespace.virgin.net/hugo.elias/graphics/x_water.htm

let bild;
let skalierung = 2;
let cols;
let rows;
let current; // = new float[cols][rows];
let previous; // = new float[cols][rows];

let dampening = 0.99;


function preload(){
  //bild=loadImage("assets/FL1.png")
  bild=loadImage("assets/A-V-A-N-T-G-A-R-D-E_0000_E.png")
   }




function setup() {
    createCanvas(windowWidth, windowHeight);
    bild.resize(width, 0);
    //bild(img, 0, 0, width, height, 0, 0, bild.width, bild.height, COVER);

  pixelDensity(1);
 
  cols = width;
  rows = height;
  // The following line initializes a 2D cols-by-rows array with zeroes
  // in every array cell, and is equivalent to this Processing line:
  // current = new float[cols][rows];
  current = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
  previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
}



function mouseDragged() {
  previous[mouseX][mouseY] = 3000;
}




function draw() {
  image(bild, 0, 0);

  loadPixels();
  for (let i = 1; i < cols - 1; i++) {
    for (let j = 1; j < rows - 1; j++) {
      current[i][j] =
        (previous[i - 1][j] +
          previous[i + 1][j] +
          previous[i][j - 1] +
          previous[i][j + 1]) /
          2 -
        current[i][j];
      current[i][j] = current[i][j] * dampening;
      // Unlike in Processing, the pixels array in p5.js has 4 entries
      // for each pixel, so we have to multiply the index by 4 and then
      // set the entries for each color component separately.
      let index = (i + j * cols) * 4;
      pixels[index + 0] = current[i][j];
      pixels[index + 1] = current[i][j];
      pixels[index + 2] = current[i][j];
    }
  }
  updatePixels();

  let temp = previous;
  previous = current;
  current = temp;


  push();

scale(skalierung, skalierung);
}