let lines=[];
let currentLine = 0;
let fadeSpeed = 3;

let lineSpacingX = 100; // Abstand zwischen den Linien
let lineSpacingY = 100;

let frageCounter=0;

let video;
const quadratGroesse = 118;
let randomSize=0;//random Groesse basierend auf quadratGroesse

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
let webcamAngezeigt16 = false;
let webcamAngezeigt17 = false;
let webcamAngezeigt18 = false;
let webcamAngezeigt19 = false;
let webcamAngezeigt20 = false;
let webcamAngezeigt21 = false;
let webcamAngezeigt22 = false;
let webcamAngezeigt23 = false;
let webcamAngezeigt24 = false;
let webcamAngezeigt25 = false;
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
let captureCopy16;
let captureCopy17;
let captureCopy18;
let captureCopy19;
let captureCopy20;
let captureCopy21;
let captureCopy22;
let captureCopy23;
let captureCopy24;
let captureCopy25;

/* */
let captureImg;

function preload() {
 // bild = loadImage("assets/handy1vers3.png");
  customFont = loadFont('font/SyneTactile-Regular.ttf');
}


function setup() {
  background(255,0,255);
  fill(255,255,0);
  stroke(0);
  textFont(customFont); 
  textSize(135); 
  
  
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(quadratGroesse, quadratGroesse);
  video.hide();
  pixelDensity(1);

  lines=[
    "Warum bin ich\nimmer mit allem\neinverstanden?",
    "Warum kann ich\nnicht so richtig\nfröhlich sein?",
    "Muss ich\nfröhlich sein?",
    "Darf etwas nicht\nwahr sein?",
    "Brauche ich\nabsolute Ruhe?",
    "Warum dreht\nsich alles\num mich?",
    "Bin ich oder\nwar ich schon?",
    "Was wissen die\nAndern über\nmich?",
    "Bin ich schön?",
    "Warum geht es\nden andern\nimmer besser?",
    "Ist alles halb\nso schlimm?",
    "Ist Hunger\nein Gefühl?",
    "Ist alles in\nmeinem Kopf?",
    "Kommen meine\nMeinungen von\nselbst?"];
    

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
  captureCopy16 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy17 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy18 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy19 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy20 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy21 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy22 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy23 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy24 = createGraphics(quadratGroesse, quadratGroesse);
  captureCopy25 = createGraphics(quadratGroesse, quadratGroesse);
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
  else if (webcamNumber === 16) {
    webcamAngezeigt16 = true;
  }
  else if (webcamNumber === 17) {
    webcamAngezeigt17 = true;
  }
  else if (webcamNumber === 18) {
    webcamAngezeigt18 = true;
  }
  else if (webcamNumber === 19) {
    webcamAngezeigt19 = true;
  }
  else if (webcamNumber === 20) {
    webcamAngezeigt20 = true;
  }
  else if (webcamNumber === 21) {
    webcamAngezeigt21 = true;
  }
  else if (webcamNumber === 22) {
    webcamAngezeigt22 = true;
  }
  else if (webcamNumber === 23) {
    webcamAngezeigt23 = true;
  }
  else if (webcamNumber === 24) {
    webcamAngezeigt24 = true;
  }
  else if (webcamNumber === 25) {
    webcamAngezeigt25 = true;
  }
}

function draw() {
  background(255,255,0);

  randomSeed(4);
  captureImg = video.get();

  fill(255,0,255)

  

  const yPosScaled = height / 3;

  stroke(255, 0, 255); // Pinke Linien
  strokeWeight(1.5);
  //Hintergrund Karro muster
  for (let x = 0; x < width; x += lineSpacingX) {
    for (let y = 0; y < height; y += lineSpacingY) {
      line(x, y, x + lineSpacingX, y); // Horizontale Linie
      line(x, y, x, y + lineSpacingY); // Vertikale Linie
    }
  }


 stroke(0);
 

  


  //------------handybild darstellen
  // let bildRatio = bild.width / bild.height;
  // let neueBreite = height * bildRatio;
  
  // image(bild, 50, 0, neueBreite, height);
  

  if (webcamAngezeigt1) {
    //volles Bild
    captureCopy1.copy(captureImg, 0, 0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy1.loadPixels();
    invert(captureCopy1);
    captureCopy1.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy1, randomX, randomY, randomSize, randomSize);
  }

  if (webcamAngezeigt2) {
    //ausschnitt 50pixel abstand vom rand
    captureCopy2.copy(captureImg, 50, 50, captureImg.width-50, captureImg.height-50, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy2.loadPixels();
    invert(captureCopy2);
    captureCopy2.updatePixels();
      // generate random x and y coordinates within the window
      var randomX = Math.floor(random() * windowWidth);
      var randomY = Math.floor(random() * windowHeight);
  
      randomSize=Math.floor(quadratGroesse * (random() + 1));
      // ensure the entire image stays on the screen
      if ((randomX + randomSize) > windowWidth) {
          randomX = windowWidth - randomSize;
      }
      if ((randomY + randomSize) > windowHeight) {
          randomY = windowHeight - randomSize;
      }
    image(captureCopy2, randomX, randomY, randomSize, randomSize);
  }

  if (webcamAngezeigt3) {
    //console.log('webcam 3'); 
    captureCopy3.copy(captureImg, 0, 0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy3.loadPixels();
    invert(captureCopy3);
    captureCopy3.updatePixels();
     // generate random x and y coordinates within the window
     var randomX = Math.floor(random() * windowWidth);
     var randomY = Math.floor(random() * windowHeight);
 
     randomSize=Math.floor(quadratGroesse * (random() + 1));
     // ensure the entire image stays on the screen
     if ((randomX + randomSize) > windowWidth) {
         randomX = windowWidth - randomSize;
     }
     if ((randomY + randomSize) > windowHeight) {
         randomY = windowHeight - randomSize;
     }
    image(captureCopy3, randomX, randomY, randomSize, randomSize); // Zeige das Capture Copy des zweiten Quadrats an der richtigen Position
  
  }

  if (webcamAngezeigt4) {
    captureCopy4.copy(captureImg, 20, 20, captureImg.width-20, captureImg.height-20, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy4.loadPixels();
    invert(captureCopy4);
    captureCopy4.updatePixels();
     // generate random x and y coordinates within the window
     var randomX = Math.floor(random() * windowWidth);
     var randomY = Math.floor(random() * windowHeight);
 
     randomSize=Math.floor(quadratGroesse * (random() + 1));
     // ensure the entire image stays on the screen
     if ((randomX + randomSize) > windowWidth) {
         randomX = windowWidth - randomSize;
     }
     if ((randomY + randomSize) > windowHeight) {
         randomY = windowHeight - randomSize;
     }
    image(captureCopy4, randomX, randomY, randomSize, randomSize);
  }

  if (webcamAngezeigt5) {
    captureCopy5.copy(captureImg, 70, 70, captureImg.width-70, captureImg.height-70, 0, 0, quadratGroesse, quadratGroesse); 
    captureCopy5.loadPixels();
    invert(captureCopy5);
    captureCopy5.updatePixels();
     // generate random x and y coordinates within the window
     var randomX = Math.floor(random() * windowWidth);
     var randomY = Math.floor(random() * windowHeight);
 
     randomSize=Math.floor(quadratGroesse * (random() + 1));
     // ensure the entire image stays on the screen
     if ((randomX + randomSize) > windowWidth) {
         randomX = windowWidth - randomSize;
     }
     if ((randomY + randomSize) > windowHeight) {
         randomY = windowHeight - randomSize;
     }
    image(captureCopy5, randomX, randomY, randomSize, randomSize);
  }

  if (webcamAngezeigt6) {
    captureCopy6.copy(captureImg, 90, 90, captureImg.width-90, captureImg.height-90, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy6.loadPixels();
    invert(captureCopy6);
    captureCopy6.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy6, randomX, randomY, randomSize, randomSize);
  }

  if (webcamAngezeigt7) {
    captureCopy7.copy(captureImg, 40, 40, captureImg.width-40, captureImg.height-40, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy7.loadPixels();
    invert(captureCopy7);
    captureCopy7.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy7, randomX, randomY, randomSize, randomSize);
  }

  if (webcamAngezeigt8) {
    captureCopy8.copy(captureImg, 60, 60, captureImg.width-60, captureImg.height-60, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy8.loadPixels();
    invert(captureCopy8);
    captureCopy8.updatePixels();
     // generate random x and y coordinates within the window
     var randomX = Math.floor(random() * windowWidth);
     var randomY = Math.floor(random() * windowHeight);
 
     randomSize=Math.floor(quadratGroesse * (random() + 1));
     // ensure the entire image stays on the screen
     if ((randomX + randomSize) > windowWidth) {
         randomX = windowWidth - randomSize;
     }
     if ((randomY + randomSize) > windowHeight) {
         randomY = windowHeight - randomSize;
     }
    image(captureCopy8, randomX, randomY, randomSize, randomSize);
  }

  if (webcamAngezeigt9) {
    captureCopy9.copy(captureImg, 35, 35, captureImg.width-35, captureImg.height-35, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy9.loadPixels();
    invert(captureCopy9);
    captureCopy9.updatePixels();
     // generate random x and y coordinates within the window
     var randomX = Math.floor(random() * windowWidth);
     var randomY = Math.floor(random() * windowHeight);
 
     randomSize=Math.floor(quadratGroesse * (random() + 1));
     // ensure the entire image stays on the screen
     if ((randomX + randomSize) > windowWidth) {
         randomX = windowWidth - randomSize;
     }
     if ((randomY + randomSize) > windowHeight) {
         randomY = windowHeight - randomSize;
     }
    image(captureCopy9, randomX, randomY, randomSize, randomSize);
  }

  if (webcamAngezeigt10) {
    captureCopy10.copy(captureImg, 45,45, captureImg.width-45, captureImg.height-45, 0, 0, quadratGroesse, quadratGroesse); 
    captureCopy10.loadPixels();
    invert(captureCopy10);
    captureCopy10.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy10, randomX, randomY, randomSize, randomSize);
  }
  if (webcamAngezeigt11) {
    captureCopy11.copy(captureImg, 90,90, captureImg.width-90, captureImg.height-90, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy11.loadPixels();
    invert(captureCopy11);
    captureCopy11.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy11, randomX, randomY, randomSize, randomSize);
  }
  if (webcamAngezeigt12) {
    captureCopy12.copy(captureImg, 50,50, captureImg.width-50, captureImg.height-50, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy12.loadPixels();
    invert(captureCopy12);
    captureCopy12.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy12, randomX, randomY, randomSize, randomSize);
  }
  if (webcamAngezeigt13) {
    captureCopy13.copy(captureImg, 40,40, captureImg.width-40, captureImg.height-40, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy13.loadPixels();
    invert(captureCopy13);
    captureCopy13.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy13, randomX, randomY, randomSize, randomSize);
  }
  if (webcamAngezeigt14) {
    captureCopy14.copy(captureImg, 70,70, captureImg.width-70, captureImg.height-70, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy14.loadPixels();
    invert(captureCopy14);
    captureCopy14.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy14, randomX, randomY, randomSize, randomSize); 
  }
  if (webcamAngezeigt15) {
    captureCopy15.copy(captureImg, 0,0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy15.loadPixels();
    invert(captureCopy15);
    captureCopy15.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy15, randomX, randomY, randomSize, randomSize); 
  }
  if (webcamAngezeigt16) {
    captureCopy16.copy(captureImg, 0,0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy16.loadPixels();
    invert(captureCopy16);
    captureCopy16.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy16, randomX, randomY, randomSize, randomSize); 
  }
  if (webcamAngezeigt17) {
    captureCopy17.copy(captureImg, 0,0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy17.loadPixels();
    invert(captureCopy17);
    captureCopy17.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy17, randomX, randomY, randomSize, randomSize); 
  }
  if (webcamAngezeigt18) {
    captureCopy18.copy(captureImg, 0,0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy18.loadPixels();
    invert(captureCopy18);
    captureCopy18.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy18, randomX, randomY, randomSize, randomSize); 
  }
  if (webcamAngezeigt19) {
    captureCopy19.copy(captureImg, 0,0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy19.loadPixels();
    invert(captureCopy19);
    captureCopy19.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy19, randomX, randomY, randomSize, randomSize); 
  }
  if (webcamAngezeigt20) {
    captureCopy20.copy(captureImg, 0,0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy20.loadPixels();
    invert(captureCopy20);
    captureCopy20.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy20, randomX, randomY, randomSize, randomSize); 
  }
  if (webcamAngezeigt21) {
    captureCopy21.copy(captureImg, 0,0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy21.loadPixels();
    invert(captureCopy21);
    captureCopy21.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy21, randomX, randomY, randomSize, randomSize); 
  }
  if (webcamAngezeigt22) {
    captureCopy22.copy(captureImg, 0,0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy22.loadPixels();
    invert(captureCopy22);
    captureCopy22.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy22, randomX, randomY, randomSize, randomSize); 
  }
  if (webcamAngezeigt23) {
    captureCopy23.copy(captureImg, 0,0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy23.loadPixels();
    invert(captureCopy23);
    captureCopy23.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy23, randomX, randomY, randomSize, randomSize); 
  }
  if (webcamAngezeigt24) {
    captureCopy24.copy(captureImg, 0,0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy24.loadPixels();
    invert(captureCopy24);
    captureCopy24.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy24, randomX, randomY, randomSize, randomSize); 
  }
  if (webcamAngezeigt25) {
    captureCopy25.copy(captureImg, 0,0, captureImg.width, captureImg.height, 0,0, quadratGroesse, quadratGroesse); 
    captureCopy25.loadPixels();
    invert(captureCopy25);
    captureCopy25.updatePixels();
    // generate random x and y coordinates within the window
    var randomX = Math.floor(random() * windowWidth);
    var randomY = Math.floor(random() * windowHeight);

    randomSize=Math.floor(quadratGroesse * (random() + 1));
    // ensure the entire image stays on the screen
    if ((randomX + randomSize) > windowWidth) {
        randomX = windowWidth - randomSize;
    }
    if ((randomY + randomSize) > windowHeight) {
        randomY = windowHeight - randomSize;
    }
    image(captureCopy25, randomX, randomY, randomSize, randomSize); 
  }

 //-----------Fragen
  // 60 frames pro Sekunde 
  // 10 sekunden lang anzeigen
  // let abstand=100;
  // if(frageCounter < fragen.length){
  //   if(frameCount % (60*2) !=0){
      
  //       text(fragen[frageCounter],20+(Math.floor((frageCounter*abstand)/windowHeight))*windowWidth/1.8, 100 + frageCounter*abstand%(windowHeight-50)); 
  //   }else{
  //     //console.log(frageCounter+1);
  //     showWebcam((frageCounter+1));
  //     frageCounter++;
  //   }
  // }

  if (currentLine < lines.length) {
    const line = lines[currentLine];
    text(line, width / 5, yPosScaled, [windowWidth]);
  }

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let textDiv = document.getElementById("text");

document.addEventListener("scroll", (event) => {
  // Berechne die aktuelle Zeile basierend auf dem Scroll-Verhalten
  let percentScrolled = Math.round((window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100);
  //console.log(percentScrolled);
  currentLine = round(map(percentScrolled, 0, 100, 0, lines.length));
  console.log(currentLine);
});

document.addEventListener('DOMContentLoaded', function() {
  const bilder = Array.from(document.querySelectorAll('.clickable-image'));

  bilder.forEach(function(bild) {
    bild.addEventListener('click', function() {
      location.href = "second.html";
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const bilder = Array.from(document.querySelectorAll('.clickable-image2'));

  bilder.forEach(function(bild) {
    bild.addEventListener('click', function() {
      location.href = "final.html";
    });
  });
});

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

setTimeout(function() {
  showWebcam(1);
}, 5000);

setTimeout(function() {
  showWebcam(2);
}, 6000);

setTimeout(function() {
showWebcam(3);
}, 7000);

setTimeout(function() {
  showWebcam(4);
}, 8000);

setTimeout(function() {
  showWebcam(5);
}, 9000);

setTimeout(function() {
  showWebcam(6);
}, 10000);

  setTimeout(function() {
  showWebcam(7);
}, 11000);

setTimeout(function() {
  showWebcam(8);
}, 12000);

setTimeout(function() {
  showWebcam(9);
}, 13000);

setTimeout(function() {
  showWebcam(10);
}, 14000);

setTimeout(function() {
  showWebcam(11);
}, 15000);

setTimeout(function() {
  showWebcam(12);
}, 16000);

setTimeout(function() {
  showWebcam(13);
}, 17000);

setTimeout(function() {
  showWebcam(14);
}, 18000);

setTimeout(function() {
  showWebcam(15);
}, 19000);

setTimeout(function() {
  showWebcam(16);
}, 20000);

setTimeout(function() {
  showWebcam(17);
}, 21000);

setTimeout(function() {
  showWebcam(18);
}, 22000);

setTimeout(function() {
  showWebcam(19);
}, 23000);

setTimeout(function() {
  showWebcam(20);
}, 24000);

setTimeout(function() {
  showWebcam(21);
}, 25000);

setTimeout(function() {
  showWebcam(22);
}, 26000);

setTimeout(function() {
  showWebcam(23);
}, 27000);

setTimeout(function() {
  showWebcam(24);
}, 28000);

setTimeout(function() {
  showWebcam(25);
}, 29000);