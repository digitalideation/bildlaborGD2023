let bild;
let streifen=11;
let colWidth=0;

let streifenbreite=100;

let xPos=0;

let shiftX=0;

function preload(){
  bild=loadImage("assets/IMG_0541.jpg")
}

function setup() {
  createCanvas(windowWidth, 800);
  bild.resize(width, 0 )
  //image(bild, 100,100)

  bild.filter(GRAY);

  colWidth = round(width / streifen);

  //frameRate(1);
  //noLoop();
}

function draw() {
  //background(220);
  //copy(srcImage, sx, sy, sw, sh, dx, dy, dw, dh)

  /*if(mouseX > 0){
    copy(bild, mouseX, mouseY, 100, 1, mouseX+20, mouseY+50, 100, 1);
  }*/

  xPos=0;

  while(xPos < width){
  //for(let i=0; i<streifen; i=i+1){
     
  
      let winkel=map((xPos+shiftX) % width, 0, width, 0, 180);
      
      //console.log(sin(radians(winkel)));

      let faktor= sin(radians(winkel)) ;

      //console.log(faktor)

      colWidth = map(faktor, 0, 1, 1, 100);

      //console.log(colWidth)

      push();
      translate(xPos, 0);
      scale(-1, 1);
      tint(0, 153, 204); 
      copy(bild, xPos, 0, colWidth, height, 0, 0, colWidth, height);

      

      pop();

      xPos=xPos+colWidth;
      
  }

  //shiftX=shiftX+1;
  //shiftX++;
  
}


/*----pures JavaScript------*/

console.log("ganze hoehe" + document.documentElement.scrollHeight);
console.log("viewport hoehe" + document.documentElement.clientHeight);

let onePercent=(document.documentElement.scrollHeight - document.documentElement.clientHeight) /100;

document.addEventListener("scroll", (event) => {

  //console.log(window.scrollY)
  let percentScrolled = Math.round(window.scrollY / onePercent);
  
  //console.log(percentScrolled);
  shiftX+=percentScrolled / 10;

  if(percentScrolled > 50){
    document.getElementById("defaultCanvas0").style.opacity = 0;
  }else{
    document.getElementById("defaultCanvas0").style.opacity = 1;
  }
  
});