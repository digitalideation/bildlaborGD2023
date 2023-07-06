let cat2;
let cat3;
let cat4;
let cat5;
let cat6;
let cat7;
let cat8;
let cat9;
let cat10;
let cat11;
let cat12;
let cat13; 
let cat14; 

let posX;
let posY;

let xoff = 0.0;
let yoff = 0.0;

let a = 0;
let isAnimationEnabled = true;

/*---variablen fuer die anzeige des random s/w bild ---*/
let dauer=60; //anzahl Frames 30 -> 0.5 sek
let onoff=0; //0 random bild wird nicht angezeigt
let zaehlerFrames=0;//zaehler, wie lange das bild angezeigt wurde


/*----Variablen fuer die Texte----------*/
let texte=["ALL MEDIA ARE EXTENSIONS OF SOME HUMAN FACULTY <BR> PSYCHIC <BR> OR <BR> PHYSCIAL", 
"EXTENSIONS OF <BR> SOME HUMAN FACULTY",
"THE MAJOR ADVANCES IN CIVILZATION ARE PROCESSES THAT ALL WRECK THE SCOIETES IN WHICH THEY OCCUR", 
"WRECK THE SOCIETES",
 "WHAT'S THAT BUZZZZZZZZZZZZZING?",
 "BUZZZZZZZZZZZZZZING?",  "MEDIA, BY ALTERING THE ENVIRONMENT, EVOKE IN US UNIQUE RATIOS OF SENSE PERCEPTIONS", 
 "ALTERING THE ENVIRONMENT", ]
let counterTexte=0;//counter fuer den key im text array

function preload() {
  cat1 = loadImage("assets/cat-eye.png");
  cat2 = loadImage("assets/cat ear small.png");
  cat3 = loadImage("assets/cat-eye-2.png");
  cat4 = loadImage("assets/cat-1192026_640.jpg");
  cat5 = loadImage("assets/ohrenseite.png");
  cat6=loadImage("assets/pfotelinks.png")
  cat7=loadImage("assets/nase.png")
  cat9=loadImage("assets/pfoterechts.png")
  cat10=loadImage("assets/fell.png")
  cat11=loadImage("assets/popo.png")
  cat12=loadImage("assets/brust.png")
  cat13=loadImage("assets/BREEDER.png")
  cat14=loadImage("assets/tail.png")
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("catcanvas");
  cat1.resize(cat1.width /5.5, 0);
  cat2.resize(cat2.width /1.3, 0);
  cat3.resize(cat3.width / 1.2, 0);
  cat4.resize(cat4.width / 9.0);
  cat5.resize(cat5.width / 3.5, 0);
  cat6.resize(cat6.width / 3, 0);
  cat7.resize(cat7.width / 2.2, 0);
  cat9.resize(cat9.width / 3.51, 0);
  cat10.resize(cat9.width /1., 0);
  cat11.resize(cat11.width /2.7, 0);
  cat12.resize(cat12.width / 2.9, 0);
  cat13.resize(cat13.width / 1, 0);
  cat14.resize(cat14.width /2.9, 0);
  posX = width / 2.7;
  posY = height / 3.5;
  posX2 = width /2.17;
  posY2 = height /10.08;
  posX3 = width / 2.15;
  posY3 = height / 3.28;
  posX5 = width /4.3;
  posY5 = height / 15;
  posX6 = width /4.8;
  posY6 = height /1.45;
  posX7 = width / 2.29;
  posY7 = height /2.56;
  posX9 = width /3.1;
  posY9 = height /1.43;
  posX10 = width /1.75;
  posY10 = height /2.5;
  posX11 = width /1.24;
  posY11 = height /2.29;
  posX12 = width / 4.6;
  posY12 = height /2.6;
  posX13 = width / 7;
  posY13 = height /2.5;
  posX14 = width / 1.5;
  posY14 = height /1.54;
  frameRate(20);
}

function draw() {
  if (isAnimationEnabled) {
  image(cat1, posX, posY);
  image(cat2, posX2, posY2);
  image(cat3, posX3, posY3);
  image(cat5, posX5, posY5);
  image(cat6, posX6, posY6);
  image(cat7, posX7, posY7);
  image(cat7, posX7, posY7);
  image(cat9, posX9, posY9);
  image(cat10, posX10, posY10);
  image(cat11, posX11, posY11);
  image(cat12, posX12, posY12);
  image(cat13, posX13, posY13);
  image(cat14, posX14, posY14);

xoff = (xoff + 0.2);
yoff = yoff + 0.9;

 let rndX = noise(xoff) * 9;
posX += random(-rndX, rndX);
posX2 += random(-rndX, rndX);
 posX3 += random(-rndX, rndX);
posX5 += random(-rndX, rndX);
posX6 += random(-rndX, rndX);
posX7 += random(-rndX, rndX);
posX9 += random(-rndX, rndX);
posX10 += random(-rndX, rndX);
posX11 += random(-rndX, rndX);
posX12 += random(-rndX, rndX);
posX13 += random(-rndX, rndX);
posX14 += random(-rndX, rndX);

let rndY = noise(yoff) * 9;
posY += random(-rndY, rndY);
 posY2 += random(-rndY, rndY);
posY3 += random(-rndY, rndY);
posY5 += random(-rndY, rndY);
posY6 += random(-rndY, rndY);
posY7 += random(-rndY, rndY);
posY9 += random(-rndY, rndY);
posY10 += random(-rndY, rndY);
posY11 += random(-rndY, rndY);
posY12 += random(-rndY, rndY);
posY13 += random(-rndY, rndY);
posY14 += random(-rndY, rndY);

a += 9;


//   // // Blitzeffekt: Zufällige Anzeige des Bildes für eine kurze Zeit
 if (Math.random() < 0.03 && onoff==0) {
//   //   // Anpassen des Wertes für die Blitzhäufigkeit
 document.getElementById("placeholder").innerHTML=texte[counterTexte];
document.getElementById("glitch").style.opacity = 1;
onoff=1; } 

  

if(onoff==1){
     zaehlerFrames++;
  }

 //reset
 if(zaehlerFrames >=dauer){
 onoff=0;
  zaehlerFrames=0;
document.getElementById("glitch").style.opacity = 0;
 counterTexte++;

 if(counterTexte >= texte.length){
 counterTexte=0;
   }
  }
}
}

// // Add mouse interaction
// function mouseClicked() {
//   // Randomize the positions of the cats when the mouse is clicked
//   posX = random(width);
//   posY = random(height);
//   posX2 = random(width);
//   posY2 = random(height);
//   posX3 = random(width);
//   posY3 = random(height);
//   posX5 = random(width);
//   posY5 = random(height);
//   posX6 = random(width);
//   posY6 = random(height);
//   posX7 = random(width);
//   posY7 = random(height);
//   posX9 = random(width);
//   posY9 = random(height);
//   posX10 = random(width);
//   posY10 = random(height);
// }

// // Add keyboard interaction
// function keyPressed() {
//   // Clear the canvas when the spacebar is pressed
//   if (keyCode === 32) {
//     clear();
//   }
// }

