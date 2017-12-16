import $ from 'jquery';
import fullpage from "fullpage.js"
class FullPage {
  constructor() {
    this.currentActiveSlide = 1;
    this.slideElements = document.querySelectorAll('.section').length;
  }

  init() {
    $('.app').fullpage({
      onLeave: (index, slideIndex) => {
        this.currentActiveSlide = slideIndex;
      }
    });

    this.addListenerOnNavigation();
  }

  addListenerOnNavigation() {
    this.arrowUp = document.querySelector('.arrow-up'),
    this.arrowDown = document.querySelector('.arrow-down');

    this.arrowUp.addEventListener('click', this.animateToPrevSlide.bind(this));
    this.arrowDown.addEventListener('click', this.animateToNextSlide.bind(this));
  }

  animateToNextSlide() {
    if(this.currentActiveSlide < this.slideElements) {
      $.fn.fullpage.moveTo(this.currentActiveSlide + 1)
    }
  }

  animateToPrevSlide() {
    if(this.currentActiveSlide > 1) {
      $.fn.fullpage.moveTo(this.currentActiveSlide - 1)
    }
  }

}

export default new FullPage();