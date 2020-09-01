// importação obrigatória para o web-pack
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// importação dos componentes do frame
import { menuColapseSidebar, tab, scrollSpy, incrementNumbers } from './frame.js'
menuColapseSidebar();
tab();
scrollSpy();
incrementNumbers();

// My scripts
let button = document.querySelectorAll('button');
button.forEach( el => {
  el.addEventListener('click', function(e) {
    e.preventDefault();
  })
})