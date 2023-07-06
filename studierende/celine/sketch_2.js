let bild_1;

//gui
var gui;

var Pixelation = 5;
var Threshold = 0.5;
//


let farbe_1;
let farbe_2;

let skalierung = 1;

let bildZoom = 1;

let grenze = 127;

function preload() {
    bild_1 = loadImage("assets/typo_2.png");

}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    //canvas.parent('sketch');

    noStroke();

    pixelDensity(1);



    bildZoom = windowWidth / bild_1.width;
    //console.log(bildZoom)


    image(bild_1, 0, 0, width, windowHeight);


    noStroke();


    //bild_1.resize(bild_1.width / skalierung, 0);

    frameRate(1);

    //Slider

    // var gui = createGui('The Generative Quality of Noise');

    // sliderRange(5, 200, 5);
    // gui.addGlobals('Pixelation');
    // sliderRange(0.3, 0.7, 0.1);
    // gui.addGlobals('Threshold');


    //background(255, 0, 0);
    ////////
    // blendMode(DIFFERENCE);
}



function draw() {

    //hat das hsb hier einen einfluss auf einsatz der rgb-werte im setup?
    colorMode(HSB);
    farbe_1 = map(mouseX, 0, width, 0, 360);
    fill(farbe_1, 100, 100);
    //square(50, 50, 50);
    farbe_2 = map(mouseY, 0, height, 0, 360);
    //fill(farbe_2, 100, 100);
    //square(100, 100, 50);

    pixelImage()

    // fill(255, 0, 0);

    // background(0, 100, 100);
}




function keyPressed() {
    if (keyCode === UP_ARROW) {
        Pixelation = Pixelation + 2;
    } else if (keyCode === DOWN_ARROW) {
        Pixelation = Pixelation - 2;
    }

}

function pixelImage() {
    bild_1.loadPixels();
    //pixelation und graustufen
    //alle pixel durchgehen; in schritten so gross wie das pixelations-level
    for (let x = 0; x < bild_1.width; x += Pixelation) {
        for (let y = 0; y < bild_1.height; y += Pixelation) {

            //index; farbvalues im array für einen bestimmten pixel
            let i = (x + y * bild_1.width) * 4;

            //jeder pixel wird durch vier werte im pixel-array definiert; r,g,b,a werte dem jeweiligen pixel zuweisen?
            //grauwert indem für r,g,b der gleiche wert zugewiesen wird
            let r = bild_1.pixels[i + 0];
            let g = bild_1.pixels[i + 1];
            let b = bild_1.pixels[i + 2];
            let a = bild_1.pixels[i + 3];

            let durchschnitts_farbe = (r + g + b) / 3;


            let myColor = lerpColor(color(farbe_1, 100, 100, 1), color(farbe_2, 100, 100, 1), durchschnitts_farbe / 255);


            //ein quadrat erstellen in der grösse des pixelations-level für pixelatins-effekt des bildes
            //fill(durchschnitts_farbe, durchschnitts_farbe, durchschnitts_farbe, a);
            fill(myColor)
                //fill(durchschnitts_farbe)
                //console.log(farbe_1)
            push();
            scale(bildZoom, bildZoom)
            square(x * skalierung, y * skalierung, Pixelation * skalierung);
            // textSize(60);
            //text('«There are three occasions in which the static, ', 100, 100);
            // text('linear notion of transmitting information can be interrupted. ', 100, 300);


            // text('I use these instances to exploit noise artifacts, ', 100, 500);

            // text('that I sub-divide as glitch, encoding/decoding ', 100, 700);


            // text('(of which compression is the most ordinary form) ', 100, 900);


            // text('and feedback artifacts.»', 100, 1100);






            pop();

        }
    }



    // filter(THRESHOLD, Threshold);
    //filter(OPAQUE);
    // background(255, 0, 0);
    //background(0, 100, 100);
    blendMode(DIFFERENCE);

}


// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }