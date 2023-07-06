//Variabeln die mehrfach verwendet werden ausserhlab der function definieren
let img;


// wird vor allem anderen ausgeführt

function preload() {
    img = loadImage("assets/see.png");
}




function setup() {
    createCanvas(img.width, img.height);

    image(img, 0, 0)

}

function draw() {

    let x = round(random(width));
    let y = round(random(height));

    let destx = round(random(width));
    let desty = round(random(height));

    copy(img, x, y, 10, 10, destx, desty, 1, width)

    frameRate(500)
}