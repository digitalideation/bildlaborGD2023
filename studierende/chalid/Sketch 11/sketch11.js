//ZOOMING IMAGE
const zoomElement = document.querySelector(".workspace");
let zoom = 2;
const ZOOM_SPEED = 0.3;

document.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
  } else {
    zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
  }
});
