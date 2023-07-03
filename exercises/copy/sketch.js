let img;

let slices=80;
let col=0;

let a=0;

function preload(){
    img=loadImage("assets/IMG_0541.jpg");
    
}

function setup(){
    createCanvas(img.width, img.height);
    col=round(width/slices);
    //image(img, 0,0)
    //frameRate(1);
}

function draw(){
    let xPos=0;
    let w=0;
    while(xPos < width){
        //xPos+=col;
        let w=sin(radians(map((xPos+a)%width, 0, width, 0, 180)));
        col=map(w,0,1,2,20);
        xPos+=col;
        //console.log(w);
        push();
        translate(xPos, 0);
        scale(-1,1);
        //console.log(xPos)
        copy(img, xPos,0, col, height, 0, 0, col, height)
        pop();
    }
     a++;
    //noLoop();

        
}