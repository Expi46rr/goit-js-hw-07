const items = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const text = item.querySelector('h2').textContent;
  const count = item.querySelectorAll('ul li').length;

  console.log(`Category: ${text}`);
  console.log(`Elements: ${count}`);
});
