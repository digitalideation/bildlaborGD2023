let fragen=[
"Warum bin ich immer mit\nallem einverstanden?",
"Warum kann ich nicht so\nrichtig fröhlich sein?",
"Muss ich fröhlich sein?",
"Darf etws nicht wahr sein?",
"Brauche ich absolute Ruhe?",
"Warum dreht sich alles um mich?",
"Bin ich oder war ich schon?",
"Was wissen die Andern über mich?",
"Bin ich schön?",
"Warum geht es den andern immer besser?",
"Ist alles halb so schlimm?",
"Ist Hunger ein Gefühl?",
"Ist alles in meinem Kopf?",
"Kommen meine Meinungen von selbst?"];

let frageCounter=0;

let video;
const quadratGroesse = 118;
let webcamAngezeigt1 = false;
let webcamAngezeigt2 = false;
let webcamAngezeigt3 = false;
let webcamAngezeigt4 = false;
let webcamAngezeigt5 = false;
let webcamAngezeigt6 = false;
let webcamAngezeigt7 = false;
let webcamAngezeigt8 = false;
let webcamAngezeigt9 = false;
let webcamAngezeigt10 = false;
let webcamAngezeigt11 = false;
let webcamAngezeigt12 = false;
let webcamAngezeigt13 = false;
let webcamAngezeigt14 = false;
let webcamAngezeigt15 = false;
let capture;
let captureCopy1;
let captureCopy2; 
let captureCopy3; 
let captureCopy4;
let captureCopy5; 
let captureCopy6;
let captureCopy7;
let captureCopy8;
let captureCopy9;
let captureCopy10;
let captureCopy11;
let captureCopy12;
let captureCopy13;
let captureCopy14;
let captureCopy15;

/* */
let captureImg;

function preload() {
  bild = loadImage("assets/handy1vers3.png");
  customFont = loadFont('font/SyneTactile-Regular.ttf');
}


function setup() {

  
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(quadratGroesse, quadratGroesse);
  video.hide();
  pixelDensity(1);

  background(255,255,0);
  fill(255,255,0);
  stroke(0);
  textFont(customFont); 
  textSize(45);
  

  // setTimeout(function() {
  //   showWebcam(1);
  // }, 1000);
  
  // setTimeout(function() {
  //   showWebcam(2);
  // }, 2000);
  
  //setTimeout(function() {
  //showWebcam(3);
  //}, 1000);

  // setTimeout(function() {
  //   showWebcam(4);
  // }, 4000);

  // setTimeout(function() {
  //   showWebcam(5);
  // }, 5000);

  // setTimeout(function() {
  //   showWebcam(6);
  // }, 6000);

  //   setTimeout(function() {
  //   showWebcam(7);
  // }, 7000);

  // setTimeout(function() {
  //   showWebcam(8);
  // }, 8000);

  // setTimeout(function() {
  //   showWebcam(9);
  // }, 9000);

  // setTimeout(function() {
  //   showWebcam(10);
  // }, 10000);

  // setTimeout(function() {
  //   showWebcam(11);
  // }, 11000);

  // setTimeout(function() {
  //   showWebcam(12);
  // }, 12000);
 
  // setTimeout(function() {
  //   showWebcam(13);
  // }, 13000);

  // setTimeout(function() {
  //   showWebcam(14);
  // }, 14000);
  
  // setTimeout(function() {
  //   showWebcam(15);
  // }, 15000);
  
  

  capture = createCapture(VIDEO);
  capture.size(quadratGroesse, quadratGroesse);
  capture.hide();

  captureCopy1 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy2 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy3 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy4 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy5 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy6 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy7 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy8 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy9 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy10 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy11 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy12 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy13 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy14 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy15 = createGraphics(quadratGroesse, quadratGroesse);
}

function showWebcam(webcamNumber) {
  if (webcamNumber === 1) {
    webcamAngezeigt1 = true;

  } else if (webcamNumber === 2) {
    webcamAngezeigt2 = true;

  } else if (webcamNumber === 3) {
    webcamAngezeigt3 = true;
  }
  else if (webcamNumber === 4) {
    webcamAngezeigt4 = true;
  }
  else if (webcamNumber === 5) {
    webcamAngezeigt5 = true;
  }
  else if (webcamNumber === 6) {
    webcamAngezeigt6 = true;
  }
  else if (webcamNumber === 7) {
    webcamAngezeigt7 = true;
  }
  else if (webcamNumber === 8) {
    webcamAngezeigt8 = true;
  }
  else if (webcamNumber === 9) {
    webcamAngezeigt9 = true;
  }
  else if (webcamNumber === 10) {
    webcamAngezeigt10 = true;
  }
  else if (webcamNumber === 11) {
    webcamAngezeigt11 = true;
  }
  else if (webcamNumber === 12) {
    webcamAngezeigt12 = true;
  }
  else if (webcamNumber === 13) {
    webcamAngezeigt13 = true;
  }
  else if (webcamNumber === 14) {
    webcamAngezeigt14 = true;
  }
  else if (webcamNumber === 15) {
    webcamAngezeigt15 = true;
  }
}

function draw() {
  


  captureImg = video.get();

  //------------handybild darstellen
  let bildRatio = bild.width / bild.height;
  let fensterRatio = width / height;

  if (bildRatio > fensterRatio) {
    let neueBreite = width;
    let neueHöhe = neueBreite / bildRatio;
    let y = (height - neueHöhe) / 2;

  } else {
    let neueHöhe = height;
    let neueBreite = neueHöhe * bildRatio;
    let x = (width - neueBreite) / 2;

    
    image(bild, x, 0, neueBreite, neueHöhe);
  }
 
  

  if (webcamAngezeigt1) {
    //volles Bild
    captureCopy1.copy(captureImg, 0, 0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy1.loadPixels();
    invert(captureCopy1);
    captureCopy1.updatePixels();
    image(captureCopy1, 539, 585, quadratGroesse, quadratGroesse);
  }

  if (webcamAngezeigt2) {
    //ausschnitt 50pixel abstand vom rand
    captureCopy2.copy(captureImg, 50, 50, captureImg.width-50, captureImg.height-50, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy2.loadPixels();
    invert(captureCopy2);
    captureCopy2.updatePixels();
    image(captureCopy2, 780, 225, quadratGroesse, quadratGroesse);
  }

  if (webcamAngezeigt3) {
    //console.log('webcam 3'); 
    captureCopy3.copy(captureImg, 0, 0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy3.loadPixels();
    invert(captureCopy3);
    captureCopy3.updatePixels();
    image(captureCopy3, 660, 344, quadratGroesse, quadratGroesse); // Zeige das Capture Copy des zweiten Quadrats an der richtigen Position
  
  }

  if (webcamAngezeigt4) {
    captureCopy4.copy(captureImg, 20, 20, captureImg.width-20, captureImg.height-20, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy4.loadPixels();
    invert(captureCopy4);
    captureCopy4.updatePixels();
    image(captureCopy4, 660, 105, quadratGroesse, quadratGroesse);
  }

  if (webcamAngezeigt5) {
    captureCopy5.copy(captureImg, 70, 70, captureImg.width-70, captureImg.height-70, 0, 0, quadratGroesse, quadratGroesse); 
    captureCopy5.loadPixels();
    invert(captureCopy5);
    captureCopy5.updatePixels();
    image(captureCopy5, 540, 105, quadratGroesse, quadratGroesse);
  }

  if (webcamAngezeigt6) {
    captureCopy6.copy(captureImg, 90, 90, captureImg.width-90, captureImg.height-90, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy6.loadPixels();
    invert(captureCopy6);
    captureCopy6.updatePixels();
    image(captureCopy6, 539, 465, quadratGroesse, quadratGroesse);
  }

  if (webcamAngezeigt7) {
    captureCopy7.copy(captureImg, 40, 40, captureImg.width-40, captureImg.height-40, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy7.loadPixels();
    invert(captureCopy7);
    captureCopy7.updatePixels();
    image(captureCopy7, 780, 465, quadratGroesse, quadratGroesse);
  }

  if (webcamAngezeigt8) {
    captureCopy8.copy(captureImg, 60, 60, captureImg.width-60, captureImg.height-60, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy8.loadPixels();
    invert(captureCopy8);
    captureCopy8.updatePixels();
    image(captureCopy8, 539, 225, quadratGroesse, quadratGroesse);
  }

  if (webcamAngezeigt9) {
    captureCopy9.copy(captureImg, 35, 35, captureImg.width-35, captureImg.height-35, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy9.loadPixels();
    invert(captureCopy9);
    captureCopy9.updatePixels();
    image(captureCopy9, 780, 585, quadratGroesse, quadratGroesse);
  }

  if (webcamAngezeigt10) {
    captureCopy10.copy(captureImg, 45,45, captureImg.width-45, captureImg.height-45, 0, 0, quadratGroesse, quadratGroesse); 
    captureCopy10.loadPixels();
    invert(captureCopy10);
    captureCopy10.updatePixels();
    image(captureCopy10, 660, 585, quadratGroesse, quadratGroesse);
  }
  if (webcamAngezeigt11) {
    captureCopy11.copy(captureImg, 90,90, captureImg.width-90, captureImg.height-90, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy11.loadPixels();
    invert(captureCopy11);
    captureCopy11.updatePixels();
    image(captureCopy11, 778, 105, quadratGroesse, quadratGroesse);
  }
  if (webcamAngezeigt12) {
    captureCopy12.copy(captureImg, 50,50, captureImg.width-50, captureImg.height-50, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy12.loadPixels();
    invert(captureCopy12);
    captureCopy12.updatePixels();
    image(captureCopy12, 660, 465, quadratGroesse, quadratGroesse);
  }
  if (webcamAngezeigt13) {
    captureCopy13.copy(captureImg, 40,40, captureImg.width-40, captureImg.height-40, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy13.loadPixels();
    invert(captureCopy13);
    captureCopy13.updatePixels();
    image(captureCopy13, 660, 225, quadratGroesse, quadratGroesse);
  }
  if (webcamAngezeigt14) {
    captureCopy14.copy(captureImg, 70,70, captureImg.width-70, captureImg.height-70, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy14.loadPixels();
    invert(captureCopy14);
    captureCopy14.updatePixels();
    image(captureCopy14, 539, 344, quadratGroesse, quadratGroesse); 
  }
  if (webcamAngezeigt15) {
    captureCopy15.copy(captureImg, 0,0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy15.loadPixels();
    invert(captureCopy15);
    captureCopy15.updatePixels();
    image(captureCopy15, 780, 344, quadratGroesse, quadratGroesse); 
  }


 //-----------Fragen
  // 60 frames pro Sekunde 
  // 10 sekunden lang anzeigen
  let abstand=100;
  if(frageCounter < fragen.length){
    if(frameCount % (60*2) !=0){
      
        text(fragen[frageCounter],20+(Math.floor((frageCounter*abstand)/windowHeight))*windowWidth/1.8, 100 + frageCounter*abstand%(windowHeight-50)); 
    }else{
      //console.log(frageCounter+1);
      showWebcam((frageCounter+1));
      frageCounter++;
    }
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function invert(captureCopy){
  for (let y = 0; y < captureCopy.height; y++) {
    for (let x = 0; x < captureCopy.width; x++) {
      let index = (x + y * captureCopy.width) * 4;
      let r = captureCopy.pixels[index + 0];
      let g = captureCopy.pixels[index + 1];
      let b = captureCopy.pixels[index + 2];
      let a = captureCopy.pixels[index + 3];

      // Farben invertieren (Blur-Effekt)
      captureCopy.pixels[index + 0] = 255 - r; // R
      captureCopy.pixels[index + 1] = 255 - g; // G
      captureCopy.pixels[index + 2] = 255 - b; // B
    }
  }
}