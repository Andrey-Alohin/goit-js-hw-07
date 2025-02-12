const categories = document.querySelectorAll(".item");
function numberOfCategories () {
    return `Number of categories: ${categories.length}`;
};
console.log(numberOfCategories());
function nameOfCategories () {
    categories.forEach(item => {
        const header = item.querySelector("h2");
        console.log(`Category: ${header.textContent}`);
        const itemCategories = item.querySelectorAll("li");
        console.log(`Elements: ${itemCategories.length}`);
    });
};
nameOfCategories();