let bild;
let sun;
let streifen=10;
let colWidth=0;

let streifenbreite =100;
let xPos=0;
let shiftX=0;

function preload () {
  bild=loadImage("assets/2023-06-19.png")
  sun=loadImage("assets/scan0039.png")

}
function setup() {
  createCanvas(windowWidth, 800);
  image (sun, 0, 0);
  bild.resize (width,0)
}