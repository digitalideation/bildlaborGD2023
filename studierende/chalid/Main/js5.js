// // Titel line animation

// //line animation - titel
// let line0 = document.querySelector('.line-0');
// //let titelContainer = document.querySelector('#titel');

// window.onscroll = () =>{
//   let pos = window.scrollY;
// //const topOffset = titelContainer.getBoundingClientRect().top - -30;
// line0.style.left = `${pos}px`
// }





// //line animation - Schlüsselwörter
// ///*https://www.youtube.com/watch?v=fa8kZNhdHOk
// let line5 = document.querySelector('.line-5');
// let fiveContainer = document.querySelector('#five');

// window.onscroll = () =>{
//   const topOffset = fiveContainer.getBoundingClientRect().top - -30;
//   let pos = window.scrollY - -600;
//   line5.style.left = `${topOffset}px`
//   }









//line animation - Schlüsselwörter
///*https://www.youtube.com/watch?v=fa8kZNhdHOk
let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');
let line3 = document.querySelector('.line-3');
let line4 = document.querySelector('.line-4');
let keywordsContainer = document.querySelector('#keywords');

let line5 = document.querySelector('.line-5');

window.onscroll = () =>{
  const topOffset = keywordsContainer.getBoundingClientRect().top - -600;
  line1.style.left = `${topOffset}px`
  line2.style.right = `${topOffset}px`
  line3.style.left = `${topOffset}px`
  line4.style.right = `${topOffset}px`

  let pos = window.scrollY - -30;
  line5.style.left = `${pos}px`
  }





