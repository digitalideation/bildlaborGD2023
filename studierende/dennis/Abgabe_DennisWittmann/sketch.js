// Declare variables to hold the images
let img;
let img2; // Second image variable
let img3; // Third image variable
let img4; // Fourth image variable
let img5; // Fifth image variable
let img6; // Sixth image variable
let img7; // Seventh image variable
let img8; // Eighth image variable
let img9; // Ninth image variable
let img10;
let img11;

// Set initial configuration variables
let isDithered = true;
let pixelSize = 15; // Adjust this value to control the size of the pixels
let threshold1 = 85; // Threshold for color 1
let threshold2 = 170; // Threshold for color 2
let isMouseClicked = false; // Flag to track mouse click
let isScrolling = false; // Flag to track scrolling

// Preload the images before setup()
function preload() {
  // Load the images
  img = loadImage('assets/img1.jpeg');
  img2 = loadImage('assets/img88.jpeg');
  img3 = loadImage('assets/img8.jpeg');
  img4 = loadImage('assets/img6.jpeg');
  img5 = loadImage('assets/farbig.jpeg');
  img6 = loadImage('assets/img10.jpeg');
  img7 = loadImage('assets/img99.jpeg');
  img8 = loadImage('assets/img11.jpeg');
  img9 = loadImage('assets/pixel Kopie.png');
  img10 = loadImage('assets/imgglas.jpeg');
  img11 = loadImage('assets/img3.jpeg');
}

// Declare an array of texts
let texts = [
  'Zertrümmert durch meine Erinnerung',
  'Wo soll ich hin?',
  'Momente des Trüben',
  'Getrieben von Angst…',
  'Warum seit ihr nicht da?',
];

// Declare a variable to hold the current text index
let currentTextIndex = 0;

// Set the delay between text changes
let textChangeDelay = 3000; // Adjust this value to control the delay between text changes (in milliseconds)
let lastTextChangeTime = 0;

function setup() {
  // Create a canvas to display the images
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight + img.height * 21.1); // Adjust canvas height to accommodate all the images

  // Resize the images to fit the canvas
  img.resize(windowWidth, 0);
  img2.resize(windowWidth, 0);
  img3.resize(windowWidth, 0);
  img4.resize(windowWidth, 0);
  img5.resize(windowWidth, 0);
  img6.resize(windowWidth, 0);
  img7.resize(windowWidth, 0);
  img8.resize(windowWidth, 0);
  img9.resize(windowWidth, 0);
  img10.resize(windowWidth, 0);
  img11.resize(windowWidth, 0);
  // Attach scroll event listener to the window
  window.addEventListener('scroll', handleScroll);

  // Set the text style
  textFont('Times New Roman');
  textSize(36);
  textStyle(ITALIC);
}

function draw() {
  // Clear the canvas
  clear();

  let cumulativeHeight = 0;

  // Display the first image
  image(img, 0, cumulativeHeight);
  cumulativeHeight += img.height;

  // Display the second image below the first image
  image(img2, 0, cumulativeHeight);
  cumulativeHeight += img2.height;

  // Display the third image below the second image
  image(img3, 0, cumulativeHeight);
  cumulativeHeight += img3.height;

  // Display the fourth image below the third image
  image(img4, 0, cumulativeHeight);
  cumulativeHeight += img4.height;

  // Display the fifth image below the fourth image
  image(img5, 0, cumulativeHeight);
  cumulativeHeight += img5.height;

  // Display the sixth image below the fifth image
  image(img6, 0, cumulativeHeight);
  cumulativeHeight += img6.height;

  // Display the seventh image below the sixth image
  image(img7, 0, cumulativeHeight);
  cumulativeHeight += img7.height;

  // Display the eighth image below the seventh image
  image(img8, 0, cumulativeHeight);
  cumulativeHeight += img8.height;

  // Display the ninth image below the eighth image
  image(img9, 0, cumulativeHeight);
  cumulativeHeight += img9.height;

  // Display the ninth image below the eighth image
  image(img10, 0, cumulativeHeight);
  cumulativeHeight += img10.height;
  
  // Display the ninth image below the eighth image
  image(img11, 0, cumulativeHeight);
  cumulativeHeight += img11.height;

  if (!isScrolling) {
    movePixels(img, 0);
    movePixels(img5, 7120);
    movePixels (img8, 11700);
  }

  // Check if it's time to change the text
  if (millis() - lastTextChangeTime > textChangeDelay) {
    changeText();
    lastTextChangeTime = millis();
  }

  // Calculate the position of the text based on mouse coordinates
  let textX = mouseX;
  let textY = mouseY;

  // Check if the cursor is moving and hide the text
  if (pmouseX !== mouseX || pmouseY !== mouseY) {
    textX = -1000; // Move the text off-screen
    textY = -1000;
  }


  // Display the text
  fill(255);
  textSize(36); // Increase the text size
  textAlign(CENTER); // Center the text
  text(texts[currentTextIndex], textX, textY); // Place the current text at the mouse position
}

// Function to move the pixels randomly
function movePixels() {
  // Rest of the movePixels function code...

  // Check if the y-coordinate has reached the bottom of the canvas
  if (y + pixelSize >= height) {
    return; // Stop the function execution
  }
}

// Function to handle scrolling
function handleScroll() {
  // Set the isScrolling flag to true when scrolling occurs
  isScrolling = true;

  // Clear the isScrolling flag after a short delay
  setTimeout(function () {
    isScrolling = false;
  }, 200); // Adjust the delay duration as needed
}

// Function to change the text
function changeText() {
  // Increment the current text index
  currentTextIndex++;
  if (currentTextIndex >= texts.length) {
    currentTextIndex = 0;
  }
}

// Rest of the code...

// Function to move the pixels randomly
function movePixels(bild, TopPos) {
  bild.loadPixels();

  // Calculate the number of pixels in each row and column
  let numPixelsX = round(bild.width / pixelSize);
  let numPixelsY = round(bild.height / pixelSize);

  let threshold = 50; // Adjust this value to control the pixel movement speed

  for (let py = 0; py < numPixelsY; py++) {
    for (let px = 0; px < numPixelsX; px++) {
      // Calculate the starting position of the current pixel block
      let x = px * pixelSize;
      let y = py * pixelSize;

      // Calculate the distance between the original position and the current position
      let dx = x - (x + random(-threshold, threshold));
      let dy = y - (y + random(-threshold, threshold));
      let distance = sqrt(dx * dx + dy * dy);

      // Move the pixel away from the original position based on the distance
      if (distance < threshold * pixelSize) {
        let newX = x + dx;
        let newY = y + dy;

        // Only update the pixel if the new position is within the image boundaries
        if (newX >= 0 && newX < bild.width && newY >= 0 && newY < bild.height) {
          let index = (y * img.width + x) * 4;
          let r = bild.pixels[index];
          let g = bild.pixels[index + 1];
          let b = bild.pixels[index + 2];

          noStroke();
          fill(r, g, b);
          push();
          translate(0, TopPos);
          rect(newX, newY, pixelSize, pixelSize);
          pop();


        }
      }

      // Check if the y-coordinate has reached the bottom of the canvas
      if (y + pixelSize >= height) {
        return; // Stop the function execution
      }
    }
  }
  img.updatePixels();
}

// Function to handle scrolling
function handleScroll() {
  // Set the isScrolling flag to true when scrolling occurs
  isScrolling = true;

  // Clear the isScrolling flag after a short delay
  setTimeout(function () {
    isScrolling = false;
  }, 200); // Adjust the delay duration as needed
}

// Function to resize the canvas and images when the window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  img.resize(windowWidth, windowHeight);

  // Update the isScrolling flag to false when window is resized
  isScrolling = false;
}