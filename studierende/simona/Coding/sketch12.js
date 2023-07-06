let bild;

function preload() {
  bild = loadImage("assets/Gesichter 6.png");
}

function setup() {
  createCanvas(2000, 2000);
  background(0, 0, 0); // Set background color to blue
  image(bild, 8, 0); 


}

function draw() {
  if (mouseX > 0) {
    let brushWidth = 100; 
    let brushHeight = 100; 

    let copiedImage = bild.get(mouseX, mouseY, brushWidth, brushHeight);
    copiedImage.filter(INVERT);

    image(copiedImage, mouseX, mouseY);
    
  }

  
}
