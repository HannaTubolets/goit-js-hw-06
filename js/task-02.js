const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listProductsEl = document.querySelector('#ingredients');
const productArrayEl = [];

ingredients.forEach(ingredient => {
  const item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredient;
  productArrayEl.push(item);
});

listProductsEl.append(...productArrayEl);



