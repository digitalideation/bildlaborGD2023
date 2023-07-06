// variable deklarieren
let img;

/*
let cols = 20;
let colWidth;*/

let posX = 0;
let shiftX = 0;


function preload() {
    // variable definieren
    img = loadImage("assets/Bildschirmfoto 2023-06-12 um 14.38.51.png")
}


function setup() {
    createCanvas(img.width, img.height);

    //colWidth = round(width / cols);

    //image(img, 0, 0)

    //frameRate(1000)
}

/* function draw() {
/    //background(220);

    //random ergibt fliesskommazahl
    //integer erstellen mit round
    let x = round(random(width))
    let y = round(random(height))
    let destx = round(random(width))

    copy(img, x, y, 50, 30, destx, y + 100, 30, 30)
}*/

/*function draw() {


    copy(img, 0, mouseY, width, 300, mouseX, mouseY, width, 100)
}*/

/*function draw() {

    //push: koordinatensystem abspeichern
    //pop: altes koordinatensystem holen

    //for(schleifenzähler initialisieren; schleifendauer; schleifenzähler erhöhen)
    for (let i = 0; i < cols; i++) {
        push();
        //spiegelpunkt des koordinatensystems
        translate(i * colWidth, 0)
            //spiegelung
        scale(-1, 1);
        copy(img, i * colWidth, 0, colWidth, height, 0, 0, colWidth, height)
            //line(i * colWidth, 0, i * colWidth, height);
        pop();
    }

}*/

/*function draw() {
    posX = 0;
    while (posX < width) {
        //% modulo -> Arbeit mit Rest; niemals Grösser als Teiler
        let angle = map((posX + shiftX) % width, 0, width, 0, 180);
        let f = sin(radians(angle)); //wert zwischen 0 und 1
        let colWidth = map(f, 0, 1, 1, 50);

        posX += colWidth; //posY = posX+colWidth


        push();

        translate(posX, 0)

        scale(-1, 1);
        copy(img, posX, 0, colWidth, height, 0, 0, colWidth, height)
        pop();
    }
    shiftX++;
}*/

function draw() {
    posX = 0;

    while (posX < width) {
        //% modulo -> Arbeit mit Rest; niemals Grösser als Teiler
        let angle = map((posX + shiftX) % width, 0, width, 0, 180);
        let angle2 = map((posX + shiftX) % width, 0, width, 0, 540);
        let f = sin(radians(angle)); //wert zwischen 0 und 1
        let f2 = sin(radians(angle2));
        let colWidth = map(f, 0, 1, 1, 10);
        let shiftY = map(f2, -1, 1, -20, 20);

        posX += colWidth; //posY = posX+colWidth


        push();


        translate(posX, 0)


        scale(-1, 1);
        copy(img, posX, 0, colWidth, height, 0, shiftY, colWidth, height)
        pop();
    }
    shiftX += 0.5;
}

/*function draw() {

    let x = round(random(width))
    let y = round(random(height))
    let destx = round(random(width))
    copy(img, x, y, 50, 30, destx, mouseY + 100, 30, 30)

}*/