import '../scss/main.scss';

import FullPage from './fullPage';
import Menu from './menu';
import Contact from './contact';
import More from './more';
import { TweenMax, Power2 } from 'gsap';


window.addEventListener('load', () => {
  FullPage.init();
  Menu.init();
  Contact.init();
  More.init();

  TweenMax.to(document.querySelector('body'), .5, {
    backgroundColor: 'rgba(4, 38, 95, 1)' ,
    ease: Power2.easeIn,
    onComplete: () => {
      TweenMax.to(document.querySelector('body'), .5, {
        opacity: 1,
        ease: Power2.easeIn,
      });
    }
  })
});