import Items from './models/Items';
import * as itemView from './views/itemView';
import { elements } from './views/base';

const state = {}
state.items = new Items;
window.state = state;

/**
 * ITEM CONTROLLER
 */
const addPageItemController = (curItem) => {
  // Determine item type
  let type = curItem.dataset.item;
  // get items from form fields
  let items = state.items.getItem(curItem, type);
  // Create item object and add to data strucutre
  let itemObj = state.items.add(items, type);
  itemView.renderPageItem(itemObj);
}

const deletePageItemController = (curItem) => {
  const itemID = curItem.target.parentNode.parentNode.id;
  // let type;
  // if (curItem.target.parentNode.parentNode.parentNode.className === 'page-results results-section') {
  //   type = 'page';
  // } else if (curItem.target.parentNode.parentNode.parentNode.className === 'bespoke-results results-section') {
  //   type = 'bespoke';
  // }

  if (itemID) {
    //remove from sata structure 
    state.items.remove(itemID);
    // remove from the dom
    itemView.deletePageItem(itemID);
  }
}



// Event listeners
elements.calcForms.forEach(el => {
  el.addEventListener('submit', e => {
    e.preventDefault();
    addPageItemController(e.target);
  });
});

elements.results.addEventListener('click', deletePageItemController);

