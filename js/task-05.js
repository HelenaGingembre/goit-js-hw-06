'use strict';
// Напиши скрипт который, при наборе текста в инпуте 
//input#name - input(событие input), подставляет его 
//текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

const refs = {
    inputEl: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
}

 const onChangeInput = (inputEvent) =>{
     refs.outputEl.textContent = inputEvent.currentTarget.value === ''
         ? 'Anonymus'
         : inputEvent.currentTarget.value;
}

refs.inputEl.addEventListener('input', onChangeInput);
