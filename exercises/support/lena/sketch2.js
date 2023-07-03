var capture; // this is the video camera
var img;



function setup() {
    createCanvas(320, 240);
    capture = createCapture(VIDEO); // this opens the digitizer
    img = createImage(320, 240);
    capture.size(320, 240);
    capture.hide();
    pixelDensity(1);
    frameRate(30);
}

function draw() {
    background(0, 0, 0);

    var k1 = [[1, 2, 1],
    [2, 4, 2],
    [1, 2, 1]];

    capimg = capture.get(); // copying the video
    if (capimg.width > 0) {
        capimg.loadPixels();
        img.loadPixels();

        var w = capimg.width;
        var h = capimg.height;
        for (var x = 0; x < w; x++) {
            for (var y = 0; y < h; y++) {
                var ul = ((x - 1 + w) % w + w * ((y - 1 + h) % h)) * 4; // location of the UPPER LEFT
                var uc = ((x - 0 + w) % w + w * ((y - 1 + h) % h)) * 4; // location of the UPPER CENTER
                var ur = ((x + 1 + w) % w + w * ((y - 1 + h) % h)) * 4; // location of the UPPER RIGHT
                var ml = ((x - 1 + w) % w + w * ((y + 0 + h) % h)) * 4; // location of the LEFT
                var mc = ((x - 0 + w) % w + w * ((y + 0 + h) % h)) * 4; // location of the CENTER PIXEL
                var mr = ((x + 1 + w) % w + w * ((y + 0 + h) % h)) * 4; // location of the RIGHT
                var ll = ((x - 1 + w) % w + w * ((y + 1 + h) % h)) * 4; // location of the LOWER LEFT
                var lc = ((x - 0 + w) % w + w * ((y + 1 + h) % h)) * 4; // location of the LOWER CENTER
                var lr = ((x + 1 + w) % w + w * ((y + 1 + h) % h)) * 4; // location of the LOWER RIGHT

                p0 = capimg.pixels[ul] * k1[0][0]; // upper left
                p1 = capimg.pixels[uc] * k1[0][1]; // upper mid
                p2 = capimg.pixels[ur] * k1[0][2]; // upper right
                p3 = capimg.pixels[ml] * k1[1][0]; // left
                p4 = capimg.pixels[mc] * k1[1][1]; // center pixel
                p5 = capimg.pixels[mr] * k1[1][2]; // right
                p6 = capimg.pixels[ll] * k1[2][0]; // lower left
                p7 = capimg.pixels[lc] * k1[2][1]; // lower mid
                p8 = capimg.pixels[lr] * k1[2][2]; // lower right
                var red = (p0 + p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8) / 9;

                p0 = capimg.pixels[ul + 1] * k1[0][0]; // upper left
                p1 = capimg.pixels[uc + 1] * k1[0][1]; // upper mid
                p2 = capimg.pixels[ur + 1] * k1[0][2]; // upper right
                p3 = capimg.pixels[ml + 1] * k1[1][0]; // left
                p4 = capimg.pixels[mc + 1] * k1[1][1]; // center pixel
                p5 = capimg.pixels[mr + 1] * k1[1][2]; // right
                p6 = capimg.pixels[ll + 1] * k1[2][0]; // lower left
                p7 = capimg.pixels[lc + 1] * k1[2][1]; // lower mid
                p8 = capimg.pixels[lr + 1] * k1[2][2]; // lower right
                var green = (p0 + p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8) / 9;

                p0 = capimg.pixels[ul + 2] * k1[0][0]; // upper left
                p1 = capimg.pixels[uc + 2] * k1[0][1]; // upper mid
                p2 = capimg.pixels[ur + 2] * k1[0][2]; // upper right
                p3 = capimg.pixels[ml + 2] * k1[1][0]; // left
                p4 = capimg.pixels[mc + 2] * k1[1][1]; // center pixel
                p5 = capimg.pixels[mr + 2] * k1[1][2]; // right
                p6 = capimg.pixels[ll + 2] * k1[2][0]; // lower left
                p7 = capimg.pixels[lc + 2] * k1[2][1]; // lower mid
                p8 = capimg.pixels[lr + 2] * k1[2][2]; // lower right
                var blue = (p0 + p1 + p2 + p3 + p4 + p5 + p6 + p7 + p8) / 9;

                //gewichtet nach farben
                //formel https://idmnyu.github.io/p5.js-image/Filters/index.html#bw
                var bw = red * .299 + green * .587 + blue * .0114;

                img.pixels[mc] = 255 - bw;
                img.pixels[mc + 1] = 255 - bw;
                img.pixels[mc + 2] = 255 - bw;
                img.pixels[mc + 3] = capimg.pixels[lc + 3];
            }
        }

        img.updatePixels();
        image(img, 0, 0, img.width, img.height);
    }
}

function mousePressed() {
    redraw(5); // press mouse to blur image even more!
}