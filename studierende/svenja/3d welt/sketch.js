let img;
let text = "fsankjnakjsankjnakjsankjnakjsankjnakjsankjnakjsankjnakjsankjnakjsankjnakjsankjnakj";
let pg;
let helligkeiten = new Array();


function preload() {
    img = loadImage("assets/16kleinkleinklein.jpg");

}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    pg = createGraphics(200, 200);
    pg.textSize(75);
    getPixelHelligkeit();
    console.log(helligkeiten);

}



function draw() {


    background(0);
    fill(255);
    noStroke();
    lights();
    ambientLight(100);
    directionalLight(255, 255, 255, 0, 0, -1);
    // rotateX(frameCount * 0.1);
    // rotateZ(frameCount * 0.1);
    // texture(img);
    // beginShape();
    // vertex(0, 35, 0);
    // vertex(3, 0, 10);
    // vertex(0, -35, mouseX / 4);
    // vertex(-55, 20, mouseX / 5);
    // vertex(0, 35, mouseX);
    // vertex(mouseY, 0, 0);
    // vertex(0, 200, 10);
    // vertex(-5, 0, 10);
    // endShape(CLOSE);

    beginShape();
    // bezier(0, -305, 0, 100, 45, 10, 10, 45, 10, 10, 45, 10);
    // bezier(3, 0, 100, 10, 45, 10, 10, 45, 10, 10, 45, 10);
    // texture(img);
    // bezier(0, 350, mouseX / 4, 10, 45, 100, 190, 45, 10, mouseX / 5, 405, 10);
    // bezier(-55, 20, mouseX / 5, 100, 405, mouseX / 10, 10, 45, 10, 10, 45, 10);
    // bezier(-155, 120, mouseX / 10, 120, 45, mouseX / 10, 100, 20, 110, 10, 45, 10);
    // bezier(-195, -220, mouseX / 12, 10, 45, mouseX / 12, 100, 20, 130, 10, 45, 10);
    // texture(img);

    for (let i = 0; i < helligkeiten.length; i++) {
        bezier(0, 350, helligkeiten[i], 10, helligkeiten[i], 100, 190, 45, 10, 0, 405, 10);
        console.log(helligkeiten[i] / 500);

    }

    endShape(CLOSE);

    // fill(200, 200, 200);
    // texture(img);
    // beginShape();
    // vertex(-150, -150, 80);
    // vertex(150, -150, 80);
    // vertex(150, 150, 80);
    // vertex(-150, 150, 80);
    // endShape(CLOSE);
    camera(0, 0, mouseX);
    // textSize(32);
    // text(text, 0, 0);
    // image(img, 0, 0);

    noFill();
    pg.background(255, 255, 255, 1);
    pg.text(text, 0, 100);
    //pass image as texture
    texture(pg);
    noStroke();
    push();
    translate(0, 0, 6000 - 10 * mouseX);
    plane(50);
    pop();








    //Scroll abfragen
    //Ganz höhe minus client höhe durch 100, dann weiss ich wie viel pixel 1% des scrollens istlet onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;

    let onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;


    document.addEventListener("scroll", (event) => {

        //Wie viel Prozent bin ich gescrollt?
        let percentScrolled = Math.round(window.scrollY / onePercent);
        // console.log(percentScrolled);

    })





}

function getPixelHelligkeit() {
    img.loadPixels();

    for (let i = 0; i < img.pixels.length; i += 4) {
        let c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
        let helligkeit = (img.pixels[i] + img.pixels[i + 1] + img.pixels[i + 2] + img.pixels[i + 3]);
        helligkeiten.push(helligkeit);
    }
    // console.log(helligkeit[3]);

}