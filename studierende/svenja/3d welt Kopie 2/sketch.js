let img;
let img2;
let text = "fsankjnakjsankjnakjsankjnakjsankjnakjsankjnakjsankjnakjsankjnakjsankjnakjsankjnakj";
let pg;
let helligkeiten = new Array();


function preload() {
    img = loadImage("assets/16kleinkleinklein.jpg");
    img2 = loadImage("assets/19.jpg");

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
    push(),
        scale(100);
    translate(0, 0, 0);
    image(img, 0, 0);
    pop();

    push(),
        scale(5);
    translate(0, 0, -50);

    image(img2, 0, 0);
    pop();




    fill(255);
    noStroke();
    lights();
    ambientLight(100);
    directionalLight(255, 0, 0, 0, 0, -1);



    // for (let i = 0; i < helligkeiten.length; i += 4) {

    //     let x = ((i / 4) % img.width) * 100;
    //     let y = (i / 4 - x) / img.width;

    //     translate(x * 100, y * 100, -helligkeiten[i]);
    //     push();
    //     // sphere(100);
    //     pop();


    //     beginShape();

    //     bezier(i - windowWidth, 0, helligkeiten[i], 10, helligkeiten[15 * i + 1], mouseX, 190, 45, 10, 0, 405, 10);
    //     bezier(i - windowWidth, 0, helligkeiten[i], 10, helligkeiten[3 * i + 1], 100, 190, 45, 10, 0, 405, 10);
    //     bezier(0, 350, mouseX / 4, 10, 45, 100, 190, 45, 10, mouseX / 5, 405, 10);
    //     bezier(-55, 20, mouseX / 5, 100, 405, mouseX / 10, 10, 45, 10, 10, 45, 10);
    //     bezier(-155, 120, mouseX / 10, 120, 45, mouseX / 10, 100, 20, 110, 10, 45, 10);
    //     bezier(-195, -220, mouseX / 12, 10, 45, mouseX / 12, 100, 20, 130, 10, 45, 10);

    //     endShape(CLOSE);





    // }


    camera(0, 0, mouseX);

    pg.background(255, 255, 255, 0);
    pg.text(text, 0, 100);
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