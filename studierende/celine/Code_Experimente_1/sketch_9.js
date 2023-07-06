let img;
let cnv;

function preload() {
    img = loadImage('assets/Swantje_Guentzel_Titelbild.jpg');
}

function setup() {
    cnv = createCanvas(img.width, img.height);

    let newCanvsX = (windowWidth - img.width) / 2;
    let newCanvasY = (windowHeight - img.height) / 2;
    cnv.position(newCanvasX, newCanvasY);
}

for (let col = 0;)