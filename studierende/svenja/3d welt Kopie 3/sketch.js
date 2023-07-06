let img;
let img2;
let helligkeiten = new Array();
let r = 200;
let density = 10;


function preload() {
    img = loadImage("assets/16kleinkleinklein.jpg");
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    getPixelHelligkeit();
    angleMode(DEGREES);
    colorMode(HSB);
    stroke(19, 80, 88);
    // strokeWeight(100);
    noFill();
    fill(19, 80, 88);

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
    background(230, 50, 12);
    orbitControl(4, 4);

    for (let phi = 0; phi < 180; phi += density) {
        beginShape(POINTS);
        for (let theta = 0; theta < 360; theta += density) {
            for (let i = 0; i < helligkeiten.length; i++) {
                let mapHelligkeiten = map(helligkeiten, 0, 1000, 1, 3);
                strokeWeight(0.9);
                let pixelPositionX = (i / 4) % img.width;
                let pixelPositionY = (i / 4 - pixelPositionX) / img.width;
                let x = r * cos(phi) * pixelPositionX;
                let y = r * sin(phi) * sin(theta) * pixelPositionY;
                let z = helligkeiten[i] / 3;

                stroke(200, 50, z / 5);
                vertex(x, y, z);
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