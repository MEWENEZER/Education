// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну,
// если все элементы четные, если бы хотя бы один элемент не четный, то false.

let array = [];

function randomNumber() {
  let x = Math.floor(Math.random() * 10);
  return x;
}

for (let i = 0; i < randomNumber(); i++) {
  array[i] = randomNumber();
}

console.log(array);

const isEveryEvenOdd = array.every((value) => {
  return value % 2 == 0;
});

console.log(isEveryEvenOdd);

// Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну,
// если хотя бы один элемент нечетный, если все четные, то false.

let isEvenOdd = (x) => {
  return x.some((value) => {
    return value % 2 !== 0;
  });
};

console.log(isEvenOdd(array));

// Сделай функцию, которая принимает массив любых целых чисел, которая возращает новый массив,
// где все элементы кратны пяти. ([1,2,5,12,15,21] вернет [5,15])

let newArray = [1, -5, 9, 15];

let newArrayFunction = (x) => {
  const newArray = x.filter((value) => value % 5 == 0 && value !== 0);

  console.log(newArray);
};

newArrayFunction(newArray);

// Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает
// среднее арифметическое, (округлить результат до десятых) получаем из массива 1 значение

let isAverage = (x) => {
  const average = x.reduce(
    (total, current, array) => (total + current) / array
  );
  console.log(Math.floor(average));
};
isAverage(newArray);
