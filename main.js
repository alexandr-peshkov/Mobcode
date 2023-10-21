let menu= document.querySelector('.menu');
let menuWrapper= document.querySelector(".menu-wrapper");
menuWrapper.addEventListener('click', function(){
  menu.style.cssText = 'right: 0';
})
let close = document.querySelector('.close');
close.addEventListener('click', function(){
  menu.style.cssText = 'right: -100%';
})