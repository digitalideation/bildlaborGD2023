let bild;
let points;
let bounds;
let font;

let wort="Voyager";

function preload(){
//bild=loadImage("assets/FL5.png");
bild=loadImage("assets/Test1.png");
bildTwo=loadImage("assets/FL5.png");
font = loadFont('assets/KKL-Narrow.otf');
}







function setup() {
  createCanvas(900, 900);
  bild.resize(width, 0);

  stroke(0);
  noFill();
  //noStroke();
  //fill(255, 104, 204, 10);

  
    points = font.textToPoints('V', 0, 0, 1000, {
    sampleFactor: 0.4,
    simplifyThreshold: 0
  });
  bounds = font.textBounds('V', 0, 0, 1000);

  
}







function draw() {
  //background(255);
  image(bild, 0, 0);



  //beginShape();
  translate(bounds.x , -bounds.y );
  //translate(width/2, height/2);
  translate(20, 200);

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    ellipse(
      p.x +
        sin(100 * p.y / bounds.h + millis() / 80) ,
      //p.y, 40,10
      p.y, 50,1
    );
 
  }
  
}
