let lines = [];
let currentLine = 0;
let fadeSpeed = 3;
let customFont;

function preload() {
  
  customFont = loadFont('font/AriadneLTStd-Roman.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  textAlign(CENTER);
  textFont(customFont); // Verwende die geladene benutzerdefinierte Schriftart

  lines = [
    "YOU",
    "How much do you make?",
    "Have you ever contemplated suicide?",
    "Are you now or have you ever been ... ?",
    "Are you aware of the fact ... ?",
    "I have here before me ...",
    "What is that \n buzzzzzzzzzzzzzzzzzzzzzzzzzzzzzizing?"
  ];
}

function draw() {
  background(0);

  fill(255);

  const textSizeScaled = 50; 
  textSize(textSizeScaled);

  const yPosScaled = height / 2;

  if (currentLine < lines.length) {
    const line = lines[currentLine];
    text(line, width / 2, yPosScaled);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Scroll-Event hinzufügen
document.addEventListener("scroll", (event) => {
  // Berechne die aktuelle Zeile basierend auf dem Scroll-Verhalten
  let percentScrolled = Math.round((window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100);
  currentLine = round(map(percentScrolled, 0, 100, 0, lines.length));
});

document.getElementById("questions").addEventListener("scroll", (event) => {
  // Berechne die aktuelle Zeile basierend auf dem Scroll-Verhalten
  let percentScrolled = Math.round((window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100);
  currentLine = round(map(percentScrolled, 0, 100, 0, lines.length));
});
