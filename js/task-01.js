const allCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategoriesEl.length}`);

const categoriesArray = [...allCategoriesEl]
  .map(
    categories => `Category: ${categories.children[0].textContent}
Elements: ${categories.children[1].children.length}`
  )
  .join('\n');
console.log(categoriesArray);
