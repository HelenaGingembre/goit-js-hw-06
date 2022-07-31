//Напиши скрипт для создания галереи изображений 
//по массиву данных.В HTML есть список ul.gallery.

const images = [
  {
    url: 'https://travel-lovers.org/wp-content/uploads/2017/09/PlaceSaintSophie.jpg',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://travel-lovers.org/wp-content/uploads/2017/03/kamenets.jpg',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://travel-lovers.org/wp-content/uploads/2018/01/kiev_handmadechocolate.jpg',
    alt: 'Group of Horses Running',
  },
];

//Используй массив объектов images для создания элементов <img> вложенных в <li>.



const listGallery = document.querySelector(".gallery");

//1- Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().
const markup = images
  .map((image) => `<li class="grid__item">
  <img class="grid__img" src=${image.url} alt=${image.alt}></li>`)
  .join("");

//2- Все элементы галереи должны добавляться в DOM за одну операцию вставки.
listGallery.insertAdjacentHTML("beforeend", markup);
listGallery.insertAdjacentHTML("beforebegin", "<h2 class='gallery__title'>NEW Gallery</h2>");

//3- Добавь минимальное оформление галереи флексбоксами или гридами через 
//CSS классы.
listGallery.classList.add("grid");


/*
listGallery.style.display = "flex";
listGallery.style.flexWrap = "wrap";
listGallery.style.listStyle = "none";*/