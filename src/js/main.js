import Items from './models/Items';
import * as itemView from './views/itemView';
import { elements } from './views/base';

const state = {}
state.items = new Items;
window.state = state;

/**
 * ITEM CONTROLLER
 */
const itemController = (curItem) => {
  // Determine item type
  let type = curItem.dataset.item;
  // get items from form fields
  let items = state.items.getItem(curItem, type);
  // Create item object and add to all items array;
  let itemObj = state.items.add(items, type);
  itemView.renderPageItem(itemObj);
}



// listen for add item buttons on the calculator
elements.calcForms.forEach(el => {
  el.addEventListener('submit', e => {
    e.preventDefault();
    itemController(e.target);
  });
});