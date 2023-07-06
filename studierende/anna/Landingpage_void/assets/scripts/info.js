// random farbe on mouse over

const fadeElements = document.querySelectorAll('.fade-zitat');

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
