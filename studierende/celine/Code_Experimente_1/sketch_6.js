var img;

function preload() {
    img = loadImage('assets/Swantje_Guentzel_Titelbild.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    image(img, 0, 0);
}

function draw() {
    var x1 = floor(random(width));
    var y1 = 50;

    var x2 = round(x1 + random(-9, 9));
    var y2 = round(y1 + random(-5, 5));

    var w = floor(random(10, 100));
    var h = height - 100;

    set(x2, y2, get(x1, y1, w, h));
}