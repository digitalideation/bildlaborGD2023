let img;
let planeGeometry;
let myShader;
let audioContextStarted = false;

function preload() {
    img = loadImage('/Shader_Ex1/assets/scan8.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    planeGeometry = createPlaneGeometry(img.width, img.height);

    const vertexShader = `
        attribute vec3 aPosition;
        attribute vec2 aTexCoord;

        varying vec2 vTexCoord;

        void main() {
            vTexCoord = aTexCoord;
            gl_Position = vec4(aPosition, 1.0);
        }
    `;

    const fragmentShader = `
        precision highp float;

        uniform sampler2D uTexture;

        varying vec2 vTexCoord;

        void main() {
            vec4 texColor = texture2D(uTexture, vTexCoord);
            vec4 invertedColor = vec4(1.0 - texColor.rgb, texColor.a);

            gl_FragColor = invertedColor;
        }
    `;

    myShader = createShader(vertexShader, fragmentShader);
    shader(myShader);

    // Start audio context on user gesture
    document.addEventListener('click', startAudioContext, { once: true });
}

function draw() {
    background(0);

    if (audioContextStarted && img && img.width > 0 && img.height > 0) {
        myShader.setUniform('uTexture', img);
        drawPlaneWithTexture(planeGeometry);
    }
}

function startAudioContext() {
    if (!audioContextStarted) {
        getAudioContext().resume().then(() => {
            audioContextStarted = true;
        }).catch((error) => {
            console.error('Failed to start audio context:', error);
        });
    }
}

function createPlaneGeometry(w, h) {
    const plane = {
        vertices: [],
        texCoords: [],
        indices: []
    };

    const numSegmentsX = 50;
    const numSegmentsY = 50;

    for (let j = 0; j <= numSegmentsY; j++) {
        for (let i = 0; i <= numSegmentsX; i++) {
            const u = i / numSegmentsX;
            const v = j / numSegmentsY;

            const x = u * w - w / 2;
            const y = v * h - h / 2;
            const z = 0;

            plane.vertices.push(x, y, z);
            plane.texCoords.push(u, v);

            if (i < numSegmentsX && j < numSegmentsY) {
                const a = i + j * (numSegmentsX + 1);
                const b = i + 1 + j * (numSegmentsX + 1);
                const c = i + (j + 1) * (numSegmentsX + 1);
                const d = i + 1 + (j + 1) * (numSegmentsX + 1);

                plane.indices.push(a, b, c);
                plane.indices.push(b, c, d);
            }
        }
    }

    return plane;
}

function drawPlaneWithTexture(plane) {
    beginShape(TRIANGLES);

    texture(img); // Specify the texture to use

    for (let i = 0; i < plane.indices.length; i++) {
        const index = plane.indices[i];

        const vx = plane.vertices[index * 3];
        const vy = plane.vertices[index * 3 + 1];
        const vz = plane.vertices[index * 3 + 2];
        const u = plane.texCoords[index * 2];
        const v = plane.texCoords[index * 2 + 1];

        vertex(vx, vy, vz, u, v);
    }

    endShape();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}