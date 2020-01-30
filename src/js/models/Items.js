// allItems - []
// allItems.pages - [] - type level
// allItems.pages[0] = {content, images, layout, pagename} - item level
// allItems.pages[0].content = [] - item detail - level
// ***********
// allItems.pages[0].content[0] = product name
// allItems.pages[0].content[1] = price
//************
// allItems.extras[0].extraDetails = details / price level for extras


export default class Items {
  constructor() {
    this.allItems = [];
    this.allItems.pages = [];
    this.allItems.extras = [];
  }

  getItem(curItem, type) {
    if (type === 'page' || type === 'extra') {
      // Get item values and store in an array
      const itemsArr = [];
      [...curItem.elements].forEach(el => {
        if (el.type === 'text' || el.type === 'select-one' || el.checked || el.type === 'number' || el.id === 'extra-notes') {
          itemsArr.push(el);
        }
      });
      return itemsArr;
    }
  }

  add(items, type) {
    if (type === 'page') {
      // store item
      let pageItem = {};
      items.forEach(item => {
        pageItem[item.dataset.itemkey] = item.value.split('|');
      });

      // sum the item price
      let itemPrices = [];
      Object.values(pageItem).forEach(el => {
        const cur = parseInt(el[1], 10);
        if(!isNaN(cur)) {
          itemPrices.push(cur);
        }
      });

      const reducer = (accum, el) => accum + el;
      pageItem.price = itemPrices.reduce(reducer);
      this.allItems.pages.push(pageItem);

      // create item id
      let id;
      if (this.allItems.pages.length > 0) {
        id = (this.allItems.pages.length -1) + 1;
      } else {
        id = 0;
      }

      pageItem.id = id;
      return pageItem;

     }
     //else if (type === 'extra') {
    //   let extraItem = {};
    //   items.forEach(item => {
    //     extraItem[item.dataset.itemkey] = item.value;
    //   });

    //   this.allItems.extras.push(extraItem);
    //   return extraItem;
    // }
  }

  remove(id) {
    const index = this.allItems.pages.findIndex(el => el.id === id);
    this.allItems.pages.splice(index, 1);
  }

  calc() {
    let total = 0;
    this.allItems.pages.forEach(el => { 
      total += el.price;
    });
    this.allItems.price = total;
  }
}