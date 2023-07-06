// // Adjust video height based on window size
// window.addEventListener('resize', function() {
//     var video = document.getElementById('video-background');
//     var container = document.getElementById('video-container');
    
//     video.style.height = container.offsetHeight + 'px';
//   });
  
//   // Adjust video height on initial page load
//   window.addEventListener('load', function() {
//     var video = document.getElementById('video-background');
//     var container = document.getElementById('video-container');
    
//     video.style.height = container.offsetHeight + 'px';
//   });


// // Array of words
// var words = ["WAS IST INFORMATION?", "THE INFORMATION OF VOID", "WAS IST LEERRAUM?", "THE INFORMATION OF VOID"];

// // Get the text element
// var textElement = document.getElementById("fading-text");

// // Function to switch the text
// function switchText() {
//   // Generate a random index
//   var randomIndex = Math.floor(Math.random() * words.length);
  
//   // Get the word at the random index
//   var randomWord = words[randomIndex];
  
//   // Set the word as the text content
//   textElement.textContent = randomWord;
// }

// // Call switchText function initially
// switchText();

// // Set interval to switch the text every 2 seconds (2000 milliseconds)
// setInterval(switchText, 5000);



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
