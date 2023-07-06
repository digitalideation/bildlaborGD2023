//https://codepen.io/taylorcoffelt/pen/eYNZvZ
//simple edge detection without weighting
//for more complex

let slider;

// function setup() {
//     slider = createSlider(0, 255, 100);
//     slider.position(10, 10);
//     slider.style('width', '80px');
// }

// function draw() {
//     let val = slider.value();
//     background(val);  --> treshold
// }


let threshold = 3;

let skalierung = 3;

let edgeImage;

function preload() {
    img = loadImage("assets/schwarz/black3.png");
}

function setup() {
    createCanvas(img.width * 2, img.height);
    pixelDensity(1);
    image(img, 0, 0); //-> IMAGE


    img.resize(img.width / skalierung, 0)
    edgeImage = createGraphics(img.width, img.height);

    detectEdge();
}

function draw() {

    background(0, 255, 255, 0); //Hintergrundfarbe

    push();
    scale(skalierung, skalierung);
    interpretation();
    pop();
    //image(edgeImage, edgeImage.width, 0);
    //noLoop();
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
    edgeImage.fill(255, 255, 0)
    edgeImage.rect(x, y, 1, 1)
        //point(x, y);
        //edgeImage.pop();
}


function interpretation() {
    let blau = color(0, 0, 255, 10);
    let rot = color(0, 0, 255, 0);
    //image(edgeImage, 0, 0);
    edgeImage.loadPixels();
    for (let i = 0; i < edgeImage.pixels.length; i += 4) {
        let x = (i / 4) % edgeImage.width;
        let y = (i / 4 - x) / edgeImage.width;
        //for (let x = 0; x < edgeImage.width; x++) {
        // for (let y = 0; y <edgeImage.height; y++) {
        //let index = (y * edgeImage.width + x) * 4;

        let r = edgeImage.pixels[i];
        /*let b = edgeImage.pixels[i + 1];
        let g = edgeImage.pixels[i + 2];
        let bright = (r + b + g) / 3;*/
        noStroke();
        if (y % 2 == 0) {
            fill(rot);
        } else {
            fill(blau);
        }
        if (r > 150) {
            //disturbance
            //console.log('noise')
            push();
            translate(0, 0);
            rect(x + random(2), y + random(2), 1, 1); // Grösse der Pixel
            pop();
        } else {




            rect(x, y, 1, 1)
        }
        //}
        // }
    }
}