
import fullPage from './fullPage';
window.addEventListener('load', init, false );

function init() {
  fullPage.initialize('.app');

  addSliderListener();
}

let currentActiveSlide = 1,
  slideElements = document.querySelectorAll('.section').length;

function updateCurrentActiveSlide() {
  let slide = document.querySelectorAll('.section');
  slide.forEach((element, index) => {
    if(element.classList.contains('active')) {
      return currentActiveSlide = index;
    }
  })
}

function addSliderListener() {
  let arrowUp = document.querySelector('.arrow-up'),
    arrowDown = document.querySelector('.arrow-down');

  arrowUp.addEventListener('click', prevSlide);
  arrowDown.addEventListener('click', nextSlide);
}

function nextSlide() {
  if(currentActiveSlide < slideElements) {
    currentActiveSlide += 1;
    fullPage.moveTo(currentActiveSlide)
  }
}

function prevSlide() {
  if(currentActiveSlide > 1 ) {
    currentActiveSlide -= 1;
    fullPage.moveTo(currentActiveSlide)
  }
}
