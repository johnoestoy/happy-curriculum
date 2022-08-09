
const elements = document.querySelector('.elements');
const btnRight = document.querySelector('.button-arrow.-right');
const btnLeft = document.querySelector('.button-arrow.-left');
let pixels = 30;

btnRight.addEventListener('click',function(){
  pixels = pixels + 30
  elements.style = `transform:translateX(${pixels}px)`
});

btnLeft.addEventListener('click', function(){
  pixels = pixels - 30
  elements.style = `transform:translateX(${pixels}px)`
});