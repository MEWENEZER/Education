// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат
// true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах,
// а обо всех. Проверить, все ли элементы в массиве одинаковые.

let array = [];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// рандомный массив заполняемый от 1 включительно до 2 включительно
for (let i = 0; i < 5; i++) {
  array[i] = getRandomNumber(1, 2);
}

console.log(array);

// не знаю как решить :(

let x = typeof array[0];

let theSame = array.every((value) => {
  return typeof value == x;
});

console.log(theSame);
