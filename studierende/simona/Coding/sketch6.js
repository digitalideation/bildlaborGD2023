// Array to store the hidden sentences
let sentences = [
  "Hello, how are you?",
  "Good Morning!",
  "Welcome!",
  "Have a nice day!",
  "Greetings!",
  "Enjoy your day!",
  "Nice to meet you!",
  "Take care!"
];

// Variables to store canvas dimensions
let canvasWidth, canvasHeight;

function setup() {
  // Set up canvas
  canvasWidth = windowWidth;
  canvasHeight = windowHeight;
  createCanvas(canvasWidth, canvasHeight);

  // Set initial background color to white
  background(255);

  // Set text properties
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  // Draw hidden sentences
  for (let i = 0; i < sentences.length; i++) {
    // Set the fill color based on mouse hover
    let fillColor = isMouseOverText(sentences[i]) ? 0 : 255;
    fill(fillColor);

    // Calculate text position
    let x = canvasWidth / 2;
    let y = (canvasHeight / (sentences.length + 1)) * (i + 1);

    // Draw the text
    text(sentences[i], x, y);
  }
}

function isMouseOverText(sentence) {
  // Calculate text bounds
  let bounds = font.textBounds(sentence, canvasWidth / 2, canvasHeight / 2, textSize);

  // Check if mouse is within the text bounds
  return mouseX > bounds.x &&
    mouseX < bounds.x + bounds.w &&
    mouseY > bounds.y &&
    mouseY < bounds.y + bounds.h;
}

function mouseMoved() {
  // Check if the mouse is over any sentence and update the canvas
  for (let i = 0; i < sentences.length; i++) {
    if (isMouseOverText(sentences[i])) {
      // Change the fill color of the hovered sentence to black
      fill(0);
    } else {
      // Reset the fill color of non-hovered sentences to white
      fill(255);
    }

    // Calculate text position
    let x = canvasWidth / 2;
    let y = (canvasHeight / (sentences.length + 1)) * (i + 1);

    // Draw the text
    text(sentences[i], x, y);
  }
}
