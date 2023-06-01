# Text 2 Points
https://p5js.org/reference/#/p5.Font/textToPoints

```js
let font;
function preload() {
  font = loadFont('assets/inconsolata.otf');
}

let points;
let bounds;
function setup() {
  createCanvas(400, 400);
  stroke(0);
  fill(255, 0, 0);

  points = font.textToPoints('message', 0, 0, 10, {
      sampleFactor: 0.3,
      simplifyThreshold: 0
    });
  
  for (let s = 0; s < points.length; s++) {
    ellipse(points[s].x, points[s].y, 3,3)
  }
}

```

# Ein erstes Beispiel

# Ein zweites Beispiel
* https://editor.p5js.org/hzuellig/sketches/2OyPIwOHb

# Tutorial Copy/Distort Text
* https://www.youtube.com/watch?v=SKDhkB8g1So

# Links
* https://lumen.club/laser-letters-typography-meets-media-interaction-basel-school-design/
* https://generativetype.com/

# Interaktion get Audio 