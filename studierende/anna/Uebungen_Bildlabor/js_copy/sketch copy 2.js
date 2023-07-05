//Variabeln die mehrfach verwendet werden ausserhlab der function definieren
let img;

let cols = 50; // Anzahl der Spalten
let colWidth; // Breite der Spalten

// wird vor allem anderen ausgeführt

function preload() {
    img = loadImage("assets/strand.png");
}




function setup() {
    createCanvas(img.width, img.height);
    colWidth = round(width / cols);

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



    //Zähler Variable
    for (let i = 0; i < cols; i++) {

        push();
        //Kooridnatensystem in x- und y-Achse verschieben
        translate(i * colWidth, 0);
        scale(-1, 1)

        //dynamische Positition abhängig von Breite schreiben 
        copy(img, i * colWidth, 0, colWidth, height, 0, 0, colWidth, height)
            // line(i * colWidth, 0, i * colWidth, height)

        pop();
    }


}