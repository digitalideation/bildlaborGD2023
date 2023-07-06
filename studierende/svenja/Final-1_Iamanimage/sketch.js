let helligkeiten = new Array();
let images = [];
let percentScrolled = 0;
let startTime;



function preload() {
    // img = loadImage("assets/16.jpg");
    img = loadImage("assets/16.jpg");
    img2 = loadImage("assets/16.jpg");
    img3 = loadImage("assets/16.jpg");
    img4 = loadImage("assets/16.jpg");
    img5 = loadImage("assets/16.jpg");
    img6 = loadImage("assets/16.jpg");
    img7 = loadImage("assets/16.jpg");
    img8 = loadImage("assets/16pixel.jpg");
    img9 = loadImage("assets/16.jpg");
    img10 = loadImage("assets/16.jpg");
    img11 = loadImage("assets/16pixel.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    startTime = millis(); // Record the starting time
    getPixelHelligkeit();

}



function draw() {


    let elapsedTime = millis() - startTime;


    // let resolution = elapsedTime / 10;
    let resolution = percentScrolled * 10 + mouseX;

    let resolutionbreite = resolution * 2.3;


    // background(elapsedTime / 1000);
    background(0);

    push();
    translate(-width / 100, -height / 100, 10);
    scale(100);
    // img.resize(resolution, resolutionbreite);
    texture(img);
    plane(img.width, img.height);
    pop();

    push();
    translate(-width / 100, -height / 100, -200);
    scale(1);
    texture(img2);
    plane(img2.width, img2.height);
    pop();

    push();
    translate(-width / 100, -height / 100, -3000);
    scale(1);
    texture(img3);
    plane(img3.width, img3.height);
    pop();


    push();
    translate(-width / 100, -height / 100, -2020);
    scale(3);
    texture(img5);
    plane(img5.width, img5.height);
    pop();

    push();
    translate(-width / 100, -height / 100, -1000);
    scale(10);
    texture(img6);
    plane(img6.width, img6.height);
    pop();


    push();
    translate(-width / 100, -height / 100, 2000);
    scale(10);
    texture(img7);
    plane(img7.width, img7.height);
    pop();

    push();
    translate(-width / 100, -height / 100, 2200);
    scale(2);
    texture(img11);
    plane(img11.width, img11.height);
    pop();

    let groesse = map(percentScrolled, 0, 107, 10, 0);

    push();
    translate(-width / 100, -height / 100, -6000);
    if (percentScrolled > 80) {
        scale(0);
    }
    scale(groesse - 2);
    img8.resize(resolution, resolutionbreite);
    texture(img8);
    plane(img8.width, img8.height);
    pop();

    push();
    translate(-width / 100, -height / 100, -7000);
    if (percentScrolled > 85) {
        scale(0);
    }
    scale(groesse - 2);
    img9.resize(resolution, resolutionbreite);
    texture(img9);
    plane(img9.width, img9.height);
    pop();

    push();
    translate(-width / 100, -height / 100, -8000);
    if (percentScrolled > 80) {
        // rotateX(-20);
    }
    // rotateX(mouseX / 100);
    // scale(groesse);
    scale(0.5);
    // img10.resize(resolution, resolutionbreite);
    texture(img10);
    plane(img10.width, img10.height);
    pop();










    // variable in abhängigkeit von mouseX
    let mausX = map(mouseX, 0, windowWidth, -1000, 1000);
    let mausY = map(mouseY, 0, windowWidth, -1000, 1000);

    // variable in abhängigkeit von scrollposition
    // let zoom = map(percentScrolled, 0, 100, -12000, 100);
    let zoom = map(percentScrolled, 0, 100, 100, -12000);


    // camera(mausX, 0, zoom);
    camera(mausX, mausY, zoom);




}

function getPixelHelligkeit() {
    img.loadPixels();

    for (let i = 0; i < img.pixels.length; i += 4) {
        let c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
        let helligkeit = (img.pixels[i] + img.pixels[i + 1] + img.pixels[i + 2] + img.pixels[i + 3]);
        helligkeiten.push(helligkeit);
    }
}

//Scroll abfragen
let onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;
document.addEventListener("scroll", (event) => {
    //Wie viel Prozent bin ich gescrollt?
    percentScrolled = Math.round(window.scrollY / onePercent);
    // console.log(percentScrolled);
})