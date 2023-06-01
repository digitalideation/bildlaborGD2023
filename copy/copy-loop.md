# Copy!
https://p5js.org/reference/#/p5.Image/copy

# Ein erstes Beispiel
https://editor.p5js.org/hzuellig/sketches/58wu8M8pt

# Ein zweites Beispiel
```js
let img;

function preload() {
  img = loadImage('pfadzudeinembild');
}

function setup() {
  createCanvas(1024, 780);
  image(img, 0, 0);
}

function draw() {
  let x1 = floor(random(width));
  

  let x2 = round(x1 + random(-7, 7));
  let y2 = round(y1 + random(-5, 5));

  let w = floor(random(10, 40));
  

  copy(img, x1, 0, w, height, x2,y2, w, height )
  
}

```
# Examples
* https://editor.p5js.org/hzuellig/sketches/58wu8M8pt

# Artists
* http://www.beflix.com/works/
* https://teddavis.org/
* https://benjaminjantzen.de/2021/07/15/exploring-relationship-in-a-glitched-environment/
* http://www.beflix.com/works/ (Ant Scott)

# Tutorial
* <a href="https://p5js.org/reference/#/p5.Image/copy" target="_blank">copy auf der p5 Referenz</a>
* Mehr Beispiele <a href="http://www.generative-gestaltung.de/2/" target="_blank">Generative Gestaltung, Sektion Bild (Anfang)</a> 
* Arbeite dich durch das Tutorial zu der <a href="https://timrodenbroeker.de/shiffman-copy/" target="_blank">Copy Function von Daniel Shiffman </a>
* https://www.youtube.com/watch?v=TXeG_GPBs0M 


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

 <a href="https://editor.p5js.org/hzuellig/sketches/uFv7wm2f-"  target="_blank">Beispiel</a>.