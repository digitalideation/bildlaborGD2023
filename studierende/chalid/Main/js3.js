//change images onclick


var images = [
    "assets/image1.png",
    "assets/image2.png",
    "assets/image3.png",
    "assets/image4.png"
];

function changeImage(element) {
    var currentPath = element.src;

    var startIndex=currentPath.indexOf('assets');
    //console.log("start Index "+startIndex)

    var currentSrc=currentPath.slice(startIndex, currentPath.length);
    
    console.log(currentSrc);

    var currentIndex = images.indexOf(currentSrc);
    var nextIndex = (currentIndex + 1) % images.length;
    var nextSrc = images[nextIndex];
    

    if (nextIndex === 0) {
        // Reset back to the first image
        element.src = images[0];
    } else {
        element.src = nextSrc;
    }
}







