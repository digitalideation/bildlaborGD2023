let bild;
let points;
let bounds;
let font;

let wort="Voyager";

function preload(){
//bild=loadImage("assets/FL5.png");
bild=loadImage("assets/Test1.png");
font = loadFont('assets/KKL-Narrow.otf');
}







function setup() {
  createCanvas(900, 900);
  bild.resize(width, 0);

  stroke(0);
  noFill();
  //noStroke();
  //fill(255, 104, 204);

  points = font.textToPoints('V', 0, 0, 800, {
    sampleFactor: 0.4,
    simplifyThreshold: 0
  });
  bounds = font.textBounds('V', 0, 0, 800);

  frameRate(5)
}






function draw() {
  background(255);
  // image(bild, 0, 0);
  //copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh);
  //copy(bild, mouseX, mouseY, 100, 20, mouseX+20, mouseY+50, 100, 20); //falls kein if

  /*if(mouseX > 0){
   copy(bild, mouseX, mouseY, 100, 1, mouseX+20, mouseY+50, 100, 20);
  }*/

  //beginShape();
  translate(bounds.x , -bounds.y );
  //translate(width/2, height/2);
  translate(30, 70);
  
  const v = p5.Vector.random2D()

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    ellipse(
    p.x + v.x * 30 + 
    sin(60 * p.y / bounds.h + millis() / 300) ,
    p.y + v.y * 10, 30,30
  );
    // point(p.x + v[0] * 10, p.y + v[1] * 10)
   
   
    
   
    //sphere(20)
  }
  //endShape(CLOSE);
  
}
