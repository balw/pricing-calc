import Results from './models/Results';
import { elements } from './views/base';

const state = {}
state.results = new Results;
window.state = state;

/**
 * ITEM CONTROLLER
 */
const itemController = (cur) => {
  // Determine item type
  if (cur.dataset.item === 'page') {
    console.log('page');
  } else if (cur.dataset.item === 'extras') {
    console.log('extras');
  }
}

// listen for add item buttons on the calculator
elements.calcForms.forEach(el => {
  el.addEventListener('submit', e => {
    e.preventDefault();
    itemController(e.target);
  });
});