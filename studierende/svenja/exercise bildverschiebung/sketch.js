let bild;
let streifen = 20;
let colWidth = 0;
let xPos = 0;
let shiftX = 0
let streifenbreite = 50;


function preload() {
    bild = loadImage("assets/16kleinklein.jpg");

}

function setup() {
    createCanvas(600, 600);
    bild.resize(width, 0);
    image(bild, 0, 0);
    colWidth = round(width / streifen);
}

function draw() {
    //background(220);
    //copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)
    //copy(bild, mouseX, mouseY, 100, 80, mouseX, mouseY, 120, 100)
    xPos = 0
        //for (i = 0; i < streifen; i++) {
    while (xPos < width) {

        let winkel = map((xPos + shiftX) % width * colWidth, 0, width, 0, 180);


        let faktor = sin(radians(winkel));
        colWidth = map(faktor, 0, 1, 1, 100);

        push();
        translate(xPos, 0);
        scale(-1, 1);
        copy(bild, xPos, 0, colWidth, height, 0, 0, colWidth, height);

        pop();
        xPos = xPos + colWidth;
    }
    //shiftX++;
}

//pures javascript

//Ganz höhe minus client höhe durch 100, dann weiss ich wie viel pixel 1% des scrollens ist
let onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;


document.addEventListener("scroll", (event) => {

    //Wie viel Prozent bin ich gescrollt?
    let percentScrolled = Math.round(window.scrollY / onePercent);
    console.log(percentScrolled);

    shiftX += percentScrolled;

    if (percentScrolled > 50) {
        document.getElementById("defaultCanvas0").style.opacity = 0;
    } else {
        document.getElementById("defaultCanvas0").style.opacity = 1;
    }
});