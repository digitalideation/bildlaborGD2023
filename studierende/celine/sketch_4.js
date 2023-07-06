function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('sketch');
}

function draw() {
    //background(220);
    //For (var BEGIN; END; INTERVAL){
    //DO SOMETHING }
    for (var x = 0; x < width; x += width / 24) {
        for (var y = 0; y < height; y += width / 24) {
            stroke(255);
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }
}