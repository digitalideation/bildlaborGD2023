//Animierte Typo


let pg;
let font;
let skalierung = 5;


function preload() {
font = loadFont ("assets/KKL-Narrow.otf")
}


var canvas = document.getElementById("defaultCanvas0");
canvas.parentNode.removeChild("defaultCanvas0");

function setup() { 

const canvas = createCanvas(1600, 800);
canvas.parent('sketch-kkl-animated');


  pg = createGraphics(1600/ skalierung, 800/ skalierung);


  //pg.background(0);
  pg.fill(255);
  pg.textFont(font);
  pg.textSize(30);
  pg.push();
  //pg.translate(width/2, height/2-60);
  //pg.textAlign(CENTER, CENTER);
  //pg.text("there can \nbe no \nreason without \nmadness", 30, 30);
  pg.text("N", 40, 30);
  pg.text("O", 50, 50);
  pg.text("M", 60, 70);
  pg.text("A", 70, 90);
  pg.text("D", 80, 110);
  pg.pop();

}

function draw() {
  background(0);

  
  let tilesX = 9;
  let tilesY = 9;

  let tileW = int(width/tilesX / skalierung);
  let tileH = int(height/tilesY / skalierung);

push();

scale(skalierung, skalierung);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {

      // WAVE
      let wave = int(cos((frameCount + ( x*y )) * 0.1) * 40);
     

      // SOURCE
      let sx = x*tileH + wave;
      let sy = y*tileW;
      let sw = tileH;
      let sh = tileW;


      // DESTINATION
      let dx = x*tileW;
      let dy = y*tileH;
      let dw = tileW;
      let dh = tileH;
      
      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);
 
    }
  }
pop();

}