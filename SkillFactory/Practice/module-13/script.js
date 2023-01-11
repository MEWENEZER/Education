// Напишите функцию pick, которая принимает на вход массив с объектами и название поля
// и возвращает новый массив со значениями этого поля, если оно присутствует в объекте.
// Если соответствующего поля нет, следует вернуть undefined.

const arr = [{ a: 1, b: 2 }, { a: 'value' }, { o: null }, { a: true, m: 123 }];

function pick(arr, key) {
  return arr.map((item) => item[key]);
}

// console.log(pick(arr, 'a')); // [1, 'value', undefined, true]

// Напишите функцию createCounter, которая принимает число и
// возвращает функцию-счётчик, начинающую отсчет с этого числа.

function createCounter(index) {
  setInterval(() => console.log(index++), 1000);
}

// createCounter(5);
