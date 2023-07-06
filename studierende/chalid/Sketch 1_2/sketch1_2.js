let bild;
let streifen=11;
let colWidth=0;

let streifenbreite=100;

let xPos=0;

let shiftX=0;

function preload(){
bild=loadImage("assets/FL1_2.png")
}




function setup() {
  createCanvas(800, 800);
  //image(bild, 100,100); //Mit Koordinaten Bild verschieben // falls ausgeklammert wird = bild wird gemalen

  colWidth = round(width / streifen);

  //noLoop();
}







function draw() {
  //background(220);
  //copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh);

  /*if(mouseX > 0){
    copy(bild, mouseX, mouseY, 100, 1, mouseX+20, mouseY+50, 100, 20);
  }*/


  //Schleife

  xPos = 0;
  while(xPos < width){
  //for(let i=0; i < streifen; i=i+1){

    let winkel = map((xPos + shiftX) % width, 0, width, 0, 180); //Width wird in Grad/Winkel umgerechnet
   //console.log(sin(radians(winkel)));

    let faktor = sin(radians(winkel));
    colWidth = map(faktor, 0,1,10,100);

    push(); //speichern altes Koordinatensystem
    translate(xPos, 0); //Koordinatensystem spiegeln
    scale(-1, 1); //flip x-Achse
    copy(bild, xPos, 0, colWidth, height, 0, 0, colWidth, height);


pop(); //wieder zurück - Ausgangsposition

xPos=xPos+colWidth; // x Position wird von Spalte zu Spalte geschoben
  }

shiftX=shiftX+1; // oder shiftX++ // wenn schneller dann shiftX+2

}
