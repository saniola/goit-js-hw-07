document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelector('#categories');
  const items = categories.querySelectorAll('.item');

  console.log(`Number of categories: ${items.length}`);

  items.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('ul li').length;
    console.log(`Category: ${categoryName}\nElements: ${elementsCount}`);
  });
});
