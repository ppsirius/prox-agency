import $ from "jquery";
import { TweenMax } from "gsap";
import fullpage from "fullpage.js";
import { getCircleRadius } from './helpers';

class Contact {
  constructor() {
    this.isOpen = false;
    this.isAnimating = false;
    this.contactClipPath = document.querySelector(".contact__circle__bg__svg circle");
    this.contactElemnents = document.querySelectorAll(".contact__mobile__container");
  }

  init() {
    this.setContactSvgCirclePosition();
    this.circleRadius = getCircleRadius();

    document
      .querySelector(".contact__button")
      .addEventListener("click", this.tooggleMenu.bind(this));
  }

  setContactSvgCirclePosition() {
    this.marginLeft = 16 + 38 / 2; // center to svg icon
    this.marginTop = 16 + 32 / 2;

    $(".contact__circle__bg__svg").attr(
      "viewBox",
      `0 0 ${window.innerWidth} ${window.innerHeight}`
    );

    $(this.contactClipPath).attr("cx", this.marginLeft);
    $(this.contactClipPath).attr("cy", this.marginTop);
  }

  tooggleMenu() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      if (this.isOpen) {
        TweenMax.to(this.contactElemnents, 0.2, {
          opacity: 0,
          y: -10,
          onComplete: () =>
            TweenMax.to(this.contactClipPath, 0.4, {
              attr: { r: 0 },
              onComplete: () => {
                document.querySelector('.contact').classList.remove('is-open')
                document.querySelector('.contact__button').classList.remove('is-open')
                this.isAnimating = false
              }
            })
        });
      } else {
        document.querySelector('.contact').classList.add('is-open');
        document.querySelector('.contact__button').classList.add('is-open')
        TweenMax.to(this.contactClipPath, 0.3, {
          attr: { r: this.circleRadius },
          onComplete: () => {
            TweenMax.staggerTo(
              this.contactElemnents,
              0.5,
              {
                opacity: 1,
                y: 0
              },
              0.2,
              () => this.isAnimating = false
            );
          }
        });
      }
      this.isOpen = !this.isOpen;
    }
  }
}

export default new Contact();
