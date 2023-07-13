let scale = 0;
let offset = 0.08;
let brightness = 0.95;
let frequency = 0.1; // Initial frequency value
let amplitude = 0.1; // Initial amplitude value
let scrollOffset = 0; // Variable to store the scroll offset
let myImg0;
let myImg1;
let myImg2;
let img1Y;
let img2Y;
let camShader;
let myShader;
let imgShader;
let pixels = []; // Array to store the pixels
const removeIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 49, 50, 51, 53, 54, 55];

function fbm(p) {
    return vec3(
        noise(p * 0.1),
        noise(p + offset * 0.3),
        noise(p + offset * 2.9)
    );
}

function preload() {
    myImg0 = loadImage("assets/scans_b_final_5.jpg");
    imgShader = loadShader("shader.vert", "shader.frag");
    myImg2 = loadImage("assets/scans_b_final_4.jpg");
}

function setup() {
    // Create the canvas
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.id('p5canvas');
    noStroke();

    // Load the image and shader
    myImg0 = loadImage("assets/scans_b_final_5.jpg");
    imgShader = loadShader("shader.vert", "shader.frag", startDrawing);
    myImg2 = loadImage("assets/scans_b_final_4.jpg");
}

function startDrawing() {
    // Set up event listeners
    window.addEventListener('scroll', handleScroll);

    // Generate pixels and remove specified indices
    generatePixels(50, removeIndices);

    // Start drawing
    loop();
}

function draw() {
    background(255);

    // Set up shader
    shader(imgShader);
    imgShader.setUniform("u_resolution", [width, height]);
    imgShader.setUniform("u_texture", myImg0);

    // Draw a rectangle to cover the canvas
    rect(-width / 2, -height / 2, width, height);

    // Calculate the scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Calculate the opacity values for myImg0
    let opacity1 = map(scrollTop, 0, windowHeight, 1, 0);
    opacity1 = constrain(opacity1, 0.1, 1);

    // Update the opacity of myImg0
    document.getElementById('myImg0').style.opacity = opacity1;

    if (scrollTop >= windowHeight * 8.5) {
        // Calculate the position for myImg1
        let img1Y = 0;

        // Calculate the opacity for myImg1
        let opacity2 = map(scrollTop, windowHeight * 8.5, windowHeight * 13.5, 0.4, 0);
        opacity2 = constrain(opacity2, 0, 0.4);

        // Draw myImg1 at the calculated position with the updated opacity
        document.getElementById('myImg1').style.top = `${img1Y}px`;
        document.getElementById('myImg1').style.opacity = opacity2;
    } else {
        // Reset the position and opacity of myImg1
        document.getElementById('myImg1').style.top = '100vh';
        document.getElementById('myImg1').style.opacity = '0';
    }

    // Draw pixels
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].display();
    }

    if (scrollTop >= windowHeight * 9) {
        // Calculate the position for myImg2
        let img2Y = 0;

        // Draw myImg2 at the calculated position
        document.getElementById('myImg2').style.top = `${img2Y}px`;
        document.getElementById('myImg2').style.opacity = '0.5';
    } else {
        // Reset the position and opacity of myImg2
        document.getElementById('myImg2').style.top = '100vh';
        document.getElementById('myImg2').style.opacity = '0';
    }

}

class Pixel {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 15;
    }

    display() {
        noStroke();
        fill(0, 0, 0);
        const halfSize = this.size / 2;
        quad(
            this.x - halfSize, this.y - halfSize,
            this.x + halfSize, this.y - halfSize,
            this.x + halfSize, this.y + halfSize,
            this.x - halfSize, this.y + halfSize
        );
    }
}

function generatePixels(numPixels, removeIndices) {
    const container = document.querySelector('.Pixel'); // Get the container element
    const containerWidth = window.innerWidth; // Get the window width
    const containerHeight = window.innerHeight; // Get the window height
    const rows = Math.ceil(Math.sqrt(numPixels));
    const cols = Math.ceil(numPixels / rows);
    const spacingX = containerWidth / cols; // Calculate spacing based on the window width
    const spacingY = containerHeight / rows; // Calculate spacing based on the window height

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const x = j * spacingX + spacingX / 2;
            const y = i * spacingY + spacingY / 2;
            const index = i * cols + j;
            if (!removeIndices.includes(index)) {
                const pixel = new Pixel(x, y);
                pixels.push(pixel);
                const pixelElement = document.createElement('div'); // Create a new div element for the pixel
                pixelElement.className = 'Pixel'; // Set the class name
                pixelElement.style.left = `${x}px`; // Set the left position
                pixelElement.style.top = `${y}px`; // Set the top position
                container.appendChild(pixelElement); // Append the pixel element to the container
            }
        }
    }
}

function handleScroll() {
    redraw(); // Trigger redraw to update the canvas
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
    // Update shader uniforms based on mouse position
    let scale = 1;
    let offset = 0.08;
    let brightness = 0.95;
    let time = millis() * 0.001;
    let grain = noise(mouseX * 0.1, mouseY * 0.1, time);
    // Update shader uniforms based on mouse position
    let mouseXNormalized = mouseX / width;
    let mouseYNormalized = mouseY / height;

    imgShader.setUniform("u_scale", scale);
    imgShader.setUniform("u_offset", offset);
    imgShader.setUniform("u_brightness", brightness);
    imgShader.setUniform("u_time", time);
    imgShader.setUniform("u_grain", grain);
    imgShader.setUniform("u_mouse", [mouseXNormalized, mouseYNormalized]);

    redraw(); // Redraw the canvas to apply the updated shader

    function triggerLightning() {
        const lightningElement = document.querySelector('.lightning');

        // Generate a random delay between 1 and 5 seconds
        const initialDelay = Math.random() * 4000 + 1000; // Random delay between 1 and 5 seconds
        const animationDuration = 50; // Set the duration of the lightning flash (in milliseconds)
        const numFrames = 2; // Number of opacity change frames (maximum 2)
        const delayIncrement = 50000; // Increment in delay between each frame (in milliseconds)
        const delayBeforeHide = 50000; // Delay before hiding the lightning (in milliseconds)
        const durationLimit = 20000; // Duration limit (in milliseconds)

        let delay = initialDelay;
        let startTime = Date.now();

        // Trigger the animation with a maximum of 2 opacity change frames
        for (let i = 0; i < Math.min(numFrames, 2); i++) {
            setTimeout(() => {
                lightningElement.style.opacity = '1';
                setTimeout(() => {
                    lightningElement.style.opacity = '0';
                }, animationDuration);
            }, delay);

            delay += delayIncrement;
        }

        // Hide the lightning after the specified delay
        setTimeout(() => {
            lightningElement.style.opacity = '0';
        }, delay + delayBeforeHide);

        // Check if the duration limit is reached
        setTimeout(() => {
            const elapsedTime = Date.now() - startTime;
            if (elapsedTime < durationLimit) {
                triggerLightning();
            }
        }, delay + delayBeforeHide + Math.random() * 3000 + 2000);
    }

    // Call the function to start the animation
    triggerLightning();

}
if (scrollTop >= windowHeight * 6.2) {

    // Calculate the position for myImg2
    let img2Y = 0;

    // Draw myImg2 at the calculated position
    document.getElementById('myImg2').style.top = `${img2Y}px`;
    document.getElementById('myImg2').style.opacity = '0.5';
} else {
    // Reset the position and opacity of myImg1
    document.getElementById('myImg2').style.top = '100vh';
    document.getElementById('myImg2').style.opacity = '0';
}