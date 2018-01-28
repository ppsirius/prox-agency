import $ from 'jquery';
import slick from "slick-carousel";

class Carousel {

  static init() {
    $(".slide").slick({

    });
  }

  static recalculatePosition() {
    $('.slide').slick('setPosition');
  }
}

export default Carousel;
