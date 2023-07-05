//Variabeln die mehrfach verwendet werden ausserhlab der function definieren
let img;


// wird vor allem anderen ausgeführt

function preload() {
    img = loadImage("assets/copy.png");
}




function setup() {
    createCanvas(img.width, img.height);

    image(img, 0, 0)

}

function draw() {
    //background(220);

    /*in ganze Zahlen umwandeln (round)

     let x = round(random(width));
    let y = round(random(height));

    let destx = round(random(width));
    let desty = round(random(height)); */

    // copy(img, 0, height / 2, width, 1, mouseX, mouseY, width, 10)

    copy(img, 0, height / 7, width, 5, mouseX, mouseY, width, 10)

}




// function draw() {

//   let x = round(random(width));
//   let y = round(random(height));

//   let destx = round(random(width));
//   let desty = round(random(height));

//   copy(img, x, y, 12, 22, destx, desty, 100, 100)

//   frameRate(3)
// }