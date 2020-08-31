// importação obrigatória para o web-pack
import 'core-js/stable'
import 'regenerator-runtime/runtime'

// importação dos componentes do frame
import { carousel, menuColapseSidebar, tab, scrollUp } from './frame.js'
carousel();
menuColapseSidebar();
tab();
scrollUp();

// My scripts
const links = document.querySelectorAll('.menu__links a');

links.forEach(el => {
  const href = el.getAttribute('href');
  const element = document.querySelector(href);
  const height = element.offsetTop;
  
  window.addEventListener('scroll', function() {
    if (height <= window.scrollY) {
      el.setAttribute('data-active', 'active');
    } else {
      el.removeAttribute('data-active');
    }

    const active = document.querySelectorAll('.menu__links a[data-active]');
   
    active.forEach((el, i) => {
      if (i == (active.length - 1)) {
        el.setAttribute('data-correct', 'active');
      } else {
        el.removeAttribute('data-correct');
      }
    })
  })

  
})