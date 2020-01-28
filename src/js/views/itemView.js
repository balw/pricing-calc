import { elements } from './base';

export const renderPageItem = item => {
  const markup = `
  <div class="results-item" data-itemResult="${item.pageName[0]}">
    <div class="results-header">
      <h3>${item.pageName[0]}</h3>
      <button class="btn btn-delete">remove item <i class="fas fa-times"></i></button>
    </div>
    <ul>
      <li><span>Content</span>: ${item.content[0]}</li>
      <li><span>Stock Images</span>: ${item.images[0]}</li>
      <li><span>Layout</span>: ${item.layout[0]}</li>
    </ul>
  </div>
  `;
  elements.pageResults.insertAdjacentHTML('afterbegin', markup);
};