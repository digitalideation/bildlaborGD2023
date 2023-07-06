let bild;

function preload(){
bild=loadImage("assets/No reason without madness_bw.png")
//bild=loadImage("assets/FL4.png")
//bild=loadImage("assets/A-V-A-N-T-G-A-R-D-E_0010_A.png")  // A
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bild.resize(width, 0);
 // image(bild, 0,0); //Mit Koordinaten Bild verschieben // falls ausgeklammert wird = bild wird gemalen
}

function draw() {
  //background(220);
  //copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh);
  //copy(bild, mouseX, mouseY, 100, 20, mouseX+20, mouseY+50, 100, 20); //falls kein if

  if(mouseX > 0){
    copy(bild, mouseX, mouseY, 100, 1, mouseX+20, mouseY+50, 100, 20);
  }
}
