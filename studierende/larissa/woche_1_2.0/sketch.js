let font;
let points;
let bounds;

let sc = 4;
let Threshold = 0;
let angle = 0;

function preload() {
    font = loadFont("/fonts/KKL-Narrow.otf")

}


function setup() {
    createCanvas(600, 600);

    points = font.textToPoints("GLITCH", 0, 0, 50, {
        sampleFactor: 1,
        simplifyThreshold: 0


    });

    bounds = font.textBounds("GLITCH", 80, 20, 90)
    console.log(bounds);
}

function draw() {
    background(0);
    noFill()
    stroke(255);

    push();
    translate(width / 2.2, height / 3.2);
    stroke(255, 0, 0);

    scale(sc, sc);
    translate(-1 * bounds.w / 2, bounds.h / 2);

    stroke(255);
    strokeWeight(0.1);
    // beginShape();

    for (let i = 0; i < points.length; i += 1) {

        let f = sin(radians(i * 10 + angle));
        let size = map(f, 20, 0, 0, 10);

        let p = points[i];

        square(p.x, p.y, size, size);
        // vertex(p.x, p.y);
        // console.log(p);
    }

    // endShape(CLOSE);

    pop();

    angle += 30;
    Threshold++;

}

/* export class Text {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0';
        this.canvas.style.top = '0';
        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext('2d');

    }

    setText(str, density, stageWidth, stageHeight) {
        this.canvas.width = stageWidth;
        this.canvas.height = stageHeight;

        const myText = str;
        const fontWidth = 700;
        const fontSize = 800;
        const fontName = "KKL-Narrow";
        this.ctx.clearRect(0, 0, stageWidth, stageHeight);
        this.ctx.font = '${fontWidth} ${fontSize}px ${fontName}';
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        this.ctx.textBaseLine = 'middle';
        const fontPos = this.ctx.measureText(myText);
        this.ctx.fillText(
            myText,
            (stageWidth - fontPos.width) / 2,
            fontPos.actualBoundingBoxAscent +
            fontPost.actualBoundingBoxDescent +
            ((stageHeight - fontSize) / 2)
        );
        return this.dotPos(density, stageWidth, stageHeight);

    }

    dotPos(density, stageWidth, stageHeight) {
        const imageDate = this.ctx.getImageData(
            0, 0, stageWidth, stageHeight
        ).data;

        const particles = [];
        let i = 0;
        let width = 0;
        let pixel;

        for (let height = 0; height < stageHeight; height += density) {
            ++i;
            const slide = (i % 2) == 0;
            width = 0;
            if (slide == 1) {
                width += 6;

            }
            for (width; width < stageWidth; width += density) {
                pixel = imageData[((width + (height * stageWidth)) * 4) - 1];
                if (pixel != 0 &&

                    width > 0 &&
                    width < stageWidth &&
                    height > 0 &&
                    height < stageHeight) {
                    particles.push({
                        x: width,
                        y: height,
                    });
                }
            }
        }
        return particles;

    }
} */