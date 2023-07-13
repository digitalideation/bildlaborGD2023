// sketchGPT.js

// p5.js sketch
let img;
let customShader;
let cvn;

function preload() {
    img = loadImage('/Shader_Ex1/assets/scan8.jpg'); // Replace with the path to your image
}

function setup() {
    cvn = createCanvas(windowWidth, windowHeight, WEBGL);
    customShader = loadShader("/Shader_Ex1/effect.vert", "/Shader_Ex1/effect.frag");
    customShader.setUniform('tex0', img);
}

function draw() {
    shader(customShader);
    customShader.setUniform('tex0', img);
    customShader.setUniform('uTime', millis() / 1000);

    noStroke();
    rect(0, 0, width, height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}