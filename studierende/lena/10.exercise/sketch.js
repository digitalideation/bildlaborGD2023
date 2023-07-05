let images = []; // Array für alle Bilderobjekte
let numImages = 10; // Anzahl der Bilder

function preload() {
  // Lade die Bilder vorab
  for (let i = 1; i <= numImages; i++) {
    let img = loadImage('assets/zu' + i + '.png');
    images.push(img);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Erstelle Bilderobjekte und fülle das Array
  for (let i = 0; i < numImages; i++) {
    let newImg = new ImageObject(random(width), random(height), random(images));
    images[i] = newImg;
  }
}

function draw() {
  background(0);

  for (let i = 0; i < images.length; i++) {
    let imgObj = images[i];

    // Ändere die Größe des Bildes
    imgObj.scale += imgObj.scaleFactor;

    // Zeichne das Bild in der aktuellen Größe
    let imgWidth = imgObj.img.width * imgObj.scale;
    let imgHeight = imgObj.img.height * imgObj.scale;
    let imgX = imgObj.x - imgWidth / 2;
    let imgY = imgObj.y - imgHeight / 2;
    image(imgObj.img, imgX, imgY, imgWidth, imgHeight);

    // Überprüfe, ob das Bild die maximale oder minimale Größe erreicht hat
    if (imgObj.scale >= 2 || imgObj.scale <= 0.1) {
      imgObj.scaleFactor = -imgObj.scaleFactor; // Ändere den Skalierungsfaktor, um die Größe zu ändern
    }

    // Aktualisiere die Position des Bildes
    imgObj.update();
  }
}

function keyPressed() {
  // Wenn eine Taste gedrückt wird, erhöhe den Skalierungsfaktor für alle Bilder
  for (let i = 0; i < images.length; i++) {
    images[i].scaleFactor += 0.01;
  }
}

// Bildobjekt
class ImageObject {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.scale = random(0.1, 0.5); // Zufällige Startskalierung
    this.scaleFactor = random(0.01, 0.03); // Zufälliger Skalierungsfaktor
    this.velocityX = random(-2, 2); // Zufällige Geschwindigkeit in x-Richtung
    this.velocityY = random(-2, 2); // Zufällige Geschwindigkeit in y-Richtung
  }

  update() {
    // Bewege das Bild
    this.x += this.velocityX;
    this.y += this.velocityY;

    // Überprüfe, ob das Bild die Fenstergrenzen überschreitet
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.reset(); // Setze das Bild zurück
    }
  }

  reset() {
    // Setze das Bild zurück auf die gegenüberliegende Fenstergrenze
    if (this.x < 0) {
      this.x = width;
    } else if (this.x > width) {
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = height;
    } else if (this.y > height) {
      this.y = 0;
    }

    // Zufällige Geschwindigkeit beibehalten
    this.velocityX = random(-2, 2);
    this.velocityY = random(-2, 2);
  }
}
