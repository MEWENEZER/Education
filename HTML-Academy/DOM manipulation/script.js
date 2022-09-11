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

const chat = document.querySelector('.chat');
const chatForm = chat.querySelector('.chat-form');

let chatContent = chat.querySelector('.chat-content'); // контейнер сообщения

let chatFormInput = chatForm.querySelector('.chat-form-input'); // ввод текста
let chatFormButton = chatForm.querySelector('.chat-form-button'); // кнопка отправить

let chatTemplate = document.querySelector('#message-template').content;
let deleteButton = chatTemplate.querySelector('.chat-message-button');

let message = chatTemplate.querySelector('.chat-message-text');

chatForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  // значение imput
  let textContent = chatFormInput.value;
  // Передача значение input в сообщение
  message.textContent = textContent;
  let task = chatTemplate.cloneNode(true);
  chatContent.appendChild(task);
  chatFormInput.value = '';
});

deleteButton.addEventListener('click', () => {
  task.classList.add(visually - hidden);
  task.remove();
});
