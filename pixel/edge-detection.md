## Exercise 3 Simple Edge Detection

```js
//define threshold value
//load Pixels
//loop through pixels and compare brightness with neighbours brightness
//neighbours left, right, top,bottom: i-4,i+4,i-img.width*4, i+img.width*4

function detectEdge() {

  img.loadPixels();

  for (let i = 0; i < img.pixels.length; i += 4) {
     // Color data is stored [r,g,b,a][r,g,b,a]
    let c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
    let b = brightness(c);

    //todo: Get the values of the surrounding pixels
    //left, right, top,bottom
    // compare brightness 
  }

}

/*
me index of center pixel
b brightness of center pixel
neighbours array 
*/
function compareBrightness(me, b, neighbours) {
  for (let n = 0; n < neighbours.length; n++) {
    if (neighbours[n] > 0 && neighbours[n] < img.pixels.length - 1) {
      let i = neighbours[n];
      
      //todo get color and brightness of neighbour 
      //compare with b 
      //get difference with abs() https://p5js.org/reference/#/p5/abs
      //plot point if difference is greater than threshold value
  
    }
  }
}

```
<a href="https://editor.p5js.org/hzuellig/sketches/ZxjfOhXMU" target="_blank">HINT</a>
Build something based on edge detection


## Tutorials 
* Image Processing in p5.js https://idmnyu.github.io/p5.js-image/Filters/vid_filter.html
* Erklärung Pixel Array: https://creative-coding.decontextualize.com/video/
* Edge Detection Sobel Filter: https://idmnyu.github.io/p5.js-image/Edge/index.html
* Pixel Sorting https://www.youtube.com/watch?v=JUDYkxU6J0o
* Example Pixel Sorting: https://editor.p5js.org/codingtrain/sketches/zxruKuft9
* Sortieralgoritmen https://studyflix.de/informatik/sortieralgorithmen-1337