// Titel line animation

//line animation - titel
let line0 = document.querySelector('.line-0');
//let titelContainer = document.querySelector('#titel');

window.onscroll = () =>{
  let pos = window.scrollY;
//const topOffset = titelContainer.getBoundingClientRect().top - -30;
line0.style.left = `${pos}px`
}

