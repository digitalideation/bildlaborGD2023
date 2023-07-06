let img;
let img2;
let helligkeiten = new Array();
let r = 200;
let density = 5;
let images = [];
let percentScrolled = 0;


function preload() {
    img = loadImage("assets/16kleinkleinklein.jpg");
    img = loadImage("assets/image_4klein2.jpg");
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
    getPixelHelligkeit();
    angleMode(DEGREES);
    colorMode(HSB);



}


//sphere
// function draw() {
//     background(230, 50, 12);
//     orbitControl(4, 4);

//     for (let phi = 0; phi < 180; phi += density) {
//         beginShape(POINTS);
//         for (let theta = 0; theta < 360; theta += density) {
//             let x = r * cos(phi);
//             let y = r * sin(phi) * sin(theta);
//             let z = r * sin(phi) * cos(theta);
//             vertex(x, y, z);
//         }
//         endShape(CLOSE);
//     }
//     // camera(0, 0, mouseX);
// }


//sphere with helliugkeiten as parameter
// function draw() {
//     background(230, 50, 12);
//     orbitControl(4, 4);

//     for (let phi = 0; phi < 180; phi += density) {
//         beginShape(POINTS);
//         for (let theta = 0; theta < 360; theta += density) {
//             for (let i = 0; i < helligkeiten.length; i++) {
//                 let pixelPositionX = (i / 4) % img.width;
//                 let pixelPositionY = (i / 4 - pixelPositionX) / img.width;
//                 let x = r * cos(phi) * pixelPositionX;
//                 let y = r * sin(phi) * sin(theta) * pixelPositionY;
//                 let z = helligkeiten[i] * 2;

//                 stroke(200, 50, z / 80);
//                 vertex(x, y, z);
//             }
//         }
//         endShape(CLOSE);
//     }
//     // camera(0, 0, mouseX);
// }

function draw() {
    push();
    background(255);
    orbitControl(4, 4, 4);

    noStroke;
    noFill();

    push();
    translate(-width / 100, -height / 100, -2000);
    scale(10);
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

    // let xCircle = ((i / 4) % img.width) * 100;
    // let yCircle = (i / 4 - xCircle) / img.width;

    // translate(xCircle * 0.2, yCircle * 0.2, helligkeiten[i] / 5);
    // push();
    // sphere(50);
    // pop();



    for (let phi = 0; phi < 180; phi += density) {
        beginShape(POINTS);
        for (let theta = 0; theta < 360; theta += density) {
            for (let i = 0; i < helligkeiten.length; i += 4) {
                let mapHelligkeiten = map(helligkeiten[i], 0, 255, 1, 3);
                strokeWeight(2);
                let pixelPositionX = (i / 4) % img.width;
                let pixelPositionY = (i / 4 - pixelPositionX) / img.width;
                let x = r * cos(phi) * pixelPositionX;
                let y = helligkeiten[i];
                let z = r * sin(phi) * sin(theta) * pixelPositionY;

                stroke(200, 50, 10);
                // push();
                // rotateY(100);
                vertex(x, y, z);
                // pop();


            }
        }
        endShape(CLOSE);


    }



    // camera(0, 0, mouseX);
}




function getPixelHelligkeit() {
    img.loadPixels();

    for (let i = 0; i < img.pixels.length; i += 4) {
        let c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
        let helligkeit = (img.pixels[i] + img.pixels[i + 1] + img.pixels[i + 2] + img.pixels[i + 3]);
        helligkeiten.push(helligkeit);
    }

}