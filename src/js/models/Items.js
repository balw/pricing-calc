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

  add(items) {
    const pageItem  = {};
    items.forEach(item => {
      const key = item.dataset.itemkey;
      pageItem[key] = item.value;
    });
    this.allItems.pages.push(pageItem);
  }
}