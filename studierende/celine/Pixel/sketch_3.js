let bild_1;
let pixelations_level = 20;

function preload() {
    bild_1 = loadImage("assets/Scan 9.png");
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    image(bild_1, 0, 0, width, height);
    loadPixels();

    noStroke();


    //pixelation und graustufen
    //alle pixel durchgehen; in schritten so gross wie das pixelations-level
    for (let x = 0; x < width; x += pixelations_level) {
        for (let y = 0; y < height; y += pixelations_level) {

            //index; farbvalues im array für einen bestimmten pixel
            let i = (x + y * width) * 4;

            //jeder pixel wird durch vier werte im pixel-array definiert; r,g,b,a werte dem jeweiligen pixel zuweisen?
            //grauwert indem für r,g,b der gleiche wert zugewiesen wird
            let r = pixels[i + 0];
            let g = pixels[i + 1];
            let b = pixels[i + 2];
            let a = pixels[i + 3];

            let durchschnitts_farbe = (r + g + b) / 3;

            //ein quadrat erstellen in der grösse des pixelations-level für pixelatins-effekt des bildes
            fill(durchschnitts_farbe, durchschnitts_farbe, durchschnitts_farbe, a);
            square(x, y, pixelations_level);
        }
    }
}

function draw() {

    //hat das hsb hier einen einfluss auf einsatz der rgb-werte im setup?
    colorMode(HSB);
    let farbe_1 = map(mouseX, 0, width, 0, 360);
    fill(farbe_1, 100, 100);
    square(50, 50, 50);
    let farbe_2 = map(mouseY, 0, height, 0, 360);
    fill(farbe_2, 100, 100);
    square(100, 100, 50);
}

function keyPressed() {

    //was ist falsch?
    if (keyCode === UP_ARROW) {
        pixelations_level = pixelations_level + 2;
    } else if (keyCode === DOWN_ARROW) {
        pixelations_level = pixelations_level - 2;
    }

}