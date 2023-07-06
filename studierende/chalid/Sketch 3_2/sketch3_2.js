let bild;
let points;
let bounds;

let wort="Voyager";

function preload(){
bild=loadImage("assets/FL5.png")
}

let font;
function preload() {
  font = loadFont('assets/KKL-Narrow.otf');
}





function setup() {
  createCanvas(800, 800);
  //bild.resize(width, 0);

  stroke(0);
  //noFill();
  //noStroke();
  fill(136, 0, 255, 10);

  points = font.textToPoints('O', 0, 0, 500, {
    sampleFactor: 0.1,
    simplifyThreshold: 0

  });
  bounds = font.textBounds('O', 0, 0, 500);

}

function draw() {
  background(255);
 
  /*if(mouseX > 0){
   copy(bild, mouseX, mouseY, 100, 1, mouseX+20, mouseY+50, 100, 20);
  }*/

  //beginShape();
  translate(bounds.x , -bounds.y );
  translate(width/2, height/2);
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    ellipse(p.x + sin(30 * p.y / bounds.h + millis() / 300 *3) ,
    p.y, 100,100, 
    );
  }
  //endShape(CLOSE);
  
}

