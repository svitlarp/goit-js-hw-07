const catecories = document.querySelectorAll("#categories .item");
console.log(catecories);
console.log(`Number of Categories: ${catecories.length}`);

catecories.forEach(category => {
    const title = category.querySelector("h2");
    const items = category.querySelectorAll("ul li");
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${items.length}`);
});

