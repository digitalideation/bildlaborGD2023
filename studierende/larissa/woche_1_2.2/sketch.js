let font;

let fontSize = 500;

let wort1 = "There!"
let wort2 = "Gospel"
let percentScrolled = 0;

let upperPart;
let lowerPart;

function preload() {
    font = loadFont("fonts/KKL-Narrow.otf")
}


function setup() {
    createCanvas(1500, 600);

    upperPart = createGraphics(width, fontSize / 2);
    lowerPart = createGraphics(width, fontSize / 2);
    fill(255, 200, 200)
        //upperPart.rect(0, 0, upperPart.width, upperPart.height)
        //lowerPart.rect(0, 0, upperPart.width, upperPart.height)

    upperPart.textFont(font);
    upperPart.textSize(fontSize)
    lowerPart.textFont(font);
    lowerPart.textSize(fontSize)

    upperPart.text(wort1, 0, upperPart.height * 1.59);
    lowerPart.text(wort1, 0, lowerPart.height * 0.57);

    image(upperPart, 10, 100)
    image(lowerPart, 10, lowerPart.height + 100)

}

function draw() {
    background(255);


    let shiftX = map(percentScrolled, 0, 1, 0, 100)
    image(upperPart, 10, 100)
    push();
    translate(shiftX, 0);
    image(lowerPart, 10, lowerPart.height + 100)
    pop();

}

const onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;

//console.log(onePercent)
// console.log("total Dist"+totalDist);
document.addEventListener("scroll", (event) => {
    //console.log(window.scrollY);

    percentScrolled = Math.round(window.scrollY / onePercent) / 100;


});
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