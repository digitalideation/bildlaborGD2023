let showText = true;
let opacity = 0;
let fadeInSpeed = 5;
let bild;

function preload() {
  bild = loadImage("assets/Bild13.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 0); // Neon green background
  textFont('Arial');
}

function draw() {
  if (showText) {
    // Gradually decreasing opacity
    if (opacity > 0) {
      opacity -= fadeInSpeed;
      if (opacity < 0) {
        opacity = 0;
      }
    }
    
    background(0, 255, 0); 
    fill(255, 255, 255, opacity);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("...and who are you?", width / 2, height / 2);

    // Transition to image manipulation function
    if (opacity === 0) {
      showText = false;
    }
  } else {
    // Image manipulation function
    if (mouseX > 0) {
      let brushWidth = 50;
      let brushHeight = 50;

      let copiedImage = bild.get(mouseX, mouseY, brushWidth, brushHeight);

      copiedImage.filter(INVERT);

      tint(0, 255, 0);
      image(copiedImage, mouseX, mouseY);
      noTint();
    }
  }
}

function mouseClicked() {
  if (showText) {
    showText = false;
  } else {
    // Resetting the animation
    showText = true;
    opacity = 0;
  }
}
