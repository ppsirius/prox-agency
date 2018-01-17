import $ from "jquery";
import { TweenMax } from "gsap";
import fullpage from "fullpage.js";
import { getCircleRadius } from "./helpers";

class More {
  constructor() {
    this.isOpen = false;
    this.isAnimating = false;
    this.moreClipPath = document.querySelector(".more__circle__bg__svg circle");
    this.moreSection = document.querySelectorAll(".section__more");
    this.mainSection = document.querySelectorAll(".section__main");
  }

  init() {
    this.setMenuSvgCirclePosition();
    this.circleRadius = getCircleRadius();

    document
      .querySelector(".more__button")
      .addEventListener("click", this.tooggleMenu.bind(this));
  }

  setMenuSvgCirclePosition() {
    this.marginRight = 16 + 32 / 2; // center to svg icon
    this.marginBottom = 26 + 32 / 2;
    this.positionX = window.innerWidth - this.marginRight;
    this.positionY = window.innerHeight - this.marginBottom;

    $(".more__circle__bg__svg").attr(
      "viewBox",
      `0 0 ${window.innerWidth} ${window.innerHeight}`
    );
    $(this.moreClipPath).attr("cx", this.positionX);
    $(this.moreClipPath).attr("cy", this.positionY);
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
                TweenMax.set(this.mainSection, {
                  css: {
                    display: "block",
                    pointerEvents: "all"
                  }
                });
                TweenMax.set(this.moreSection, {
                  css: {
                    display: "none",
                    pointerEvents: "none"
                  }
                });
                this.isAnimating = false;
              }
            })
        });
      } else {
        TweenMax.to(this.mainSection, 0.3, {
          opacity: 0,
          onComplete: () => {
            TweenMax.set(this.mainSection, {
              css: {
                display: "none",
                pointerEvents: "none"
              }
            });
            TweenMax.set(this.moreSection, {
              css: {
                display: "block"
              }
            });
            TweenMax.to(this.moreSection, 0.3, {
              opacity: 1,
              y: 0
            });
            TweenMax.set(this.moreSection, {
              css: {
                pointerEvents: "all"
              }
            });
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
