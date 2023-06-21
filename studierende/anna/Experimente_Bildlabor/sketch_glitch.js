// Scannish / Aug 2020 / Generative Typography / Type@Cooper



let font
let fontSize = 500

let words = "noise"

let graphic

let colSlider
let rowSlider
let crazySliderX
let crazySliderY

function preload() {
    font = loadFont('assets/fonts/RivieraEDU.otf ')
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1)

    colSlider = createSlider(1, 200, 50, 1);
    colSlider.position(10, 10);
    colSlider.style('width', '80px');

    rowSlider = createSlider(1, 300, 100, 1);
    rowSlider.position(10, 40);
    rowSlider.style('width', '80px');

    crazySliderX = createSlider(5, 100, 10, 1);
    crazySliderX.position(10, 70);
    crazySliderX.style('width', '80px');

    crazySliderY = createSlider(5, 100, 10, 1);
    crazySliderY.position(10, 100);
    crazySliderY.style('width', '80px');


    graphic = createGraphics(windowWidth, windowHeight)

    graphic.textFont(font)
    graphic.textAlign(CENTER, CENTER)
    graphic.textSize(fontSize)
    graphic.fill(0, 255, 0)
    graphic.text(words, width / 2, height / 2)

    // //offset + adjust size + color

    // //red
    // graphic.textSize(fontSize)
    // graphic.fill(255, 0, 0)
    // graphic.text(words, width / 2 - 1, height / 2 - 1)

    // //blue
    // graphic.textSize(fontSize + 5)
    // graphic.fill(16, 59, 232)
    // graphic.text(words, width / 2 + 2, height / 2 + 2)

    // //green
    // graphic.fill(45, 191, 0)
    // graphic.text(words, width / 2 - 2, height / 2 - 2)


    // // white
    // graphic.fill(255, 255, 255)
    // graphic.text(words, width / 2, height / 2)


    // // translate(width/2, height/2)


}

function draw() {

    background(48, 48, 48, 80);
    fill(255)
    textAlign(LEFT, TOP)
    text('"wideness"', 100, 13)
    text('"tallness"', 100, 43)
    text('"top squiggle"', 100, 73)
    text('"side squiggle"', 100, 103)

    rows = rowSlider.value();
    cols = colSlider.value();

    crazyX = crazySliderX.value();
    crazyY = crazySliderY.value();


    for (let x = 0; x < width / rows; x += 1) {
        for (let y = 0; y < height / cols; y += 1) {


            sinDistortionX = sin(frameCount * 0.05 + x * 0.5 + y * 0.9) * crazyX
            sinDistortionY = cos(frameCount * 0.05 + x * 0.5 + y * 0.9) * crazyY


            let dx = x * rows
            let dy = y * cols
            let dw = rows
            let dh = cols

            let sx = x * rows + sinDistortionX
            let sy = y * cols + sinDistortionY
            let sw = rows
            let sh = cols

            image(graphic, dx, dy, dw, dh,
                sx, sy, sw, sh)
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}