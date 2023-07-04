let img;
//define threshold value
let threshold = 800;

let skalierung = 3;

let swImage;

function preload() {
    img = loadImage("assets/Justin_Bieber_2.png");
}

function setup() {
    createCanvas(200, 200);
    img.resize(width / skalierung, 0);
    swImage = createGraphics(img.width, img.height);
    //image(img, 0, 0);
    detectEdge();

    push();
    scale(skalierung, skalierung);
    image(swImage, 0, 0);
    pop();
    //noLoop();
}

function draw() {
    background(255);
    swImage.loadPixels();
    for (let i = 0; i < swImage.pixels.length; i += 4) {
        let x = (i / 4) % swImage.width;
        let y = (i / 4 - x) / swImage.width;
        //console.log(swImage.pixels[i])
        if (swImage.pixels[i] == 255) {
            let c = color(random(255), random(255), random(255));
            fill(c);
            noStroke();
            push();
            scale(skalierung, skalierung);
            rect(x + random(2), y + random(2), 1, 1);
            pop()
        }
    }
}

//neighbours left, right, top,bottom: i-4,i+4,i-img.width*4, i+img.width*4


function detectEdge() {
    //load Pixels
    img.loadPixels();

    //loop through pixels and compare brightness with neighbours brightness
    for (let i = 0; i < img.pixels.length; i += 4) {
        // Color data is stored [r,g,b,a][r,g,b,a]
        let c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
        let left = color(img.pixels[i - 4], img.pixels[i + 1 - 4], img.pixels[i + 2 - 4], img.pixels[i + 3 - 4]);
        let right = color(img.pixels[i + 4], img.pixels[i + 1 + 4], img.pixels[i + 2 + 4], img.pixels[i + 3 + 4]);
        let top = color(img.pixels[i - img.width * 4], img.pixels[i - img.width * 4 + 1], img.pixels[i - img.width * 4 + 2], img.pixels[i - img.width * 4 + 3]);
        let bottom = color(img.pixels[i + img.width * 4], img.pixels[i + img.width * 4 + 1], img.pixels[i + img.width * 4 + 2], img.pixels[i + img.width * 4 + 3]);
        //let b = brightness(c);

        let rotkontrast = 0;
        rotkontrast += abs(img.pixels[i] - img.pixels[i - 4]);
        rotkontrast += abs(img.pixels[i] - img.pixels[i + 4]);
        rotkontrast += abs(img.pixels[i] - img.pixels[i - img.width * 4]);
        rotkontrast += abs(img.pixels[i] - img.pixels[i + img.width * 4]);

        let gruenkontrast = 0;
        gruenkontrast += abs(img.pixels[i + 1] - img.pixels[i - 4 + 1]);
        gruenkontrast += abs(img.pixels[i + 1] - img.pixels[i + 4 + 1]);
        gruenkontrast += abs(img.pixels[i + 1] - img.pixels[i - img.width * 4 + 1]);
        gruenkontrast += abs(img.pixels[i + 1] - img.pixels[i + img.width * 4 + 1]);

        let blaukontrast = 0;
        blaukontrast += abs(img.pixels[i] - img.pixels[i - 4 + 2]);
        blaukontrast += abs(img.pixels[i] - img.pixels[i + 4 + 2]);
        blaukontrast += abs(img.pixels[i] - img.pixels[i - img.width * 4 + 2]);
        blaukontrast += abs(img.pixels[i] - img.pixels[i + img.width * 4 + 2]);

        let totalkontrast = rotkontrast + gruenkontrast + blaukontrast;

        if (totalkontrast > threshold) {
            let x = (i / 4) % img.width;
            let y = (i / 4 - x) / img.width;
            drawEdge(x, y);
        }
        /*
        let neighbours = new Array(
            i - 4,
            i + 4,
            i - img.width * 4,
            i + img.width * 4
        );

        compareBrightness(i, b, neighbours);
        */
    }
}

//let kontrast = abs(c * 4 - left - right - bottom - top)
//console.log(kontrast)

//todo: Get the values of the surrounding pixels
//left, right, top,bottom
//compare brightness 


/*
me index of center pixel
b brightness of center pixel
neighbours array 
*/

/*
function compareBrightness(me, b, neighbours) {
    for (let n = 0; n < neighbours.length; n++) {
        if (neighbours[n] > 0 && neighbours[n] < img.pixels.length - 1) {
            let i = neighbours[n];




            //todo get color and brightness of neighbour 
            //compare with b 
            //get difference with abs() https://p5js.org/reference/#/p5/abs
            //plot point if difference is greater than threshold value

        }
    }
}
*/

function drawEdge(x, y) {

    //swImage.push();
    //swImage.scale(skalierung, skalierung);
    swImage.noStroke();
    swImage.fill(255, 0, 0);
    swImage.rect(x, y, 2, 2);
    //swImage.pop();

}