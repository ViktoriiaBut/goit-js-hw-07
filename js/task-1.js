const ListAll = document.querySelectorAll("li.item");
console.log(`Number of categories: ${ListAll.length}`);

ListAll.forEach(item => {const h2 = item.querySelector("h2").textContent;

const elements = item.querySelectorAll("ul>li");

console.log(`Category: ${h2}`);
console.log(`Elements: ${elements.length}`);
});  