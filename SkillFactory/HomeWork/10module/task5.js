// Дан произвольный массив. Необходимо вывести количество элементов массива,
// затем перебрать его и вывести в консоль каждый элемент массива.

let array = [];
let x = getRandomNumber();

function getRandomNumber(x) {
  return (x = Math.ceil(Math.random() * 10));
}

for (let i = 0; i < x; i++) {
  array[i] = getRandomNumber();
}

console.log(`Количество элементов массива - ${x}`);

for (let i = 0; i < array.length; i++) {
  console.log(`${i + 1}-й элемент массива = ${array[i]}`);
}
