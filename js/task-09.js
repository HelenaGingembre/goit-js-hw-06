'use strict';
//Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change - color и 
//выводит значение цвета в span.color.

const refs = {
  bodyBackground: document.querySelector('body'),
  changeColorBtn: document.querySelector('.change-color'),
  outputColor: document.querySelector('span.color'),
}

refs.changeColorBtn.addEventListener('click', onChahgeBackgroundBody);

function onChahgeBackgroundBody() {
  document.body.style.background = getRandomHexColor();
  let color = document.body.style.background
  onOutputColor(color);
}

function onOutputColor(color){
  refs.outputColor.textContent = color;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

