let organix = []; // Array to store the cat images
let posX;
let posY;

let xoff = 0.0;
let yoff = 0.0;

let zoom = 1; // Zoom factor
let targetZoom = 1; // Target zoom factor
let zoomSpeed = 0.02; // Speed of zooming
let zoomIncrement = 0.01; // Zoom increment per frame

function preload() {
  // Load images here
  organix.push(loadImage("assets/1.jpg"));
  organix.push(loadImage("assets/2.jpg"));
  organix.push(loadImage("assets/ORGANI.jpg"));
  // Add more images as needed
}

function setup() {
  createCanvas(800, 600);
  posX = width / 2;
  posY = height / 2;
}

function draw() {
  background(220);

  // Draw images and apply zoom effect here

  // Update the current zoom towards the target zoom
  zoom = lerp(zoom, targetZoom, zoomSpeed);

  // Apply the zoom effect to the images
  let currentImage = random(organix);
  let zoomedOrganixWidth = currentImage.width * zoom;
  let zoomedOrganixHeight = currentImage.height * zoom;
  image(currentImage, posX, posY, zoomedOrganixWidth, zoomedOrganixHeight);

  // Gradually increase the target zoom factor when the image appears
  if (Math.random() < 0.2) { // Adjust the probability for the zoom effect
    targetZoom += zoomIncrement;
  } else {
    targetZoom = 1; // Reset the target zoom factor
  }
}

function mouseWheel(event) {
  // Zoom in or out based on the mouse scroll wheel
  let zoomChange = event.delta * 0.01;
  targetZoom += zoomChange;
  targetZoom = constrain(targetZoom, 0.5, 3); // Limit the zoom range
}

