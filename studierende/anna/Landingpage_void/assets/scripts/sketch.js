// Audio 1

// var audio = new Audio('/assets/audio/audio_1.mp3'); 

// var playButton = document.getElementById('audio1');
// playButton.addEventListener('click', function() {
//   audio.play();
// });


// scroll zoomt in video

const zoomElement = document.querySelector(".zoom");
let zoom = 1;
const ZOOM_SPEED = 0.1;

document.addEventListener("wheel", function(e) {  
    
    if(e.deltaY > 0){    
        zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
    }else{    
        zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;  }

});


// Mouse position beeinflusst video scroll

var video = document.getElementById("Video");
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");

video.addEventListener("mousemove", function(event) {
  var rect = video.getBoundingClientRect();
  var posX = event.clientX - rect.left;
  var posY = event.clientY - rect.top;

  var percentageX = (posX / rect.width) * 100;
  var percentageY = (posY / rect.height) * 100;

  var currentTime = (percentageX / 100) * video.duration;
  var volume = percentageY / 100;

  video.currentTime = currentTime;
  video.volume = volume;
});


// mit s bild speichern 

document.addEventListener("keydown", function(event) {
  if (event.key === "s") {
    captureFrame();
  }
});

function captureFrame() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  var link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "frame.png";
  link.click();
}



// random farbe on mouse over

const fadeElements = document.querySelectorAll('.fade');

    fadeElements.forEach(element => {
      const originalColor = getComputedStyle(element).color;

      element.addEventListener('mouseenter', () => {
        const randomColor = getRandomColor();
        element.style.color = randomColor;
      });

      element.addEventListener('mouseleave', () => {
        element.style.color = originalColor;
      });
    });

    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }


// tooltip1

var tooltipContainer = document.getElementById('tooltipContainer');
  var tooltipText = document.getElementById('tooltipText1');

  tooltipContainer.addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY + 20; // Adjust the offset to position the tooltip as desired

    tooltipText.style.display = 'block';
    tooltipText.style.left = x + 'px';
    tooltipText.style.top = y + 'px';
  });

  tooltipContainer.addEventListener('mouseout', function() {
    tooltipText.style.display = 'none';
  });


  // tooltip2

var tooltipContainer2 = document.getElementById('tooltipContainer2');
var tooltipText2 = document.getElementById('tooltipText2');

tooltipContainer2.addEventListener('mousemove', function(e) {
  var x = e.clientX;
  var y = e.clientY + 20; // Adjust the offset to position the tooltip as desired

  tooltipText2.style.display = 'block';
  tooltipText2.style.left = x + 'px';
  tooltipText2.style.top = y + 'px';
});

tooltipContainer2.addEventListener('mouseout', function() {
  tooltipText2.style.display = 'none';
});


  // tooltip3

  var tooltipContainer3 = document.getElementById('tooltipContainer3');
  var tooltipText3 = document.getElementById('tooltipText3');
  
  tooltipContainer3.addEventListener('mousemove', function(e) {
    var x = e.clientX + -150;
    var y = e.clientY + 20; // Adjust the offset to position the tooltip as desired
  
    tooltipText3.style.display = 'block';
    tooltipText3.style.left = x + 'px';
    tooltipText3.style.top = y + 'px';
  });
  
  tooltipContainer3.addEventListener('mouseout', function() {
    tooltipText3.style.display = 'none';
  });
  

// POINTER

document.addEventListener('mousemove', function (event) {
  var dot = document.getElementById('dot');
  dot.style.left = (event.pageX - 5) + 'px';
  dot.style.top = (event.pageY - 5) + 'px';

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  dot.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});


// Scroll indicator
document.addEventListener("DOMContentLoaded", function() {
  var scrollIndicator = document.createElement("div");
  scrollIndicator.classList.add("scroll-indicator");
  scrollIndicator.textContent = "SCROLL AND MOVE CURSOR";
  document.body.appendChild(scrollIndicator);

  var isMoving = false;
  var timeout;

  function showScrollIndicator() {
    if (!isMoving) {
      scrollIndicator.style.display = "block";
      setTimeout(function() {
        scrollIndicator.style.opacity = "1";
      }, 10); // Delaying the opacity transition by 10 milliseconds
    }
  }

  function hideScrollIndicator() {
    scrollIndicator.style.opacity = "0";
    setTimeout(function() {
      scrollIndicator.style.display = "none";
    }, 1000); // Set the desired transition duration in milliseconds (here it's set to 1 second)
  }

  document.addEventListener("mousemove", function() {
    if (!isMoving) {
      hideScrollIndicator();

      clearTimeout(timeout);
      isMoving = true;

      timeout = setTimeout(function() {
        isMoving = false;
        showScrollIndicator();
      }, 2000); // Set the desired timeout in milliseconds (here it's set to 1 second)
    }
  });

  showScrollIndicator();
});