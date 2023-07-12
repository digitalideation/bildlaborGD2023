let font;
let points;
let bounds;
let fontSize = 220;

let sc = 1;

let angle = 0;
let shiftY = 0;

function preload() {
    font = loadFont("/Input_Ex4/fonts/KKL-Narrow.woff")
}

function setup() {
    createCanvas(600, 600);

    points = font.textToPoints("SUPER", 0, 0, fontSize, {
        sampleFactor: 0.4,
        simplifyThreshold: 0


    });

    bounds = font.textBounds("SUPER", 0, 0, fontSize)
    console.log(bounds);
}

/**
 * @brief Reflect point p along line through points p0 and p1
 *
 * @author Balint Morvai <balint@morvai.de>
 * @license http://en.wikipedia.org/wiki/MIT_License MIT License 
 * @param p point to reflect
 * @param p0 first point for reflection line
 * @param p1 second point for reflection line
 * @return object
 */
var reflect = function(p, p0, p1) {
    var dx, dy, a, b, x, y;

    dx = p1.x - p0.x;
    dy = p1.y - p0.y;
    a = (dx * dx - dy * dy) / (dx * dx + dy * dy);
    b = 2 * dx * dy / (dx * dx + dy * dy);
    x = Math.round(a * (p.x - p0.x) + b * (p.y - p0.y) + p0.x);
    y = Math.round(b * (p.x - p0.x) - a * (p.y - p0.y) + p0.y);

    return { x: x, y: y };
}


function draw() {
    background(0);
    noFill()
    stroke(255);

    push();
    translate(width / 2, height / 2);
    stroke(255, 0, 0);

    scale(sc, sc);
    translate(-1 * bounds.w / 1.93, 0);

    stroke(180, 200, 290);
    strokeWeight(0.8);
    // beginShape();

    for (let i = 0; i < points.length; i++) {

        let p = points[i];
        let mirrorP = reflect(p, { x: 0, y: 0 }, { x: width, y: 0 })
        line(p.x, p.y - shiftY, mirrorP.x, mirrorP.y + shiftY)

    }

    pop();

    shiftY++;
    if (shiftY > 160) {
        shiftY = 0;
    }

}