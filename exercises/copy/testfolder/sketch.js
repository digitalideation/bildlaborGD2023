let img;
let slices=50;
let col=0;

let a=0;

function preload(){

  img=loadImage("cindy-small.jpg")
}


function setup() {
  createCanvas(img.width, img.height); //width:600
  col=width/slices; //col 6  //slices:100

  frameRate(10);
}

function draw() {
  let posX=0;
  while(posX<width){
    let f=sin(radians(map((posX+a)%width, 0, width, 0, 180)));
    //console.log(f)
    col=map(f, 0, 1, 2, 10);
    //console.log(sin(radians(a)));
    push();
    translate(posX, 0)
    scale(-1,1);
    copy(img, posX, 0, col, height, -col, 0, col, height);
    pop();

    posX+=col;
    
  }

  a++;
  //noLoop();
  
}
