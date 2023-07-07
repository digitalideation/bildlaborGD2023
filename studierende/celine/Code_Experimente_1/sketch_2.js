function preload() {
    img = loadImage('assets/Swantje_Guentzel_Titelbild.jpg');
}

function setup() {
    createCanvas(800, 800);
    img.resize(width, height);
    noSmooth();
    //image(img, 0, 0);
    textSize(200);
    text('test', width / 2, height / 2);
}

function draw() {
    const y = frameCount % height * 1.2;
    const range = getPixelRange(y);

    for (let x = 0; x < width; x++) {
        const leftX = constrain(x - range, 0, mouseY);
        const rightX = constrain(x + range, 0, mouseX);
        let sampleX = random(leftX, rightX);

        const topY = constrain(y - range, 0, height);
        const bottomY = constrain(y + range, 0, height);
        let sampleY = random(topY, bottomY);

        const pixelColor = img.get(sampleX, sampleY);

        stroke(pixelColor);
        point(x, y);
    }
}

function getPixelRange(y) {
    return map(pow(y, 50),
        0, pow(height, 20),
        0, 290);
}