'use strict';
//скрипт управления формой логина.
// 3. Если в форме есть незаполненные поля, выводи alert с
// предупреждением о том, что все поля должны быть заполнены.
//4. Если пользователь заполнил все поля и отправил форму,
// собери значения полей в обьект, где имя поля будет именем 
// свойства, а значение поля - значением свойства.
// 5. Выведи обьект с введенными данными в консоль
 // и очисти значения полей формы методом reset.

const form = document.querySelector('.login-form');

// 1. Обработка отправки формы form.login-form должна быть по cобытию submit.
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    //2.При отправке формы страница не должна перезагружаться
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === '' || password === '') {
        return alert('Увага! Усі поля повинні бути заповнені.');
    }
    const formData =      {
        email: email,
        password: password,
    };
   
    console.log(formData);
    event.currentTarget.reset(); // и очисти значения полей формы методом reset.
}

