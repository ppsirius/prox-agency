import $ from "jquery";
import { TweenMax } from "gsap";
import fullpage from "fullpage.js";

class Menu {
  constructor() {
    this.isOpen = false;
    this.menuClipPath = document.querySelector("#menu_clip_path circle");
  }

  init() {
    this.setMenuSvgCirclePosition();
    this.scrollToSlide();

    document
      .querySelector(".menu__button")
      .addEventListener("click", this.tooggleMenu.bind(this));
  }

  setMenuSvgCirclePosition() {
    this.marginRight = 16 + 28 / 2; // center to svg icon
    this.marginTop = 16 + 22 / 2;
    this.positionX = window.innerWidth - this.marginRight;
    $("#menu_clip_path circle").attr("cx", this.positionX);
    $("#menu_clip_path circle").attr("cy", this.marginTop);
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
    if (this.isOpen) {
      TweenMax.to(this.menuClipPath, 0.5, { attr: { r: 0 } });
    } else {
      TweenMax.to(this.menuClipPath, 0.5, { attr: { r: 2000 } });
    }
    this.isOpen = !this.isOpen;
  }
}

export default new Menu();
