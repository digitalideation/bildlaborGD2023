//'use strict';

var img;

let video;

var tileCountX = 6;
var tileCountY = 6;
var tileCount = tileCountX * tileCountY;
var imgTiles = [];
var tileWidth;
var tileHeight;
var cropX;
var cropY;

var selectMode = true;
var randomMode = false;

function preload() {
    //img = loadImage('assets/Swantje_Guentzel_Titelbild.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    //imageMode(CENTER);

    video = createCapture(VIDEO);
    video.size(640, 480);
    //video.size(1280, 920);
    image(video, 0, 0);
    tileWidth = width / tileCountY;
    tileHeight = height / tileCountX;

    noCursor();
    noFill();
    stroke(150);
    //noStroke();




}

function draw() {
    if (selectMode) {
        // in selection mode, a white selection rectangle is drawn over the image
        cropX = constrain(mouseX, 0, width - tileWidth);
        cropY = constrain(mouseY, 0, height - tileHeight);
        image(video, 0, 0);
        rect(cropX, cropY, tileWidth, tileHeight);
    } else {
        // reassemble image
        var imgIndex = 0;
        for (var gridY = 0; gridY < tileCountY; gridY++) {
            for (var gridX = 0; gridX < tileCountX; gridX++) {
                image(imgTiles[imgIndex], gridX * tileWidth, gridY * tileHeight);
                imgIndex++;
            }
        }
    }
}


function cropTiles() {
    tileWidth = width / tileCountY;
    tileHeight = height / tileCountX;
    imgTiles = [];

    for (var gridY = 0; gridY < tileCountY; gridY++) {
        for (var gridX = 0; gridX < tileCountX; gridX++) {
            if (randomMode) {
                cropX = int(random(mouseX - tileWidth / 2, mouseX + tileWidth / 2));
                cropY = int(random(mouseY - tileHeight / 2, mouseY + tileHeight / 2));
            }
            cropX = constrain(cropX, 0, width - tileWidth);
            cropY = constrain(cropY, 0, height - tileHeight);
            imgTiles.push(video.get(cropX, cropY, tileWidth, tileHeight));
        }
    }
}

function mouseMoved() {
    selectMode = true;
}

function mouseReleased() {
    selectMode = false;
    cropTiles();
}

// function keyReleased() {
//     if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

//     if (key == 'r' || key == 'R') {
//         randomMode = !randomMode;
//         cropTiles();
//     }

//     if (key == '1') {
//         tileCountX = 4;
//         tileCountY = 4;
//         cropTiles();
//     }
//     if (key == '2') {
//         tileCountX = 10;
//         tileCountY = 10;
//         cropTiles();
//     }
//     if (key == '3') {
//         tileCountX = 20;
//         tileCountY = 20;
//         cropTiles();
//     }
// }