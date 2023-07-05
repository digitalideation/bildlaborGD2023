let threshold = 1;
let img;

function preload() {
    img = loadImage("assets/gewitter.png");
}

function setup() {
    createCanvas(img.width, img.height);
    pixelDensity(1);
    image(img, 0, 0);

    // Event-Listener für Mausbewegung hinzufügen
    canvas.addEventListener('mousemove', function(event) {
        // Aktualisiere den Threshold-Wert basierend auf der Mausposition
        var rect = canvas.getBoundingClientRect();
        var mouseX = event.clientX - rect.left;
        var mouseY = event.clientY - rect.top;

        // Mappe die Mausposition auf den Bereich 1-15
        threshold = map(mouseY, 0, canvas.width, 1, 15);

        // Rufe die Funktion zum Zeichnen auf
        draw();
    });
}

function draw() {
    detectEdge();
}

function detectEdge() {
    img.loadPixels();

    for (let i = 0; i < img.pixels.length; i += 4) {
        // Color data is stored [r,g,b,a][r,g,b,a]
        let c = color(
            img.pixels[i],
            img.pixels[i + 1],
            img.pixels[i + 2],
            img.pixels[i + 3]
        );
        let b = brightness(c);

        // Get the values of the surrounding pixels
        //left, right, top,bottom
        let neighbours = new Array(
            i - 4,
            i + 4,
            i - img.width * 4,
            i + img.width * 4
        );

        compareBrightness(i, b, neighbours);
    }
}

function compareBrightness(me, b, neighbours) {
    for (let n = 0; n < neighbours.length; n++) {
        if (neighbours[n] > 0 && neighbours[n] < img.pixels.length - 1) {
            let i = neighbours[n];
            let c = color(
                img.pixels[i],
                img.pixels[i + 1],
                img.pixels[i + 2],
                img.pixels[i + 3]
            );
            let neighbourBrightness = brightness(c);

            if (abs(b - neighbourBrightness) > threshold) {
                plotPoint(me);
            }
        }
    }
}

function plotPoint(index) {
    let x = (index / 4) % img.width;
    let y = (index / 4 - x) / img.width;

    push();
    translate(width / 0, 1);
    strokeWeight(0.5); // Konturbreite
    stroke(255, 255, 255); // Farbe Kante
    point(x, y);
    pop();
}