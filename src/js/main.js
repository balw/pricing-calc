import Items from './models/Items';
import { elements } from './views/base';

const state = {}
state.items = new Items;
window.state = state;

/**
 * ITEM CONTROLLER
 */
const itemController = (curItem) => {
  // Determine item type
  if (curItem.dataset.item === 'page') {
    // Get the item values
    const itemsArr = [];
    [...curItem.elements].forEach(el => {
      if (el.type === 'text' || el.type === 'select-one' || el.checked) {
        itemsArr.push(el);
      }
    });
    state.items.add(itemsArr);
  } else if (curItem.dataset.item === 'extras') {
    console.log(curItem.elements);
  }
}



// listen for add item buttons on the calculator
elements.calcForms.forEach(el => {
  el.addEventListener('submit', e => {
    e.preventDefault();
    itemController(e.target);
  });
});