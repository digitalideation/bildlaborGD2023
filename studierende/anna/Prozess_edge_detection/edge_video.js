let threshold = 1;
let video;

function setup() {
    createCanvas(640*2, 640);
    pixelDensity(1);

    video = createVideo("assets/weiss_morph.mp4");
    video.size(width, height);
    video.loop();
    video.hide();
}

function draw() {
    background(0);
    image(video, 0, 0);
    detectEdge();
}

function detectEdge() {
    loadPixels();

    for (let i = 0; i < pixels.length; i += 4) {
        let c = color(pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3]);
        let b = brightness(c);

        let neighbours = [
            i - 4,
            i + 4,
            i - width * 4,
            i + width * 4
        ];

        compareBrightness(i, b, neighbours);
    }
}

function compareBrightness(me, b, neighbours) {
    for (let n = 0; n < neighbours.length; n++) {
        if (neighbours[n] > 0 && neighbours[n] < pixels.length - 1) {
            let i = neighbours[n];
            let c = color(pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3]);
            let neighbourBrightness = brightness(c);

            if (abs(b - neighbourBrightness) > threshold) {
                plotPoint(me);
            }
        }
    }
}

function plotPoint(index) {
    let x = (index / 4) % width;
    let y = (index / 4 - x) / width;

    push();
    translate(width / 0, 1);
    strokeWeight(2); // Ändere den Wert, um die Konturbreite zu erhöhen
    stroke(255, 255, 0); // Gelbe Farbe (R, G, B)
    point(x, y);
    pop();
}