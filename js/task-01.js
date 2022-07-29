//Посчитает и выведет в консоль количество категорий в ul#categories,
// то есть элементов li.item.

const categoriesUlEl = document.querySelectorAll("li.item");
//console.log(categoriesUlEl);
const quantityCategoriesUl = () => {
    console.log(`Number of categories: ${categoriesUlEl.length}`);
 }

// Для каждого элемента li.item в списке ul#categories, 

const consoleInfoElemCategory = () => {

    categoriesUlEl.forEach(category => {
        //найдет и выведет в консоль текст заголовка(textContent) элемента(тега < h2 >) ==firstElementChild
        console.log(`Category: ${category.firstElementChild.textContent}`);
        //количество(length) элементов в категории(всех вложенных в него < li >)
       console.log(`Elements: ${category.lastElementChild.children.length}`);
        
        /*const ul = category.lastElementChild;
        console.log(ul);
        console.log(ul.children);
        const count = ul.children.length;
         console.log(count);*/
    })
};

quantityCategoriesUl();
consoleInfoElemCategory();