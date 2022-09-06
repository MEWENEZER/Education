let buttons = document.querySelectorAll('.key');
let display = document.querySelector('.display');

// очистка +
let clear = document.querySelector('.clear');
clear.onclick = function () {
  display.textContent = '';
};

// ввод +
for (let element of buttons) {
  element.onclick = function () {
    display.textContent += element.textContent;
  };
}

/*
Кнопки с буквами и «пробел» имеют класс key, а дисплей — класс display.

При клике на кнопку с буквой или пробелом текстовое содержимое этой кнопки должно добавляться
к текстовому содержимому дисплея.

Кнопка очистки имеет класс clear. При клике на неё весь текст внутри дисплея должен удаляться,
для этого в текстовое содержимое дисплея нужно записать пустую строку.
*/
