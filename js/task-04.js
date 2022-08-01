//Счетчик состоит из спана и кнопок, которые, при клике, 
//должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее
// значение счетчика и инициализируй её значением 0.
const refs = {
    counterValue: 0,
    decrementBtn: document.querySelector('button[data-action="decrement"]'),
    incrementBtn: document.querySelector('button[data-action="increment"]'),
};    

// Обновляй интерфейс новым значением переменной counterValue.
function updateCounterValue() {
    document.querySelector('#value').textContent = refs.counterValue;
};

// Добавь слушатели кликов на кнопки, внутри которых увеличивай 
//или уменьшай значение счтетчика.

function onDecrementBtnClick() {
    refs.counterValue += 1;
    updateCounterValue();
};

function onIncrementBtnClick() {
    refs.counterValue -= 1;
    updateCounterValue();
};

refs.incrementBtn.addEventListener("click", onDecrementBtnClick);
refs.decrementBtn.addEventListener("click", onIncrementBtnClick);
