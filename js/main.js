
import fullPage from './fullPage';
window.addEventListener('load', init, false );

function init() {
  fullPage.initialize('.app', {
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
  });
}

