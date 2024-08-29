const ListAll = document.querySelectorAll("li.item");
console.log(`Number of categories: ${ListAll.length}`);

ListAll.forEach(item => {const h2 = item.querySelector("h2").textContent;

const elements = item.querySelectorAll("ul>li");

console.log(`Category: ${h2}`);
console.log(`Elements: ${elements.length}`);
});  

document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        item.style.border = '2px solid #F6F6FE';
        item.style.padding = '16px';
        item.style.marginBottom = '16px';
        item.style.width = '392px';
        item.style.background = '#F6F6FE';
        item.style.list = 'none';

    });
    
  
    const listItems = ul.querySelectorAll('li');
    listItems.forEach(li => {
        li.style.border = '1px solid #000';
    });

    
})

