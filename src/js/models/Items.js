// allItems - []
// allItems.pages - []
// allItems.pages[0] = {}

// pass into results the section


export default class Items {
  constructor() {
    this.allItems = [];
    this.allItems.pages = [];
    this.allItems.extras = [];
  }

  add(items, type) {
    console.log(type);
    if (type === 'page') {
      let pageItem = {};
      items.forEach(item => {
        pageItem[item.dataset.itemkey] = item.value;
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