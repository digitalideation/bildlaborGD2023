let bild_1;
let pixelations_level = 40;
//let pixelations_level = 20;
let farbe_1;
let farbe_2;

let skalierung = 1;

let bildZoom = 1;

let grenze = 127;

function preload() {
    bild_1 = loadImage("assets/labor_3.jpeg");
    // bild_1 = loadImage("assets/labor_2.jpeg");

}

function setup() {

    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);


    bildZoom = windowWidth / bild_1.width;
    console.log(bildZoom)


    image(bild_1, 0, 0, width, height);


    noStroke();

    bild_1.resize(bild_1.width / skalierung, 0);

    frameRate(1);

    //blendMode(LIGHTEST);
    blendMode(DIFFERENCE);

}

function draw() {
    noStroke();
    //hat das hsb hier einen einfluss auf einsatz der rgb-werte im setup?
    colorMode(HSB);
    farbe_1 = map(mouseX, 0, width, 0, 360);

    fill(farbe_1, 100, 100);
    square(50, 50, 50);
    farbe_2 = map(mouseY, 0, height, 0, 360);
    fill(farbe_2, 100, 100);
    square(100, 100, 50);

    pixelImage()

    background(255);
    //filter(BLUR, 6);
    //filter(THRESHOLD);
}



function pixelImage() {
    bild_1.loadPixels();
    //pixelation und graustufen
    //alle pixel durchgehen; in schritten so gross wie das pixelations-level
    for (let x = 0; x < bild_1.width; x += pixelations_level) {
        for (let y = 0; y < bild_1.height; y += pixelations_level) {

            //index; farbvalues im array für einen bestimmten pixel
            let i = (x + y * bild_1.width) * 4;

            //jeder pixel wird durch vier werte im pixel-array definiert; r,g,b,a werte dem jeweiligen pixel zuweisen?
            //grauwert indem für r,g,b der gleiche wert zugewiesen wird
            let r = bild_1.pixels[i + 0];
            let g = bild_1.pixels[i + 1];
            let b = bild_1.pixels[i + 2];
            let a = bild_1.pixels[i + 3];

            let durchschnitts_farbe = (r + g + b) / 3;


            let myColor = lerpColor(color(farbe_1, 100, 100, a), color(farbe_2, 80, 100, a), durchschnitts_farbe / 255);

            //ein quadrat erstellen in der grösse des pixelations-level für pixelatins-effekt des bildes
            //fill(durchschnitts_farbe, durchschnitts_farbe, durchschnitts_farbe, a);

            fill(myColor)

            noStroke();
            //console.log(farbe_1)
            push();
            scale(bildZoom, bildZoom)
            square(x * skalierung, y * skalierung, pixelations_level * skalierung);
            pop();

        }
    }

}

function keyPressed() {

    //was ist falsch?
    if (keyCode === UP_ARROW) {
        pixelations_level = pixelations_level + 2;
    } else if (keyCode === DOWN_ARROW) {
        pixelations_level = pixelations_level - 2;
    }

}