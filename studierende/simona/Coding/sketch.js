let bild;
let streifen=10;
let colWidth=0;

let streifenbreite =0;



let xPos =0;

let shiftX =0;

function preload (){
bild=loadImage ("assets/Bild1.png")
}

function setup() {
  createCanvas(500,1000);
  bild.resize(width, 0)
  //image(bild, 100,100)

  colWidth = round(width / streifen);

frameRate(60);
  // noLoop();


}

function draw() {
  //background(220);
  //copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)

  /*if(mouseX > 0 ){
    copy(bild, mouseX, mouseY, 200, 100, mouseX+20, mouseY+50, 200, 100)
  }*/

  xPos=0;

  while(xPos < width){
 // for(let i=0; i < streifen; i=i+1){

   let winkel=map((xPos+shiftX) % width, 0, width, 0, 180);
    // console.log(sin(radians(winkel)));

    let faktor= sin(radians(winkel))
    colWidth = map(faktor, 0,1,10,50);

    push();
    translate(xPos, 0)
    scale(-1, 1);
    copy(bild, xPos, 0, colWidth, height, 0, 0, colWidth, height);

    pop();

    xPos=xPos+colWidth;

  }
  
shiftX=shiftX+1;

}
