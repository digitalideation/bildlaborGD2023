var s1 = function( sketch, canvas ) {

let images = [];
let anzahlBilder = 19;
let farben= [];
let placeholder=canvas;

sketch.preload = function() {
  for (let i = 1; i < sketch.anzahlBilder; i++) {
    sketch.images[i] = sketch.loadImage("Bilder/" + i + ".png");
  
  }
}


sketch.setup = function() {
  var f4Width = 895;  
  var f4Height = 1280;  
  let canv= sketch.createCanvas(f4Width, f4Height);
  canv.parent(sketch.placeholder);
  sketch.frameRate(1);
  //sketch.noLoop();
  sketch.pixelDensity(1);
  sketch.rectMode(sketch.CENTER);
  sketch.imageMode(sketch.CENTER);
  sketch.farben=['rgb(255, 170, 0)', 'rgb(243, 255, 0)']
 
}


sketch.draw = function() {
  //background(255);
   //let textContent = "Hallo, hier ist der Text!";
   let x = sketch.width / 2; 
   sketch.blendMode(sketch.SOFT_LIGHT);
  for (let i = 1; i < images.length; i++) {
    let img = images[i];
    let x = sketch.random(sketch.width);
    let y = sketch.random(sketch.height);
    let scalar = (0.1);
    if (sketch.random(1) < 0.5) {
      sketch.push();
      sketch.translate(x, y);
      sketch.scale(scalar);
      //img.resize(1000, 0);
      sketch.image(img, 0, 0);
      sketch.pop();
    }else{
    let shapeType = sketch.random(['rect', 'ellipse', 'triangle', 'quad', 'line']);
    let x = sketch.random(sketch.width);
    let y = sketch.random(sketch.height);
    let size = sketch.random(20, 100);
    let wuerfel = sketch.int(sketch.random(farben.length));
    let fillColor=farben[wuerfel];
    sketch.fill(fillColor);
    sketch.noStroke();
    if (shapeType === 'rect') {
      sketch.rect(x, y, size, size);
    } else if (shapeType === 'ellipse') {
      sketch.ellipse(x, y, size, size);
    } else if (shapeType === 'triangle') {
      let x2 = sketch.random(sketch.width);
      let y2 = sketch.random(sketch.height);
      let x3 = sketch.random(sketch.width);
      let y3 = sketch.random(sketch.height);
      sketch.triangle(x, y, x2, y2, x3, y3);
    } else if (shapeType === 'quad') {
      let x2 = sketch.random(sketch.width);
      let y2 = sketch.random(sketch.height);
      let x3 = sketch.random(sketch.width);
      let y3 = sketch.random(sketch.height);
      let x4 = sketch.random(sketch.width);
      let y4 = sketch.random(sketch.height);
      sketch.quad(x, y, x2, y2, x3, y3, x4, y4);
    } else if (shapeType === 'line') {
      let x2 = sketch.random(sketch.width);
      let y2 = sketch.random(sketch.height);
      sketch.line(x, y, x2, y2);
    }

    }
  }
 
}

}

let p5One=new p5(s1, "sketch-one");
