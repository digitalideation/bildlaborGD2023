const roomElement = document.querySelector(".room");
let zoom = 1;
const ZOOM_SPEED = 0.1;

document.addEventListener("wheel", function(e) {
    e.preventDefault();

    if (e.deltaY > 0) {
        zoom -= ZOOM_SPEED;
    } else {
        zoom += ZOOM_SPEED;
    }

    roomElement.style.transform = `scale(${zoom})`;
});