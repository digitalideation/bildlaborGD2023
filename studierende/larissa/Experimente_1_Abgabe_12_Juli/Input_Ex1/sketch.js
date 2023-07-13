let img;

let cols = 20; // Anzahl Spalten
let colWidth; // Breite


let posX = 0;

let shiftX = 0;


function preload() {
    img = loadImage("/Input_Ex1/assets/testfoto.png");

}

function setup() {
    createCanvas(img.width, img.height);
    //colWidth = round(width / cols);
    //image(img, 0, 0)

}

function draw() {
    background(220);

    let x = round(random(width));
    let y = round(random(height));

    let destx = round(random(width));
    posX = 0;
    while (posX < width) {

        let angle = map((posX + shiftX) % width, 0, width, 0, 180);
        let f = sin(radians(angle));
        let colWidth = map(f, 0, 1, 1, 20);

        posX += colWidth;


        push();
        translate(posX, 0);
        scale(-1, 1);
        copy(img, posX, 0, colWidth, height, 0, 0, colWidth, height);
        //line(i * colWidth, 0, i * colWidth, height);
        pop();

    }

    shiftX++;
}