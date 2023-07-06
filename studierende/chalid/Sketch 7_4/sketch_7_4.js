let pg;
let font;
let skalierung = 5.3;


function preload() {
font = loadFont ("assets/KKL-Narrow.otf")
}




function setup() {
  
//createCanvas(900, 900);
createCanvas(1300, 1300);
  pg = createGraphics(1300/ skalierung, 1300/ skalierung);


  pg.background(0);
  pg.fill(255);
  pg.textFont(font);
  pg.textSize(70);
  pg.push();
  //pg.translate(width/2, height/2-60);
  //pg.textAlign(CENTER, CENTER);
  //pg.text("there can \nbe no \nreason without \nmadness", 30, 30);
  pg.text("N", 50, 70);
  pg.text("O", 80, 100);
  pg.text("M", 110, 130);
  pg.text("A", 140, 160);
  pg.text("D", 160, 190);
  pg.pop();

}

function draw() {
  background(0);
  let textKerning = 20;
  textLeading(10);
  //let textLeading = 10;
  
  let tilesX = 8;
  let tilesY = 8;

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