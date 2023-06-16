//https://codepen.io/taylorcoffelt/pen/eYNZvZ
//simple edge detection without weighting
//for more complex
let threshold = 30;

let skalierung = 3;

let edgeImage;

function preload() {
    img = loadImage("../joel/Bilder/1.jpg");
}

function setup() {
    createCanvas(img.width * 2, img.height);
    pixelDensity(1);
    //image(img, 0, 0);


    img.resize(img.width / skalierung, 0)
    edgeImage = createGraphics(img.width, img.height);
}

function draw() {
    detectEdge();
    interpretation();
    //image(edgeImage, edgeImage.width, 0);
    noLoop();
}

function detectEdge() {
    img.loadPixels();

    for (let i = 0; i < img.pixels.length; i += 4) {
        // Color data is stored [r,g,b,a][r,g,b,a]
        let c = color(
            img.pixels[i],
            img.pixels[i + 1],
            img.pixels[i + 2],
            img.pixels[i + 3]
        );
        let b = brightness(c);

        // Get the values of the surrounding pixels
        //left, right, top,bottom
        let neighbours = new Array(
            i - 4,
            i + 4,
            i - img.width * 4,
            i + img.width * 4
        );

        compareBrightness(i, b, neighbours);
    }
}

function compareBrightness(me, b, neighbours) {
    for (let n = 0; n < neighbours.length; n++) {
        if (neighbours[n] > 0 && neighbours[n] < img.pixels.length - 1) {
            let i = neighbours[n];
            let c = color(
                img.pixels[i],
                img.pixels[i + 1],
                img.pixels[i + 2],
                img.pixels[i + 3]
            );
            let neighbourBrightness = brightness(c);

            if (abs(b - neighbourBrightness) > threshold) {
                plotPoint(me);
            }
        }
    }
}

function plotPoint(index) {
    let x = (index / 4) % img.width;
    let y = (index / 4 - x) / img.width;

    //edgeImage.push();
    //edgeImage.translate(width / 2, 0);
    edgeImage.noStroke();
    edgeImage.fill(255,0,0)
    edgeImage.rect(x, y, 1, 1)
        //point(x, y);
        //edgeImage.pop();
}


function interpretation() {
    let blau = color(0, 0, 255);
    let rot = color(255, 0, 0);
    //image(edgeImage, 0, 0);
    scale(skalierung, skalierung)
    edgeImage.loadPixels();
    for (let i = 0; i < edgeImage.pixels.length; i += 4) {
        let x = (i / 4) % edgeImage.width;
        let y = (i / 4 - x) / edgeImage.width;
        //for (let x = 0; x < edgeImage.width; x++) {
        // for (let y = 0; y < edgeImage.height; y++) {
        //let index = (y * edgeImage.width + x) * 4;

        let r = edgeImage.pixels[i];
        let b = edgeImage.pixels[i + 1];
        let g = edgeImage.pixels[i + 2];
        let bright = (r + b + g) / 3;

        console.log(r)

        if (r > 20) {
            //disturbance
            //console.log('noise')
            noStroke();
            fill(0)
                //rect(x, y, 1, 1)
        } else {

            if (y % 2 == 0) {
                fill(blau);
            } else {
                fill(rot);
            }

            noStroke();
            rect(x, y, 1, 1)
        }
        //}
        // }
    }
}