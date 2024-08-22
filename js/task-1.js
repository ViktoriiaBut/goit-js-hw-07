const ListAll = document.querySelectorAll("li.item");
console.log(`Number of categories: ${ListAll.length}`);

ListAll.forEach(item => {const title = item.querySelector(".title").textContent;

const elements = item.querySelectorAll(".element li");

console.log(`Category: ${title}`);
console.log(`Elements: ${elements.length}`);
});  