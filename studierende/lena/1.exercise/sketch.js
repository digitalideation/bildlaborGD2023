let bilder = []; // Array to store images
let streifen = 10;
let colHeight = 0;
let streifenbreite = 100;
let yPos = 0;
let shiftY = [];
let soundFile;

let anzahlbilder = 5;
let bildwidth;

function preload() {
  bildwidth = round((windowWidth) / anzahlbilder);
  
  for (let i = 1; i <= anzahlbilder; i++) {
    let imagePath = "assets/handy" + i + ".png";
    console.log(imagePath);
    let bild = loadImage(imagePath);
    bilder.push(bild);
    shiftY.push(random(1,10)); 
  }

  soundFormats("mp3");
  // soundFile = loadSound("sound/v12044gd0000ci4eec3c77u594otqi50_k3HnSWUy.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //frameRate(20);
}

function draw() {
  background(0); 

  for (let i = 0; i < bilder.length; i++) {
    yPos = 0;
    push();
    translate(i * bildwidth, 0);

    while (yPos < height) {
      let winkel = map((yPos + shiftY[i]) % height, 0, height, 0, 180);
      let faktor = sin(radians(winkel));
      colHeight = map(faktor, 0, 1, 10, 50);

      push();
      translate(0, yPos);
      scale(1, -1);
      copy(bilder[i], 0, yPos, bilder[i].width, colHeight, 0, 0, bildwidth, colHeight);
      pop();
      
      yPos += colHeight;
    }

    pop();
  }
}

// function mouseClicked() {
//   if (soundFile.isPlaying()) {
//     soundFile.stop();
//   } else {
//     soundFile.play();
//   }
// }

/*-----pures JavaScript--------*/
//console.log("ganze hoehe" + document.documentElement.scrollHeight);
//console.log("viewport hoehe" + document.documentElement.clientHeight);

let onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;

document.addEventListener("scroll", (event) => {
  let percentScrolled = Math.round(window.scrollY / onePercent);
  //console.log(percentScrolled);

  for (let i = 0; i < shiftY.length; i++) {
    shiftY[i] += percentScrolled / 10;
  }

  if (percentScrolled > 50) {
    //document.getElementById("defaultCanvas0").style.opacity = 0;
  } else {
    //document.getElementById("defaultCanvas0").style.opacity = 1;
  }
});
