'use strict';

//Напиши скрипт создания и очистки коллекции элементов. Пользователь 
//вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить, 
//коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один 
//параметр - число.Функция создает столько < div >, сколько указано 
//в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего 
// на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
//Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
// тем самым удаляя все созданные элементы.

const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'), 
}
refs.boxes.style.display = 'flex';
refs.createBtn.addEventListener('click', onCreateBoxes);
refs.destroyBtn.addEventListener('click', onDestroyBoxes);

function onCreateBoxes() {
 
 const amount = Number(refs.input.value);
  CreateBoxes(amount);
}

function createBoxes(amount) {
  
  const divArray = [];
  const initialWidthDiv = 30;
  for (let i = 0; i < amount; i += 1){
    const newDivBoxes = document.createElement('div');
    divArray.push(newDivBoxes);
    newDivBoxes.style.width = `${initialWidthDiv + i * 10}px`;
    newDivBoxes.style.height = newDivBoxes.style.width;
    newDivBoxes.style.backgroundColor = getRandomHexColor();
  };

    refs.boxes.append(...divArray);
  // refs.boxes.insertAdjacentHTML('afterbegin', ...divArray);
}

function onDestroyBoxes() {
  refs.boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

