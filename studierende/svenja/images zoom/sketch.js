let img;
let img2;
let img3;
let text = "noise";
let pg;
let helligkeiten = new Array();
let images = [];


function preload() {
    img = loadImage("assets/16kleinkleinklein.jpg");
    img2 = loadImage("assets/image_2.jpg");
    img3 = loadImage("assets/image_3.jpg");

}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    pg = createGraphics(200, 200);
    pg.textSize(75);
    getPixelHelligkeit();
    // 

}



function draw() {
    background(0);
    push();
    translate(-width / 100, -height / 100, 0);
    scale(100);
    texture(img);
    plane(img.width, img.height);
    pop();

    push();
    translate(-width / 100, -height / 100, -200);
    scale(1);
    texture(img2);
    plane(img2.width, img2.height);
    pop();











    let zoom = map(mouseX, 0, windowWidth, -23000, 4000);
    camera(0, 0, zoom);

    pg.background(255, 255, 255, 0);
    pg.text(text, 0, 100);
    texture(pg);
    noStroke();
    push();
    translate(100, 100, 6000 - 10 * mouseX);
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