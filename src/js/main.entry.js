import '../scss/main.scss';

import FullPage from './fullPage';
import Menu from './menu';
import Contact from './contact';
import More from './more';

window.addEventListener('load', () => {
  FullPage.init();
  Menu.init();
  Contact.init();
  More.init();
});