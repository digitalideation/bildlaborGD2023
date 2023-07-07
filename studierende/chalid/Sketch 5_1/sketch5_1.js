let bild;
let points;
let bounds;
let font;
let sinWidh=5;
let r = 0;
let b = 255;

let wort = "Voyager";

function preload() {
  //bild=loadImage("assets/FL5.png");
  //bild = loadImage("assets/Test1.png");
  bild = loadImage("assets/Test1_ob.png");
  font = loadFont('assets/KKL-Narrow.otf');
}







function setup() {
  createCanvas(windowHeight, windowWidth);
  bild.resize(width, height);

  stroke(0);
  noFill();


  points = font.textToPoints('V', 0, 0, 1000, {
    sampleFactor: 0.4,
    simplifyThreshold: 0
  });
  bounds = font.textBounds('V', 0, 0, 1000);


}







function draw() {
  background(r, 0, b);
  image(bild, 0, 0);


  r = map(mouseY, 0, 800, 255, 0);
  b = map(mouseX, 0,800,255, 0);
  fill(255);
  circle(mouseX, mouseY, 30);



  //beginShape();
  translate(bounds.x, -bounds.y);
  //translate(width/2, height/2);
  translate(100, 150);

  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    ellipse(
      p.x +
      sin(50 * p.y / bounds.h + millis() / 80) * sinWidh,
      //p.y, 40,10
      p.y, 50, 1
    );

  }

}










//SCROLLING

let onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;


document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;


  //console.log(window.scrollY)
  let percentScrolled = Math.round(window.scrollY / onePercent);
  //console.log(percentScrolled);
 

  sinWidh = percentScrolled + 2 ;
  console.log(sinWidh)

  //middle of page image fades out
  /*if(percentScrolled > 50){
    document.getElementById("defaultCanvas0").style.opacity = 0;
  }else{
    document.getElementById("defaultCanvas0").style.opacity = 1;
  }*/


});
