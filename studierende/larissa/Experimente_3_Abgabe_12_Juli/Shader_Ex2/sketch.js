let myShader;
let img;
let txs = 100;
let mic, fftRaw, fft = [],
    waveform = [],
    amp = 0.0,
    ampStereo = {
        l: 0.0,
        r: 0.0
    },
    ampEase = 0.0,
    numBins = 512,
    bands = 12;
let audioStarted = false;

function preload() {
    myFont = loadFont('/Shader_Ex2/fonts/KKL-Narrow.otf');
    myImg = loadImage('/Shader_Ex2/assets/scan20.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    let button = createButton('Start Audio');
    button.position(10, 10);
    button.mousePressed(initializeAudioContext);

    img = createGraphics(895 * 0.75, 1280 * 0.75);

    let vertShader = `
        // attributes, in
        attribute vec3 aPosition;
        attribute vec3 aNormal;
        attribute vec2 aTexCoord;
        attribute vec4 aVertexColor;

        // attributes, out
        varying vec3 var_vertPos;
        varying vec4 var_vertCol;
        varying vec3 var_vertNormal;
        varying vec2 var_vertTexCoord;

        // matrices
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;
        uniform mat3 uNormalMatrix;

        void main() {
            gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);

            // just passing things through
            var_vertPos = aPosition;
            var_vertCol = aVertexColor;
            var_vertNormal = aNormal;
            var_vertTexCoord = aTexCoord;
        }
    `;

    let fragShader = `
    precision mediump float;

    uniform float uTime;  // Add this line to declare the uniform variable

    void main() {
        // Use the uniform variable to manipulate the color
        gl_FragColor = vec4(sin(uTime), 0.0, 0.0, 1.0);
    }
    `;

    myShader = new p5.Shader(this._renderer, vertShader, fragShader);

    // Other setup code...
}

function initializeAudioContext() {
    if (getAudioContext().state === 'suspended') {
        getAudioContext().resume().then(() => {
            setupAudio();
            audioStarted = true;
            // Remove the button after the context is resumed
            this.remove();
        });
    } else if (getAudioContext().state === 'running' && !audioStarted) {
        setupAudio();
        audioStarted = true;
        // Remove the button if the context is already running
        this.remove();
    }
}


function draw() {
    updateAudio();

    clear();
    background(22, 22, 22);

    let w = tan(radians(frameCount));
    let w2 = sin(radians(frameCount));

    // ...

    myShader.setUniform("uModelViewMatrix", this._renderer.uMVMatrix);
    myShader.setUniform("uProjectionMatrix", this._renderer.uPMatrix);
    myShader.setUniform("uNormalMatrix", this._renderer.uNMatrix);
    // Set the value of the uTime uniform
    myShader.setUniform("uTime", millis() * 0.001);

    push();
    shader(myShader);
    plane(width, height);
    pop();
}

function updateAudio() {
    if (mic) {
        fftRaw.analyze();
        amp = mic.getLevel() * 1000;
        ampStereo.l = mic.amplitude.getLevel(0) * 500;
        ampStereo.r = mic.amplitude.getLevel(1) * 500;
        ampEase = ease(amp, ampEase, 0.075);
        waveform = fftRaw.waveform();
        fft = fftRaw.logAverages(fftRaw.getOctaveBands(bands));
    }
}

function startAudio() {
    if (!audioStarted) {
        getAudioContext().resume().then(() => {
            setupAudio();
            audioStarted = true;
        });
    }
}

function setupAudio() {
    // Your audio-related setup code goes here
    mic = new p5.AudioIn();
    mic.start();
    fftRaw = new p5.FFT();
    fftRaw.setInput(mic);
}

function ease(value, target, easing) {
    return value + (target - value) * easing;
}