import $ from 'jquery';
import anime from 'animejs'

class Menu {
  constructort() {
    this.isOpen = false;
  }

  init() {
    this.marginRight = 16;
    this.marginTop = 16;
    this.positionX = window.innerWidth - this.marginRight;

    $('#menu_clip_path circle').attr('cx', this.positionX);
    $('#menu_clip_path circle').attr('cy', this.marginTop);

    document.querySelector('.menu__button').addEventListener('click', this.tooggleMenu);
  }

  tooggleMenu() {
    if(this.isOpen) {
      $('#menu_clip_path circle').attr('r', '0');
    } else {
      $('#menu_clip_path circle').attr('r', '2000');
    }

    this.isOpen = !this.isOpen;
  }
}

export default new Menu();