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
  const type = curItem.dataset.item;
  if (type === 'page' || type === 'extra' ) {
    // Get item values and store in an array
    const itemsArr = [];
    [...curItem.elements].forEach(el => {
      if (el.type === 'text' || el.type === 'select-one' || el.checked || el.type === 'number' || el.id === 'extra-notes') {
        itemsArr.push(el);
      }
    });
    // Create item object and add to all items array;
    state.items.add(itemsArr, type);
  } else if (type === 'other') {
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