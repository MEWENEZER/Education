// // task 1
// // Напишите программу, которая спрашивает у пользователя его имя и фамилию
// // с помощью prompt и отвечает: Привет, {имя} {фамилия}! с помощью alert.

// let firstName = prompt('Введите своё Имя:');
// let lastName = prompt('Введите вашу Фамилию:');

// alert(`Привет, ${firstName} ${lastName}!`);

// // task 2
// // Напишите программу, которая переводит температуру по Цельсию в температуру по Фаренгейту.
// // Она должна спросить у пользователя количество градусов по Цельсию с помощью prompt и ответить:
// // {X} градусов по Цельсию равны {Y} градусам по Фаренгейту.

// let tempCelsius = prompt('Введите температуру в Цельсиях:');
// let tempFahrenheit = (9 / 5) * tempCelsius + 32;

// alert(
//   `Температура ${tempCelsius} по Цельсию будет равна ${tempFahrenheit} по Фаренгейту.`
// );

// // task 3
// // Перепишите данную математическую формулу, используя JavaScript.
// // Программа должна запрашивать с помощью prompt значение X и выдавать соответсвующее значение
// // Y в качестве ответа. Обратите внимание на приоритет операций (важно правильно расставить скобки).

// let x = prompt('Введите значение X: ');

// let y =
//   (4 * Math.pow(x, 2) + 18 - 23 * x) /
//     ((5 / 9) * x + 18 * (Math.pow(x, 3) / 33) * x) +
//   x * (15 / 12);

// alert(`Значение Y = ${y.toFixed(4)}`);

// // task 4

// a = 12;
// b = 'number';
// c = false;
// d = null;
// e = undefined;
// f = 123.34;
// g = '1' + 1;
// h = 15 / 0;
// i = -'5';
// j = 5 == '5';

// at = typeof a === 'number'; // true
// bt = typeof b === 'string'; // false, а нужно чтобы все были true
// ct = typeof c === 'boolean';
// dt = typeof d === 'object';
// et = typeof e === 'undefined';
// ft = typeof f === 'number';
// gt = typeof g === 'string';
// ht = typeof h === 'number';
// it = typeof i === 'number';
// jt = typeof j === 'boolean';

// alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);

// // task 5
// // Напишите программу, которая запрашивает у пользователя три числа: Катет A, Катет B, и Гипотенуза C.
// // Программа проверяет по теореме Пифагора эти стороны треугольника и пишет в консоль "Это прямоугольный треугольник!"
// // или "Это не прямоугольный треугольник!". Используйте if/else для проверки условия.

// let firstNumber = prompt('Введите Катет А:');
// let secondNumber = prompt('Введите Катет В:');
// let thirdNumber = prompt('Введите Гипотенузу С:');

// let theorem =
//   Math.pow(firstNumber, 2) +
//   Math.pow(secondNumber, 2) -
//   Math.pow(thirdNumber, 2);

// if (theorem === 0) {
//   alert('Это прямоугольный треугольник!');
// } else {
//   alert('Это не прямоугольный треугольник!');
// }

// Напишите программу, которая выводит в консоль сначала нечетные числа от 0 до 5, а потом четные числа от 5 до 10.

// console.log(`\n<--- task --->\n`);

// for (let i = 0; i <= 5; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for (let i = 5; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// Напишите программу, которая много раз запрашивает у пользователя число,
// пока он не введет 0 — тогда выводится сумма этих чисел.

let sum = 0;
let x;

do {
  x = prompt('Enter a number');
  sum += +x;
} while (x != 0);

alert(sum);

// Напишите программу, которая говорит пользователю "Введите 10",
// пока он не введёт 10. Затем говорит "Введите 20", потом 40 и т.д.
// Если пользователь вводит другое число, нужно спросить его ещё раз,
// пока он не введёт нужное. Когда пользователь введёт больше 100,
// напишите "Спасибо!" и остановите программу.

let neededNumber = 10;
let currentNumber;

do {
  while (currentNumber != neededNumber) {
    currentNumber = prompt('Enter number' + neededNumber);
  }
  neededNumber *= 2;
} while (currentNumber < 100);

alert('Thanks a lot!');

// Напишите функцию countDown(n), которая получает число {n}
// в качестве аргумента и печатает в консоль обратный отсчет,
// начиная с этого числа. Например, countDown(3) напечатает: 3 2 1.

console.log(`\n<--- task --->\n`);

function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }

  // while (n != 0) {
  //   console.log(n);
  //   n--;
  // }
}

countDown(Math.floor(Math.random() * 100));

// Напишите функцию getPercents(percent, number),
// которая возвращает {percent} процентов от {number}.

console.log(`\n<--- task --->\n`);

function getPercents(percent, number) {
  console.log((number * percent) / 100);
}

getPercents(30, 200);

// Напишите функцию repeatWord(word, count), которая принимает слово
// и количество раз для его повторения. Например, если вызвать
// repeatWord('слово', 3) функция напечатает "слово1, слово2, слово3"
// на одной строке.

console.log(`\n<--- task --->\n`);

function repeatWord(word, count) {
  let str = '';
  for (let i = 1; i <= count; i++) {
    str += word + i + ', ';
  }
  console.log(str);
}

repeatWord('слово', 5);

// Напишите функцию getMonth(n), которая принимает номер месяца
// и возвращает его название. Например, getMonth(12) ⇒ 'декабрь'.
// Используйте if/else.

console.log(`\n<--- task --->\n`);

function getMonth(n) {
  if (n == 1) {
    return 'Январь';
  } else if (n == 2) {
    return 'Февраль';
  } else if (n == 3) {
    return 'Март';
  } else if (n == 4) {
    return 'Апрель';
  } else if (n == 5) {
    return 'Май';
  } else if (n == 6) {
    return 'Июнь';
  } else if (n == 7) {
    return 'Июль';
  } else if (n == 8) {
    return 'Август';
  } else if (n == 9) {
    return 'Сентябрь';
  } else if (n == 10) {
    return 'Октябрь';
  } else if (n == 11) {
    return 'Ноябрь';
  } else if (n == 12) {
    return 'Декабрь';
  } else {
    return 'Ошибка, повторите ввод';
  }
}

console.log(getMonth(11));
