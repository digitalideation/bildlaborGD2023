let img;


let posY = 0;

let shiftY = 0;

function preload() {
  img = loadImage("assets/cindy-small.jpg");
}

function setup() {
  createCanvas(img.width, img.height);

}

function draw() {

  posY = 0;

  while (posY < height) {

    let angle = map((posY + shiftY) % height, 0, height, 0, 180);
    let f = sin(radians(angle)); //wert zwischen 0 und 1
    let colHeight = map(f, 0, 1, 1, 40);

    posY += colHeight;
    push();
    translate(0, posY);
    scale(1, -1);
    copy(img, 0, posY, width, colHeight, 0, 0, width, colHeight);
    //line(i*colWidth, 0, i*colWidth, height);
    pop();
  }

  //shiftY++;

}


/*-------pures javaScript-------*/

/*
console.log("ganze hoehe" + document.documentElement.scrollHeight);
console.log("viewport hoehe" + document.documentElement.clientHeight);


const onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;

document.addEventListener("scroll", (event) => {

  let percentScrolled = Math.round(window.scrollY / onePercent) / 100;

  let plusMove = map(percentScrolled, 0, 1, 1, 5)
  shiftY += plusMove;

});*/



//https://gist.github.com/izumskee/af1a7469b9bbfc287464
// Calculate Scroll Speed
var lastOffset = window.scrollY;
var lastDate = new Date().getTime();

document.addEventListener("scroll", (e) => {
  var delayInMs = e.timeStamp - lastDate;
  var offset = window.scrollY - lastOffset;
  var speedInpxPerMs = offset / delayInMs;
  var scrollSpeed = Math.abs(speedInpxPerMs.toFixed(2));

  //console.log(scrollSpeed);
  shiftY +=scrollSpeed;

  lastDate = e.timeStamp;
  lastOffset = window.scrollY;
});


