

// //Background changes through scrolling
// let sections = document.querySelectorAll('.section');
// window.lastScrollTop = window.pageYOffset;

// document.body.style.background = sections[0].getAttribute('data-bg');

// window.addEventListener('scroll', onScroll);

// function onScroll() {
//   const scrollTop = window.pageYOffset;
  
//   sections.forEach(element => {
//     const rect = element.getBoundingClientRect();
//     if(rect.bottom <= (window.innerHeight * 0.5) && rect.bottom > 0){
//       document.body.style.background = element.getAttribute('data-bg');
//     }
    
//   });
//   /*const section = window.sections
//     .map(section => {
//       const el = section;
//       const rect = el.getBoundingClientRect();
//       return {el, rect};
//     })
//     .find(section => section.rect.bottom >= (window.innerHeight * 0.5));
//   document.body.style.background = section.el.getAttribute('data-bg');
// */
// }








//ZOOMING IMAGE

// const zoomElement = document.querySelector(".workspaceImg");
// let zoom = 0.005;
// const ZOOM_SPEED = 0.1;

// document.addEventListener("wheel", function (e) {
//   if (e.deltaY > 0) {
//     zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
//   } else {
//     zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
//   }
// });









// //line animation - Schlüsselwörter
// ///*https://www.youtube.com/watch?v=fa8kZNhdHOk
// let line1 = document.querySelector('.line-1');
// let line2 = document.querySelector('.line-2');
// let line3 = document.querySelector('.line-3');
// let line4 = document.querySelector('.line-4');
// let keywordsContainer = document.querySelector('#keywords');


// window.onscroll = () =>{
//   const topOffset = keywordsContainer.getBoundingClientRect().top - -600;
//   line1.style.left = `${topOffset}px`
//   line2.style.right = `${topOffset}px`
//   line3.style.left = `${topOffset}px`
//   line4.style.right = `${topOffset}px`
//   }




//letter spacing animation h2: Dritter Teil
//Tween Max library
 /* TweenMax.to('#letterspacing', 5, {
    letterSpacing: 15,
    autoRound: false,
    repeat: -1,
    yoyo: true,
    ease: Power2.easeInOut
  });*/









//   //Funktioniert nicht!!!!!!!!
//   //Magnifier Glass
//   //https://www.youtube.com/watch?v=ylYDtARRmOo
//  function magnify(imgID, zoom){
//   var img, glass, w, h, bw;
//   img = document.getElementById(imgID);
//   glass = document.createElement("div");
//   glass.setAttribute("class", "img-magnifier-glass");
//   img.parentElement.insertBefore(glass, img);
//   glass.style.backgroundImage = "url('" + img.scr+"')";
//   glass.style.backgroundRepeat = "no-repeat";
//   glass.style.backgroundSize = (img.width*zoom)+ "px" +(img.height*zoom) + "px";

//   bw=3;
//   w= glass.offsetWidth/2;
//   h= glass.offsetHeight/2;
//   glass.addEventListener("mousemove", moveMagnifier);
//   img.addEventListener("mousemove", moveMagnifier);

//   glass.addEventListener("touchmove", moveMagnifier);
//   img.addEventListener("touchmove", moveMagnifier);

//   function moveMagnifier(e){
//     var pos, x, y;

//     e.proventDefault();

//     pos = getcursorpos(e);
//     x=pos.x;
//     y=pos.y;


//     if(x> img.width -(w/zoom)){
//       x = img.width -(w/zoom);
//     }
//     if (x< w/zoom){
//       x = w/zoom;
//     }
//     if (y> img.height - (h/zoom)){
//     y = img.height-(h/zoom);
// }
//     if (y< h/zoom){
//     y = h/zoom;

// }

//   }
// }






