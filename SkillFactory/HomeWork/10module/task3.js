// Дана строка. Необходимо вывести в консоль перевёрнутый вариант.
// Например, "Hello" -> "olleH".

let string = 'Hello!';

function reverseString(string) {
  return string.split('').reverse().join('');
}

console.log(reverseString(string));
