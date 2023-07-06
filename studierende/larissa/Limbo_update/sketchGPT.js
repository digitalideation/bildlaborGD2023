let scale = 3;
let offset = 0.08;
let brightness = 0.95;
let frequency = 0.1; // Initial frequency value
let amplitude = 0.1; // Initial amplitude value

let scrollOffset = 0; // Variable to store the scroll offset
let opacity = 0; // Initial opacity value

let myImg1, myImg2; // Declare the image variables here

function fbm(p) {
    return vec3(
        noise(p * 0.1),
        noise(p + offset * 0.3),
        noise(p + offset * 2.9)
    );
}

function preload() {
    // Load the shader
    camShader = loadShader('/effect.vert', '/effect.frag');

    // Load the images
    myImg1 = loadImage('/assets/scan21.jpg');
    myImg2 = loadImage('/assets/scan4.jpg');
}


function setup() {
    w = myImg1.width;
    h = myImg1.height;

    // shaders require WEBGL mode to work
    createCanvas(windowWidth, windowHeight, WEBGL);
    noStroke();
    frameRate(20);

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
}

function draw() {
    // Clear the canvas
    clear();

    // Update opacity based on the scroll
    let newOpacity = map(window.scrollY, 0, windowHeight, 0, 1);
    opacity = lerp(opacity, newOpacity, 0.1);

    // Draw the first image with the shader effect
    shader(camShader);
    camShader.setUniform('tex0', myImg1);
    camShader.setUniform('time', frameCount * 0.005);
    texture(myImg1);
    plane(width, height);

    // Draw the second image using the texture() function and apply opacity
    shader(camShader);
    camShader.setUniform('tex0', myImg2);
    camShader.setUniform('time', frameCount * 0.005);
    tint(255, opacity * 255); // Apply opacity to the second image
    texture(myImg2);
    plane(width, height);

    // Reset tint to full opacity
    tint(255, 255);
}


function handleScroll() {
    // Calculate scroll offset based on the scrollY value
    let newScrollOffset = window.scrollY;
    let scrollDelta = newScrollOffset - scrollOffset;
    scrollOffset = newScrollOffset;

    // Modify scale based on the scrollDelta
    scale += scrollDelta * 0.002;

    // Send the updated value to the shader
    camShader.setUniform('scale', scale);
    camShader.setUniform('offset', offset);
    camShader.setUniform('brightness', brightness);
    camShader.setUniform('frequency', frequency);
    camShader.setUniform('amplitude', amplitude);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function createRandomPixels(numPixels) {
    for (let i = 0; i < numPixels; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.top = Math.random() * window.innerHeight + 'px';
        pixel.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(pixel);
    }
}

// Call the function with the desired number of pixels
createRandomPixels(5); // Adjust the number of pixels as needed