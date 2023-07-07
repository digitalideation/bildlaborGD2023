let video;

function setup() {
    createCanvas(windowWidth, windowHeight);

    video = createCapture(VIDEO);
    video.size(640, 480);
    //video.size(width, height);
    //video.size(width, height);

    //image(video, 0, 0, width, height);

    //video.hide();
}

//mit scrollbereich
console.log("ganze hoehe" + document.documentElement.scrollHeight);
//fenserhöhe
console.log("viewport hoehe" + document.documentElement.clientHeight);

const onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;
//console.log(onePercent);

function draw() {
    // background(255);

    image(video, mouseX, mouseY);
    //image(video, 0, 0);

    // let gridSize = 50;

    // video.loadPixels();
    // for (let y = 0; y < video.height; y += gridSize) {
    //     for (let x = 0; x < video.width; x += gridSize) {
    //         let index = (y * video.width + x) * 4;
    //         let r = video.pixels[index];
    //         let dia = map(r, 0, 255, gridSize, 2);

    //         fill(0);
    //         noStroke();
    //         circle(x, y, dia);
    //     }
    // }

}

function mousePressed() {
    img.resize(6, 7);
}




function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}