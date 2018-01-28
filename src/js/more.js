import $ from 'jquery';
import { TweenMax, Power2 } from 'gsap';
import fullpage from 'fullpage.js';
import { getCircleRadius, setSvgCirclePosition } from './helpers';
import Carousel from './carousel';

class More {
  constructor() {
    this.isOpen = false;
    this.isAnimating = false;
    this.moreClipPath = document.querySelector('.more__circle__bg__svg circle');
    this.moreSection = document.querySelectorAll('.section__more');
    this.moreButton = document.querySelector('.more__button');
    this.mainSection = document.querySelectorAll('.section__main');
  }

  init() {
    setSvgCirclePosition('.more__button', '.more__circle__bg__svg');
    this.circleRadius = getCircleRadius();

    this.moreButton.addEventListener('click', this.tooggleMenu.bind(this));
  }

  tooggleMenu() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      if (this.isOpen) {
        TweenMax.to(this.moreSection, 0.3, {
          opacity: 0,
          y: -10,
          onComplete: () =>
            TweenMax.to(this.moreClipPath, 0.3, {
              attr: { r: 0 },
              onComplete: () => {
                TweenMax.to(this.mainSection, 0.2, {
                  opacity: 1,
                  y: 0
                });
                TweenMax.to(this.moreButton, 0.3, {
                  rotation: 45,
                  ease: Power2.easeOut
                });
                TweenMax.set(this.mainSection, {
                  css: {
                    display: 'block',
                    pointerEvents: 'all'
                  }
                });
                TweenMax.set(this.moreSection, {
                  css: {
                    display: 'none',
                    pointerEvents: 'none'
                  }
                });
                this.isAnimating = false;
              }
            })
        });
      } else {
        TweenMax.to(this.moreButton, 0.3, {
          rotation: 0,
          ease: Power2.easeOut
        });
        TweenMax.to(this.mainSection, 0.3, {
          opacity: 0,
          onComplete: () => {
            TweenMax.set(this.mainSection, {
              css: {
                display: 'none',
                pointerEvents: 'none'
              }
            });
            TweenMax.set(this.moreSection, {
              css: {
                display: 'block'
              }
            });
            TweenMax.to(this.moreSection, 0.3, {
              opacity: 1,
              y: 0
            });
            TweenMax.set(this.moreSection, {
              css: {
                pointerEvents: 'all'
              }
            });
            Carousel.recalculatePosition();
            this.isAnimating = false;
          }
        });
        TweenMax.to(this.moreClipPath, 0.3, {
          attr: { r: this.circleRadius },
          delay: 0.2
        });
      }
      this.isOpen = !this.isOpen;
    }
  }
}

export default new More();
