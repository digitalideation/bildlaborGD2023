# Interaktion get Time

# Interaktion get Scroll Percent
Integriere die Scroll Position aus der Variable `scroll` in deinen Sketch. Die Animation soll sich verändern, je nach Scroll Position. 
Wichtig, damit gescrollt werden kann, muss der `body` grösser sein als das Fenster (viewport). Du kannst das forcieren, mit css:

```css
 body {
     height: 300vh;
}

canvas {
     position: fixed;
}
```

```js
//pure Vanilla JS, get scroll Position. Die Variable scroll hat einen Wert von 0-1
  let scroll = 0;
        window.addEventListener('scroll', () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const clientHeight = document.documentElement.clientHeight;

            const percentScrolled = (scrollTop / (scrollHeight - clientHeight));
            scroll = percentScrolled;

  });

```
 <a href="https://editor.p5js.org/hzuellig/sketches/uFv7wm2f-"  target="_blank">Beispiel Scroll Position bestimmt Distortion</a>.

***

# Interaktion get Audio Volume
https://p5js.org/reference/#/libraries/p5.sound <br/>
https://p5js.org/examples/sound-mic-input.html

Sound Library einbinden! Vor p5.js und vor dem Sketch:

```js
let mic;

function setup() {
  createCanvas(710, 200);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill(127);
  stroke(0);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);
  ellipse(width / 2, h - 25, 50, 50);
}


```


# Interaktion Camera and Face Detection