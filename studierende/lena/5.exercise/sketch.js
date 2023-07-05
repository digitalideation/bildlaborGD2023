let lines = [];
let currentLine = 0;
let fadeSpeed = 5; // Ändere die Geschwindigkeit des Zeilenwechsels hier (1 steht für langsam, größere Werte für schneller)
let customFont;

function preload() {
  // Load the custom font file
  customFont = loadFont('font/AriadneLTStd-Roman.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,0,255);
  fill(255);
  textAlign(CENTER);
  textFont(customFont); // Verwende die geladene Schriftart

  lines = [
    "YOU",
    "How much do you make?",
    "Have you ever contemplated suicide?",
    "Are you now or have you ever been ... ?",
    "Are you aware of the fact ... ?",
    "I have here before me ...",
    "What is that \n buzzzzzzzzzzzzzzzzzzzizing?"
  ];
}

function draw() {
  background(255,0,255);

  if (currentLine < lines.length) {
    let alpha = map(frameCount, 0, 50 * fadeSpeed, 0, 255);
    alpha = constrain(alpha, 0, 255);
    fill(0, alpha);

    const textSizeScaled = 60; // Passe die Größe wie gewünscht an
    textSize(textSizeScaled);

    const line = lines[currentLine];
    const yPosScaled = height / 2;

    text(line, width / 2, yPosScaled);

    if (frameCount >= 50 * fadeSpeed) {
      currentLine++;
      frameCount = 0;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
