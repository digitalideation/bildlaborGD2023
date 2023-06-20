//https://codepen.io/taylorcoffelt/pen/eYNZvZ
//simple edge detection without weighting
//for more complex
let threshold = 10;

let capture;

function preload() {
    img = loadImage("assets/img/bildschirm.png");
}

function setup() {
    createCanvas(img.width * 2, img.height);
    pixelDensity(1);
    image(img, 0, 0);
}

function draw() {
    detectEdge();

    noLoop();
}

function detectEdge() {
    img.loadPixels();

    for (let i = 0; i < img.pixels.length; i += 4) {
        // Color data is stored [r,g,b,a][r,g,b,a]
        let c = color(
            img.pixels[i],
            img.pixels[i + 1],
            img.pixels[i + 2],
            img.pixels[i + 3]
        );
        let b = brightness(c);

        // Get the values of the surrounding pixels
        //left, right, top,bottom
        let neighbours = new Array(
            i - 40,
            i + 40,
            i - img.width * 4,
            i + img.width * 4
        );

        compareBrightness(i, b, neighbours);
    }
}

function compareBrightness(me, b, neighbours) {
    for (let n = 0; n < neighbours.length; n++) {
        if (neighbours[n] > 0 && neighbours[n] < img.pixels.length - 1) {
            let i = neighbours[n];
            let c = color(
                img.pixels[i],
                img.pixels[i + 1],
                img.pixels[i + 2],
                img.pixels[i + 3]
            );
            let neighbourBrightness = brightness(c);

            if (abs(b - neighbourBrightness) > threshold) {
                plotPoint(me);
            }
        }
    }
}

function plotPoint(index) {
    let x = (index / 4) % img.width;
    let y = (index / 4 - x) / img.width;

    push();
    translate(width / 2, 0);
    point(x, y);
    pop();
}