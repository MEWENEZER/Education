/* 

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, 
кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода 
(элемент с классом chat-form-input) и нажать кнопку «Отправить» 
(отправляет данные из формы с классом chat-form).
    
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком 
(элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.


*/

let chat = document.querySelector('.chat');

let chatContent = chat.querySelector('.chat-content'); // контейнер сообщения

let chatForm = chat.querySelector('.chat-form'); // форма
let chatFormInput = chatForm.querySelector('.chat-form-input');

let chatTemplate = document.querySelector('#message-template').content;
let newItemTemplate = chatTemplate.querySelector('.chat-message');

let addCheckHandler = function (item) {
  let deleteButton = item.querySelector('.chat-message-button');
  deleteButton.addEventListener('click', function () {
    item.remove();
  });
};

chatForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  // значение input
  let inputTextContent = chatFormInput.value;
  // клонирование темплейта
  let completeMesage = newItemTemplate.cloneNode(true);
  let message = completeMesage.querySelector('.chat-message-text');
  message.textContent = inputTextContent;

  // добавление готового темплейта на сайт
  chatContent.appendChild(completeMesage);
  // обнуление input
  chatFormInput.value = '';

  addCheckHandler(completeMesage);
});
