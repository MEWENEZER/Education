// task 1
// Напишите программу, которая спрашивает у пользователя его имя и фамилию
// с помощью prompt и отвечает: Привет, {имя} {фамилия}! с помощью alert.

let firstName = prompt('Введите своё Имя:');
let lastName = prompt('Введите вашу Фамилию:');

alert(`Привет, ${firstName} ${lastName}!`);

// task 2
// Напишите программу, которая переводит температуру по Цельсию в температуру по Фаренгейту.
// Она должна спросить у пользователя количество градусов по Цельсию с помощью prompt и ответить:
// {X} градусов по Цельсию равны {Y} градусам по Фаренгейту.

let tempCelsius = prompt('Введите температуру в Цельсиях:');
let tempFahrenheit = (9 / 5) * tempCelsius + 32;

alert(
  `Температура ${tempCelsius} по Цельсию будет равна ${tempFahrenheit} по Фаренгейту.`
);

// task 3
// Перепишите данную математическую формулу, используя JavaScript.
// Программа должна запрашивать с помощью prompt значение X и выдавать соответсвующее значение
// Y в качестве ответа. Обратите внимание на приоритет операций (важно правильно расставить скобки).

let x = prompt('Введите значение X: ');

let y =
  (4 * Math.pow(x, 2) + 18 - 23 * x) /
    ((5 / 9) * x + 18 * (Math.pow(x, 3) / 33) * x) +
  x * (15 / 12);

alert(`Значение Y = ${y.toFixed(4)}`);

// task 4

a = 12;
b = 'number';
c = false;
d = null;
e = undefined;
f = 123.34;
g = '1' + 1;
h = 15 / 0;
i = -'5';
j = 5 == '5';

at = typeof a === 'number'; // true
bt = typeof b === 'string'; // false, а нужно чтобы все были true
ct = typeof c === 'boolean';
dt = typeof d === 'object';
et = typeof e === 'undefined';
ft = typeof f === 'number';
gt = typeof g === 'string';
ht = typeof h === 'number';
it = typeof i === 'number';
jt = typeof j === 'boolean';

alert(at && bt && ct && dt && et && ft && gt && ht && it && jt);
