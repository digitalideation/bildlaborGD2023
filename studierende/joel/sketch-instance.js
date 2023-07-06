var s1 = function (sketch, canvas) {
  let images = [];
  let anzahlBilder = 54;
  let farben = [];
  let placeholder = canvas;
  let textbild;

  sketch.preload = function () {
    for (let i = 1; i <= anzahlBilder; i++) {
      images[i] = sketch.loadImage("Bilder/" + i + ".png");
    }
  }

  sketch.setup = function () {
    var f4Width = 855;
    var f4Height = 1240;
    var factor = sketch.windowHeight / f4Height;
    let canv = sketch.createCanvas(f4Width * factor, sketch.windowHeight);
    canv.parent(placeholder);
    sketch.frameRate(0.5);
    sketch.pixelDensity(1);
    sketch.rectMode(sketch.CENTER);
    sketch.imageMode(sketch.CENTER);
    farben = ['rgb(5, 61, 140)', 'rgb(2,158,191)', 'rgb(216,121,6)', 'rgb(165,5,3)'];
  }

  sketch.draw = function () {
    sketch.background(242);
    sketch.blendMode(sketch.BLEND);

    let numImages = sketch.random(3, 6);
    let selectedImages = [];

    for (let i = 0; i < numImages; i++) {
      let imgIndex = sketch.floor(sketch.random(1, anzahlBilder));
      selectedImages.push(images[imgIndex]);
    }

    for (let i = 0; i < selectedImages.length; i++) {
      let img = selectedImages[i];
      let x = sketch.random(sketch.width);
      let y = sketch.random(sketch.height);
      let scalar = sketch.random(0.5, 0.8);

      sketch.push();
      sketch.translate(x, y);
      sketch.scale(scalar);
      sketch.blendMode(sketch.MULTIPLY);
      sketch.image(img, 0, 0, img.width, img.height);
      sketch.pop();
    }

    for (let i = 0; i < 10; i++) {
      let shapeType = sketch.random(['triangle', 'scribble']);
      let xPos = sketch.random(-200, sketch.width + 200);
      let yPos = sketch.random(-200, sketch.height + 200);
      let size = sketch.random(200, 400);
      let fillColor = sketch.random(farben);
      sketch.noFill();

      sketch.push();
      sketch.translate(xPos, yPos);
      sketch.blendMode(sketch.DIFFERENCE);

      if (shapeType === 'triangle') {
        sketch.fill(fillColor);
        sketch.noStroke();
        sketch.beginShape();
        for (let j = 0; j < 3; j++) {
          let angle = sketch.random(sketch.TWO_PI);
          let radius = size * 2; // Anpassen des Radius für größere Dreiecke
          let x = radius * sketch.cos(angle);
          let y = radius * sketch.sin(angle);
          sketch.vertex(x, y);
        }
        sketch.endShape(sketch.CLOSE);
      } else if (shapeType === 'scribble') {
        let numPoints = sketch.random(4, 10);
        let radius = size;
        let strokeColor = sketch.random(farben);
        let strokeWidth = 30;
        sketch.stroke(strokeColor);
        sketch.strokeWeight(strokeWidth);
        sketch.strokeCap(sketch.SQUARE); // Abgeflachte Enden der Linien
        sketch.noFill();
        sketch.beginShape();
        for (let j = 0; j < numPoints; j++) {
          let angle = sketch.random(sketch.TWO_PI);
          let distance = sketch.random(radius);
          let x = distance * sketch.cos(angle);
          let y = distance * sketch.sin(angle);
          sketch.curveVertex(x, y);
        }
        sketch.endShape();
      }

      sketch.pop();
    }
  }
}

let p5One = new p5(s1, "sketch-one");
let p5Two = new p5(s1, "sketch-two");
