let bild;
let sun;
let streifen=10;
let colWidth=0;
let imgCopies=[]
let pos = [];
let targetPos = [];
let mousePos = [];
let arrayLength = 6;

let streifenbreite =100;
let xPos=0;
let shiftX=0;

function preload () {
 bild=loadImage("assets/scan0048.jpg")

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  fullscreen();

  image (bild, 0, 0);
  //image (sun, 0, 0);
  //bild.resize (width,0)

  //colWidth = round(width / streifen);
  //frameRate(1)
  //noLoop();
  for (let i = 0; i< arrayLength; i++) {
    pos[i] = createVector(0, 0);
    targetPos[i] = createVector(0, 0);
  }
  mousePos = createVector(width/2, height/2);
}


function draw() {
  mousePos.set(mouseX, mouseY);

 for (var i = 0; i < pos.length; i++) {
       targetPos[i].set(mousePos);
       targetPos[i].sub(pos[i]);  
       targetPos[i].mult((i*0.1) + 0.05); 
       pos[i].add(targetPos[i]);
       //sun(pos[i].x, pos[i].y, 60, 60);
       copy(bild, 0, 0, mouseX, mouseY, pos[i].x-300/2, pos[i].y-300/2, 300, 300)
   }
  }

/*------------pures JavaScript-------*/
console.log("ganze hoehe"+document.documentElement.scrollHeight);
console.log("viewport hoehe"+document.documentElement.clientHeight);
let onePercent= (document.documentElement.scrollHeight- document.documentElement.clientHeight)/100

document.addEventListener("scroll", (event) => {
  let percentScrolled = Math.round(window.scrollY / onePercent);
  //console.log(window.scrollY)
  console.log(percentScrolled);
  

  if (percentScrolled > 50){
    document.getElementById("defaultCanvas0").style.opacity=0;
  }else{
    document.getElementById("defaultCanvas0").style.opacity=1;
  }

});