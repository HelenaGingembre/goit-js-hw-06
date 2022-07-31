 'use strict';
//В HTML есть пустой список ul#ingredients.
//Напиши скрипт, который для каждого элемента массива ingredients:

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const createElementList = (text) => {
      //1) Создаст отдельный элемент <li>.
      const itemEl = document.createElement("li");
     //2) Добавит название ингредиента как его текстовое содержимое.
      itemEl.textContent = text;
      //3) Добавит элементу класс item.
      itemEl.classList.add("item");
      //console.log(itemEl);
      return itemEl;
}
//4) После чего вставит все <li> за одну операцию в список ul#ingredients.
list.prepend(...ingredients.map(ingredient => createElementList(ingredient)));



