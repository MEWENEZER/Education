// task 1
let str = 'Hello!';

function reverseStr(str) {
  return str.split('').reverse().join('');
}

console.log(reverseStr(str));

// task 2
let number;

function randomNumber(number) {
  return Math.floor(Math.random(0, 101) * 100);
}

console.log(randomNumber(number));

// task 3

let array = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log(Array.isArray(array));

console.log(sum);

// task 5
// Дан произвольный массив. Необходимо вывести количество элементов массива,
// затем перебрать его и вывести в консоль каждый элемент массива.

console.log(`\n<--- Task 5 --->\n`);

let someArray = [];

for (let i = 0; i < 10; i++) {
  someArray[i] = randomNumber();
}

console.log(`Произвольный массив:\n${someArray}\n`);

console.log(`Длина массива: ${someArray.length}\n`);

for (let i = 0; i < someArray.length; i++) {
  console.log(`${i}-й элемент массива: ${someArray[i]}`);
}

console.log(`\n<--- Task Education --->\n`);

someArray.forEach((value, index, array) => {
  console.log(value + ' - ' + index);
});

// task 6
// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат
// true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех.
// Проверить, все ли элементы в массиве одинаковые.

console.log(`\n<--- Task 6 --->\n`);

let x = typeof someArray[0];
let theSame = someArray.every((value) => {
  return typeof value == x;
});

console.log(theSame);

// task 7
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.

console.log(`\n<--- Task 7 --->\n`);

let oddItems = 0; // нечетный
let evenItem = 0; // четный

for (let i = 0; i < someArray.length; i++) {
  if (someArray[i] % 2 == 0) {
    evenItem++;
  } else if (someArray[i] % 2 !== 0) {
    oddItems++;
  } else {
    console.log('Нечто');
  }
}

console.log(`Нечетных - ${oddItems}\nЧетных - ${evenItem}`);
