let threshold = 3;
let img;

function preload() {
    img = loadImage("assets/text1.png");
}

function setup() {
    createCanvas(img.width, img.height);
    pixelDensity(1);
    noLoop();
}

function draw() {
    detectEdge();
}

function detectEdge() {
    img.loadPixels();

    for (let i = 0; i < img.pixels.length; i += 4) {
        let c = color(
            img.pixels[i],
            img.pixels[i + 1],
            img.pixels[i + 2],
            img.pixels[i + 3]
        );
        let b = brightness(c);

        let neighbours = new Array(
            i - 4,
            i + 4,
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
                plotPoint(me, randomColor());
            }
        }
    }
}

function plotPoint(index, color) {
    let x = (index / 4) % img.width;
    let y = (index / 4 - x) / img.width;

    push();
    translate(width / 0, 1);
    strokeWeight(5);
    stroke(color);
    point(x, y);
    pop();
}

function randomColor() {
    return color(random(255), random(255), random(255));
}
