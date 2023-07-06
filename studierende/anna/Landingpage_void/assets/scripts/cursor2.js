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