// press 1, 2, or 3 to change brushes

let brush;
let softBrush;
let angleBrush;
let catBrush;

function setup() {
    createCanvas(800, 800);

    softBrush = loadImage('assets/img/Claire.png');
    angleBrush = loadImage('assets/img/see.png');
    catBrush = loadImage('assets/img/strand.png');

    brush = softBrush;

    imageMode(CENTER);
    colorMode(HSB);

    background(200);

}

function draw() {
    // rotate through the hues
    drawSoftBrush(frameCount % 360, 50, 0.5);
}


function drawSoftBrush(col, brushSize, speed) {
    // tint our brush
    // tint(col, 100, 100);
    push();
    translate(mouseX, mouseY);
    scale(sin(frameCount * speed) + 0.001);
    rotate(frameCount * 0.10);
    image(brush, 50, 50, brushSize, brushSize);
    pop();
}

function keyTyped() {
    if (key == '1') {
        brush = softBrush;
    }

    if (key == '2') {
        brush = angleBrush;
    }

    if (key == '3') {
        brush = catBrush;
    }
}