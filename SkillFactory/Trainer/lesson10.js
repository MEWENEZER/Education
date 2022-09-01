var cardsData = [
  {
    inStock: true,
    imgUrl: 'https://up.htmlacademy.ru/assets/courses/219/gllacy/choco.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 310,
    isHit: true,
    specialOffer: 'Двойная порция сиропа бесплатно!',
  },
  {
    inStock: false,
    imgUrl: 'https://up.htmlacademy.ru/assets/courses/219/gllacy/lemon.jpg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: 125,
    isHit: false,
  },
  {
    inStock: true,
    imgUrl: 'https://up.htmlacademy.ru/assets/courses/219/gllacy/cowberry.jpg',
    text: 'Сливочное с брусничным джемом',
    price: 170,
    isHit: false,
  },
  {
    inStock: true,
    imgUrl: 'https://up.htmlacademy.ru/assets/courses/219/gllacy/cookie.jpg',
    text: 'Сливочное с кусочками печенья',
    price: 250,
    isHit: false,
  },
  {
    inStock: true,
    imgUrl:
      'https://up.htmlacademy.ru/assets/courses/219/gllacy/creme-brulee.jpg',
    text: 'Сливочное крем-брюле',
    price: 190,
    isHit: false,
  },
];

// функция создания карточек
let createCard = (good) => {
  let listItem = makeElement('li', 'good');

  let title = makeElement('h2', 'good__description', good.text);

  let picture = makeElement('img', 'good__image');
  picture.src = good.imgUrl;
  picture.alt = good.text;

  let price = makeElement('p', 'good__price', good.price);

  let availabilityClass = 'good--available';
  if (!good.inStock) {
    availabilityClass = 'good--unavailable';
  }
  // listItem.appendChild(availabilityClass);

  if (good.isHit) {
    listItem.classList.add('good--hit');
    let specialPrice = makeElement(
      'p',
      'good__special-offer',
      good.specialOffer
    );
    // listItem.appendChild(specialPrice);
  }

  return listItem;
};

let renderCards = (goods) => {
  let cardList = document.querySelector('.goods');

  let cardItem = createCard(goods[0]);
  cardList.appendChild(cardItem);
};

renderCards(cardsData);

let cardList = document.querySelector('.goods');

for (let i = 0; i < cardsData.length; i++) {
  let cardItem = createCard(cardsData[i]);
  cardList.appendChild(cardItem);
}

renderCards(cardsData);

/* Техническое задание

Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.

Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:

- inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
- imgUrl — ссылка на изображение товара.
- text — название продукта.
- price — цена.
- isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
- specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.

Вот пример вёрстки одной карточки в каталоге:

<ul class="goods">
  <li class="good">
    <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
    <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
    <p class="good__price">110₽/кг</p>
  </li>
  ...
</ul>

Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.

Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.

*/
