# Slitscan
* <a href="https://timrodenbroeker.de/shiffman-copy/" target="_blank">Tutorial zu Copy Function von Daniel Shiffman </a>
* Eine Sammlung von Arbeiten mit dem Slitscan Prinzip http://www.flong.com/archive/texts/lists/slit_scan/index.html

```js
let source;
let cols;
let w=20;
let angle = 0;
function preload(){
    source=loadImage("pfadzumbild")
}

function setup(){
    createCanvas(source.width ,source.height);
    background(255);
    cols=width/w;
}


function draw(){
    for(let x=0;x< width;x+=w){
        let f= map(x,0,width, 0.1,2);
        
        let offset = int(map(sin(angle*f), -1,1,0,cols));
        let sx = (x + offset * w) % width;
        copy(source, sx,0, w, height, x,offset,w, height)
       
    }
    angle += 0.01;
}

```

<a href="https://editor.p5js.org/hzuellig/sketches/zdOpeBoWz" target="_blank">Example SlitScan Video, Camera Caption</a>
