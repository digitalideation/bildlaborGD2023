///*https://www.youtube.com/watch?v=fa8kZNhdHOk


let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');
let line3 = document.querySelector('.line-3');
let line4 = document.querySelector('.line-4');
let line5 = document.querySelector('.line-5');
let line6 = document.querySelector('.line-6');
let line7 = document.querySelector('.line-7');
let line8 = document.querySelector('.line-8');
let line9 = document.querySelector('.line-9');

window.onscroll = () =>{
  let pos = window.scrollY - 800;
  line1.style.left = `${pos}px`
  line2.style.right = `${pos}px`
  line3.style.left = `${pos}px`
  line4.style.right = `${pos}px`
  line5.style.left = `${pos}px`
  line6.style.right = `${pos}px`
  line7.style.left = `${pos}px`
  line8.style.right = `${pos}px`
  line9.style.left = `${pos}px`
}
