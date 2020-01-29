import Items from './models/Items';
import * as itemView from './views/itemView';
import { elements } from './views/base';

const state = {}
state.items = new Items;
window.state = state;

/**
 * ITEM CONTROLLER
 */
const addItemController = (curItem) => {
  // Determine item type
  let type = curItem.dataset.item;
  // get items from form fields
  let items = state.items.getItem(curItem, type);
  // Create item object and add to all items array;
  let itemObj = state.items.add(items, type);
  itemView.renderPageItem(itemObj);
}



// Event listeners
elements.calcForms.forEach(el => {
  el.addEventListener('submit', e => {
    e.preventDefault();
    addItemController(e.target);
  });
});

elements.removeItemBtn.forEach(el => {
  el.addEventListener('click', e => {
    
    // remove from dom
    el.parentNode.parentNode.remove();
  });
});