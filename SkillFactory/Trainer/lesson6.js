// Напишите функцию match, которая принимает 2 строки и возвращает true,
// если эти строки равны без учета регистра. Например, match('hEllO', 'HELLo')
// должен вернуть true.

const match = (str1, str2) => {
  let result = true;
  if (str1.toUpperCase() !== str2.toUpperCase()) {
    result = false;
  }
  console.log(result);
};

match('hEllO', 'HELLo');

// На сайте Reddit ссылки на разделы (сабреддиты) формируются следующим образом:
// https://reddit.com/r/название_раздела/. Напишите функцию, которая принимает ссылку
// на раздел и возвращает название раздела.

// Напишите функцию reverseAndNegate(arr), которая принимает массив чисел и
// возвращает перевернутый отрицательный массив.

const reverseAndNegate = (arr) => {
  console.log(arr.reverse().map((value) => -value));
};

reverseAndNegate([1, -2, 5, 4]);

// Напишите функцию, которая принимает массив чисел и сначала к каждому чётному числу
// прибавляет 4, у каждого нечётного отнимает 2, потом убирает из массива числа,
// делящиеся на 13 без остатка и возвращает сумму оставшихся чисел.

const calculate = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    if (element % 2 === 0) {
      element += 4;
    } else {
      element -= 2;
    }

    if (element % 13 === 0) {
      const index = arr.indexOf(element);
      arr.splice(index, 1);
    }
  });
  console.log(sum);
};

calculate([15, 2, 3, 5, 6]);
