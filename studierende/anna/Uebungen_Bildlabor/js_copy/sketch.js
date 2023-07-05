// remainder % Wertebereich nicht über bestimmten Punkt

//Variabeln die mehrfach verwendet werden ausserhlab der function definieren
let img;

/*let cols = 50; // Anzahl der Spalten
let colWidth; // Breite der Spalten*/

// wird vor allem anderen ausgeführt

let posX = 0

let shiftX = 0

function preload() {
    img = loadImage("assets/see.png");
}




function setup() {
    createCanvas(img.width, img.height);
    //colWidth = round(width / cols);

    image(img, 0, 0)

}

function draw() {
    //background(220);

    /*in ganze Zahlen umwandeln (round)

     let x = round(random(width));
    let y = round(random(height));

    let destx = round(random(width));
    let desty = round(random(height)); */

    // wie oft und wie lange darf die Schleife laufen?
    // i++ -> Kurzschreibweise für immer eins nach oben zählen i=i+1


    posX = 0;

    //Zähler Variable
    while (posX < width) {

        //abhängig von x Position den Gradwert auf der Sinuskurve bestimmen

        let angle = map((posX + shiftX) % width, 0, width, 0, 180);

        // Umrechnen vom Bogenmass auf Gradmass durch radians
        let f = sin(radians(angle)); // wert zwischen 0 und 1
        let colWidth = map(f, 0, 1, 2, 40);

        posX += colWidth; // posX = posX+colWidth;

        push();
        //Kooridnatensystem in x- und y-Achse verschieben
        translate(posX, 0);
        scale(-1, 1);

        //dynamische Positition abhängig von Breite schreiben 
        copy(img, posX, 0, colWidth, height, 0, 0, colWidth, height);
        // line(i * colWidth, 0, i * colWidth, height)

        pop();
    }


    shiftX++;
}