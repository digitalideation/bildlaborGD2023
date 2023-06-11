let img;

let threshold = 20;

function preload() {
  img = loadImage("assets/cindy-small.jpg")
}

function setup() {
  createCanvas(img.width, img.height);
  console.log(img.width)
  pixelDensity(1);
  //image(img, 0,0)
}

function draw() {

  detectEdges()

  //shiftPixels();


  noLoop();
}


function shiftPixels() {

  img.loadPixels();

  const div = round(random(img.pixels.length / 4));

  let part2 = img.pixels.slice(div * 4, img.pixels.length);

  for (let i = 0; i < img.pixels.length - div * 4; i += 4) {
    img.pixels[i] = part2[i];
    img.pixels[i + 1] = part2[i + 1];

  }

  img.updatePixels();

  image(img, 0, 0)
}


function detectEdges() {

  img.loadPixels();

  for (let i = 0; i < img.pixels.length; i += 4) {

    let c = color(
      img.pixels[i],
      img.pixels[i + 1],
      img.pixels[i + 2],
      img.pixels[i + 3]
    );

    let b = brightness(c);

    //left, right, top, bottom
    let neighbours = new Array(
      i - 4,
      i + 4,
      i - img.width * 4,
      i + img.width * 4
    );

    let abs = getcomparedBrightness(i, b, neighbours);

    if (abs > threshold) {
      // plot Point

      plotPoint(i);
    }

  }

}


function getcomparedBrightness(i, b, neighbours) {
  let difference = 0;
  for (let n = 0; n < neighbours.length; n++) {

   
    if (n > 0 && n < img.pixels.length) {

    let neigbour = neighbours[n];

    
    
      let c = color(
        img.pixels[neigbour],
        img.pixels[neigbour + 1],
        img.pixels[neigbour + 2],
        img.pixels[neigbour + 3]
      );

      let neighbourB = brightness(c);

      difference += abs(b - neighbourB);

    }
  }

  return difference;
}


function plotPoint(i){

  let x = (i / 4) % width;
  let y = (i / 4 -x) / width;

  point(x,y);

}