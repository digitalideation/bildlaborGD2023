let video;
let posX = 0;
let shiftX = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    video = createCapture(VIDEO);
    //video.size(640, 480);
    video.size(width, height);

}

//mit scrollbereich
console.log("ganze hoehe" + document.documentElement.scrollHeight);
//fenserhöhe
console.log("viewport hoehe" + document.documentElement.clientHeight);

const onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;
//console.log(onePercent);

function draw() {
    posX = 0;

    videoimage = image(video, mouseX, mouseY);

    translate(sin(0.5), cos(1));

    while (posX < width) {
        //% modulo -> Arbeit mit Rest; niemals Grösser als Teiler
        let angle = map((posX + shiftX) % width, 0, width, 0, 180);
        let angle2 = map((posX + shiftX) % width, 0, width, 0, 540);
        let f = sin(radians(angle)); //wert zwischen 0 und 1
        let f2 = sin(radians(angle2));
        let colWidth = map(f, 0, 1, 1, 10);
        let shiftY = map(f2, -1, 1, -20, 20);

        posX += colWidth; //posY = posX+colWidth


        push();


        translate(posX, 0)


        scale(-1, 1);
        copy(videoimage, posX, 0, colWidth, height, 0, shiftY, colWidth, height)
        pop();
    }
    shiftX += 0.5;

}





function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}