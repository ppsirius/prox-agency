import '../scss/main.scss';

import FullPage from './fullPage';
import Menu from './menu';

window.addEventListener('load', () => {
  FullPage.init();
  Menu.init();
});