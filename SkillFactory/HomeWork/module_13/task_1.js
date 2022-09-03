// Напишите функцию pick, которая принимает на вход массив с объектами и название поля и возвращает новый массив со значениями этого поля,
// если оно присутствует в объекте. Если соответствующего поля нет, следует вернуть undefined.

const arr = [{ a: 1, b: 2 }, { a: 'value' }, { o: null }, { a: true, m: 123 }];

let pick = (array, index) => {
  return array.map((item) => item[index]);
};

console.log(pick(arr, 'b'));

// Напишите функцию createCounter, которая принимает число и возвращает функцию-счётчик, начинающую отсчет с этого числа.

let createCounter = (number) => {
  setInterval(function () {
    for (let i = 0; i < number; i++) {
      console.log(number);
      number--;
    }
  }, 1000);
};

createCounter(4);

// Напишите функцию createMultiplier, которая:
// 1) принимает функцию и число;
// 2) возвращает функцию, которая, в свою очередь, возвращает результат умножения результата вызова функции-аргумента и числа-аргумента.

let createMultiplier = (func, number) => {
  return function multiply() {};
};
