
// script 
const close = document.getElementById('close');
const open = document.getElementById('open');
const container = document.querySelector('.container');

let rotateNav = document.querySelector('.rotate-navigate');

close.addEventListener('click', () => {
    rotateNav.classList.remove('show-nav');
    container.classList.remove('rotate');
});

open.addEventListener('click', () => {
   rotateNav.classList.add('show-nav');
   container.classList.add('rotate');
});