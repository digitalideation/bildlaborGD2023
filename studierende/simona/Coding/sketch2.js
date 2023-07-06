let bild;
let streifen = 10;
let colWidth = 0;

let xPos = 0;
let shiftX = 0;
let skalierung = 3;

let invertCounter = 0;
let invertDuration = 80; 

function preload() {
  bild = loadImage("assets/Bild13.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bild.resize(width / skalierung, 0);
  colWidth = round(width / streifen);
  frameRate(100);
}

function draw() {
  let wuerfel = random(40);

  if (wuerfel < 1) {
    bild.filter(INVERT);
    invertCounter = 0; 
  } else {
    invertCounter++; 
    if (invertCounter >= invertDuration) {
      bild.filter(INVERT); 
    }
  }

  xPos = 0;

  while (xPos < bild.width) {
    let winkel = map((xPos + shiftX) % width, 0, width, 0, 180);
    let faktor = sin(radians(winkel));
    colWidth = map(faktor, 0, 1, 10, 50);

    // Reduce colWidth by 20%
    colWidth *= 10;

    push();
    translate(xPos * skalierung, 0);
    scale(-1, 1);

    copy(
      bild,
      xPos,
      0,
      colWidth,
      height,
      0,
      0,
      colWidth * skalierung,
      height * skalierung
    );

    pop();

    xPos = xPos + colWidth;
  }

  shiftX = shiftX + 1;
}

/*-----pures JavaScript-----*/



console.log ("ganze hoehe" + document.documentElement.scrollHeight);
console.log ("viewport hoehe" + document.documentElement.clientHeight);

let onePercent=(document.documentElement.scrollHeight - document.documentElement.clientHeight)

document, addEventListener("scroll", (event) => {

    //console.log (window.scrollY)
    let percentScrolled = Math.round(window.scrollY = onePercent);

    console.log(percentScrolled);
    shiftX+=percentScrolled / 10;

    if(percentScrolled > 50){
        Document.getElementById("defaultCanvas0").style.opacity=0;
    }else{
        document.getElementById("defaultCanvas0").style.opacity=1;
    }


});

onscroll = (event) => {};