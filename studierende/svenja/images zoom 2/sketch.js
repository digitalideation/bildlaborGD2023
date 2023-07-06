let img;
let img2;
let img3;
let text = "noise";
let pg;
let helligkeiten = new Array();
let images = [];
let percentScrolled = 0;


function preload() {
    img = loadImage("assets/16kleinkleinklein.jpg");
    img2 = loadImage("assets/image_2.jpg");
    img3 = loadImage("assets/image_3.jpg");
    img4 = loadImage("assets/image_4.jpg");
    img5 = loadImage("assets/image_5.jpg");
    img6 = loadImage("assets/image_6.jpg");
    img7 = loadImage("assets/image_7.jpg");
    img8 = loadImage("assets/image_8.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    pg = createGraphics(200, 200);
    pg.textSize(75);
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
    translate(-width / 100, -height / 100, -2020);
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
    translate(-width / 100, -height / 100, -5000);
    scale(10);
    texture(img8);
    plane(img8.width, img8.height);
    pop();



    let zoom = map(percentScrolled, 0, 100, -23000, 0);
    camera(0, 0, zoom);


    // zoom in abhängigkeit von mouseX
    // let zoom = map(mouseX, 0, windowWidth, -23000, 0);
    // camera(0, 0, zoom);

    pg.background(255, 255, 255, 0);
    pg.text(text, 0, 100);
    texture(pg);
    noStroke();
    push();
    translate(100, 100, 6000 - 10 * mouseX);
    plane(50);
    pop();


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

//Scroll abfragen
let onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;
document.addEventListener("scroll", (event) => {
    //Wie viel Prozent bin ich gescrollt?
    percentScrolled = Math.round(window.scrollY / onePercent);
    // console.log(percentScrolled);
})