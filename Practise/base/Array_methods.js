// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

let camelize = (str) => {
  let decision = str.split('-').join('');
  console.log(decision);
};

camelize('background-color-NUM-2');

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

let filterRange = (arr, a, b) => {
  const newArray = arr.filter((value) => value >= a && value <= b);
  console.log(newArray);
};

filterRange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 7);

//

function MultiplierFabric() {
  this._counter = 1;
}
MultiplierFabric.prototype.getMultiplier = function () {
  this._counter += 1;
  return (x) => this._counter * x;
};

const multiplierFabric = new MultiplierFabric();
const multiplier1 = multiplierFabric.getMultiplier();
const multiplier2 = multiplierFabric.getMultiplier();
console.log(multiplier1(1));
console.log(multiplier1(2));
console.log(multiplier2(3));
console.log(multiplier2(4));
