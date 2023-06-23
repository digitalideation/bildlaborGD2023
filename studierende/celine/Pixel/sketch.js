let bild1;
let pixelation_level = 10;

function preload() {
    bild1 = loadImage("assets/Swantje_Guentzel_Titelbild.jpg");
}


function setup() {
    //für alle displays ein pixel pro pixel


    createCanvas(windowWidth, windowHeight);





    image(bild1, 0, 0, width, height);

    // noStroke();
    stroke(255);

}

function draw() {
    pixelDensity(1);
    loadPixels();


    //ersten Pixel weiss einfärben
    /*pixels[0] = 255;
    pixels[1] = 0;
    pixels[2] = 255;
    pixels[3] = 255;*/

    //für alle y-Werte durch die x-Werte gehen; alle pixel durchgehen
    /*for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var index = (x + y * width) * 4;
            pixels[index] = x; //rot
            pixels[index + 1] = mouseY; //grün
            pixels[index + 2] = y; //blau
            pixels[index + 3] = 255; //alpha
        }
    }*/


    for (let x = 0; x < width; x += pixelation_level) {
        for (let y = 0; y < height; y += pixelation_level) {

            let i = (x + y * width) * 4;

            let r = pixels[i + 0];
            let g = pixels[i + 1];
            let b = pixels[i + 2];
            let a = pixels[i + 3];

            fill(r, g, b, a);
            square(x, y, pixelation_level);
        }
    }

    /*
    bild1.loadPixels();
    for (let y = 0; y < bild1.height; y++) {
        for (let x = 0; x < bild1.width; x++) {
            let px = bild1.get(x, y);
            let r = px[0];
            let g = px[1];
            let b = px[2];
            let bright = (0.2126 * r) + (0.7152 * g) + (0.0722 * b);
            bild1.set(x, y, color(bright));
        }
    }*/

    updatePixels();


    //updatePixels();
}