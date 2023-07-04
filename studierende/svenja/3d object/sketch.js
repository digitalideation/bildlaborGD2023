let img;
let noiseScale = 0.001;
let time = 0;

function preload() {
    //img = loadImage('assets/16klein.jpg');
    img = loadImage('assets/19.jpg');
}

function setup() {
    createCanvas(img.width, img.height);
    noStroke();
}

function draw() {
    background(255);

    // Iterate over each pixel of the image
    for (let x = 0; x < img.width; x++) {
        for (let y = 0; y < img.height; y++) {
            // Calculate the Perlin noise value based on pixel position and time
            let noiseValue = noise(x * noiseScale, y * noiseScale, time);

            // Map the noise value to a displacement range
            let displacement = map(noiseValue, 0, 1, -20, mouseX);

            // Get the color of the pixel from the image
            let pixelColor = img.get(x, y);

            // Displace the pixel position based on the Perlin noise
            let displacedX = x + displacement;
            let displacedY = y + displacement;

            // Set the fill color to the pixel color
            fill(pixelColor);

            // Draw a small rect at the displaced position
            rect(displacedX, displacedY, 100, 100);
        }
    }

    // Update time for animating the fluid effect
    time += 0.1;
    fill(255, 255, 255);
    //rect(mouseX, mouseY, mouseX, 50);
    //circle(mouseX + 30, mouseY - 200, 200);
}