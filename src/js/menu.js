import $ from "jquery";
import { TweenMax } from "gsap";
import fullpage from "fullpage.js";
import { getCircleRadius } from './helpers';

class Menu {
  constructor() {
    this.isOpen = false;
    this.isAnimating = false;
    this.menuClipPath = document.querySelector(".menu__circle__bg__svg circle");
    this.menuElemnents = document.querySelectorAll(".menu__list__element");
  }

  init() {
    this.setMenuSvgCirclePosition();
    this.scrollToSlide();
    this.circleRadius = getCircleRadius();

    document
      .querySelector(".menu__button")
      .addEventListener("click", this.tooggleMenu.bind(this));
  }

  setMenuSvgCirclePosition() {
    this.marginRight = 16 + 28 / 2; // center to svg icon
    this.marginTop = 16 + 22 / 2;
    this.positionX = window.innerWidth - this.marginRight;

    $(".menu__circle__bg__svg").attr(
      "viewBox",
      `0 0 ${window.innerWidth} ${window.innerHeight}`
    );
    $(this.menuClipPath).attr("cx", this.positionX);
    $(this.menuClipPath).attr("cy", this.marginTop);
  }

  scrollToSlide() {
    let menu = document.querySelector(".menu__list");
    menu.addEventListener("click", scrollTo.bind(this));

    function scrollTo(e) {
      if (e.target !== e.currentTarget) {
        $.fn.fullpage.silentMoveTo(e.target.dataset.id);
        this.tooggleMenu();
      }
    }
  }

  tooggleMenu() {
    if (!this.isAnimating) {
      this.isAnimating = true;
      if (this.isOpen) {
        TweenMax.to(this.menuElemnents, 0.2, {
          opacity: 0,
          y: -10,
          onComplete: () =>
            TweenMax.to(this.menuClipPath, 0.4, {
              attr: { r: 0 },
              onComplete: () => {
                document.querySelector('.menu').classList.remove('is-open')
                this.isAnimating = false
              }
            })
        });
      } else {
        document.querySelector('.menu').classList.add('is-open')
        TweenMax.to(this.menuClipPath, 0.3, {
          attr: { r: this.circleRadius },
          onComplete: () => {
            TweenMax.staggerTo(
              this.menuElemnents,
              0.5,
              {
                opacity: 1,
                y: 0
              },
              0.05,
              () => this.isAnimating = false
            );
          }
        });
      }
      this.isOpen = !this.isOpen;
    }
  }
}

export default new Menu();
