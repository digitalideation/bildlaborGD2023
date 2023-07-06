let bild;
let streifen=10;
let colWidth=0;

let streifenbreite =100;
let xPos=0;
let shiftX=0;

function preload () {
  bild=loadImage("assets/2023-06-19.png")
  bild2=loadImage("assets/scan0042.jpg")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background (255, 150, 255)
  bild.resize (width,0)
  bild2.resize (width,0)
  //image (bild,0,0)

  colWidth = round(width / streifen);
  //frameRate(1)
  //noLoop();
}

function draw() {
  //background(220);
  //copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)

  /*if (mouseX > 0) {
  copy(bild, mouseX, mouseY, 50, 20, mouseX, mouseY, 50, 20)
  }*/

  xPos=0;

  while(xPos<width){
  //for(let i=0; i < streifen; i=i+1){

  xPos=xPos+colWidth;
    let winkel=map((xPos+shiftX) % width, 0, width, 0, 180);
    //console.log(sin(radians(winkel)));

    let faktor = sin(radians(winkel));
    console.log(faktor);

    colWidth =map(faktor, 0, 1, 1, 100)
    //console.log(colWidth);

     push();
     translate(xPos, 0)
     scale(-1, 1);
     copy(bild, xPos, 0, colWidth, height, 0, 0, colWidth, height);
     copy(bild2, xPos, 400, colWidth, height, 400, 400, colWidth, height);
     pop();

  }

  //shiftX=shiftX+1
  shiftX++
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

})
  