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

  add(items, type) {
    if (type === 'page') {
      let pageItem = {};
      items.forEach(item => {
        pageItem[item.dataset.itemkey] = item.value.split('|');
      });
      this.allItems.pages.push(pageItem);
    } else if (type === 'extra') {
      let extraItem = {};
      items.forEach(item => {
        extraItem[item.dataset.itemkey] = item.value;
      });
      this.allItems.extras.push(extraItem);
    }
  }
}