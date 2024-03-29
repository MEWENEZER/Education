// Реализуйте метод getHiddenCard(), который принимает на вход номер кредитки (состоящий из 16 цифр)
// в виде строки и возвращает его скрытую версию, которая может использоваться на сайте для отображения.
// Если исходная карта имела номер 2034399002125581, то скрытая версия выглядит так ****5581.
// Другими словами, функция заменяет первые 12 символов, на звездочки. Количество звездочек регулируется
// вторым необязательным параметром. Значение по умолчанию — 4.

// getHiddenCard("1234567812345678", 2); // "**5678"
// getHiddenCard("1234567812345678", 3); // "***5678"
// getHiddenCard('1234567812345678'); // "****5678"
// getHiddenCard('2034399002121100', 1); // "*1100"

const getHiddenCard = (creditCardNumber, hideCount = 4) => {
  return `${'*'.repeat(hideCount)}${creditCardNumber.slice(-4)}`;
};

// console.log(getHiddenCard('2034399002125581'));

const printNumbers = (initialNumber) => {
  while (initialNumber > 0) {
    console.log(initialNumber);
    initialNumber--;
  }

  console.log('finished!');
};

// printNumbers(5);

// Реализуйте функцию multiplyNumbersFromRange(), которая перемножает числа в указанном диапазоне включая границы диапазона.
// multiplyNumbersFromRange(1, 5); // 1 * 2 * 3 * 4 * 5 = 120
// multiplyNumbersFromRange(2, 3); // 2 * 3 = 6
// multiplyNumbersFromRange(6, 6); // 6"

function multiplyNumbersFromRange(start, end) {
  let sum = 1;
  let index = start;

  //   for (let i = start; i <= end; i++) {
  //     sum *= i;
  //   }

  while (index <= end) {
    sum *= index;
    index++;
  }

  return sum;
}

// console.log(multiplyNumbersFromRange(1, 3));

// Реализуйте функцию joinNumbersFromRange(), которая объединяет все числа из диапазона в строку:
// joinNumbersFromRange(1, 1); // '1'
// joinNumbersFromRange(2, 3); // '23'
// joinNumbersFromRange(5, 10); // '5678910'

function joinNumbersFromRange(start, end) {
  let str = '';

  for (let i = start; i <= end; i++) {
    str += i;
  }

  return str;
}

// console.log(joinNumbersFromRange(5, 10));

// Реализуйте функцию printReversedNameBySymbol(), которая печатает переданное слово посимвольно
// const name = 'Arya';
// printReversedNameBySymbol(name);
// // => 'a'
// // => 'y'
// // => 'r'
// // => 'A'

function printReversedNameBySymbol(name) {
  for (let i = name.length - 1; i >= 0; i--) {
    console.log(name[i]);
  }
}

// printReversedNameBySymbol('Arya');

// A и a с её точки зрения разные символы. Реализуйте вариант этой же функции, так чтобы регистр букв был не важен:
// countChars('ElbrUs', 'e'); // 1
// countChars('ElbrUs', 'E'); // 1

function countChars(str, char) {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.toLowerCase()[i] == char.toLowerCase()) {
      result++;
    }
  }

  return result;
}

// console.log(countChars('ElbrUse', 'E'));

// Реализуйте такую же функцию reverse(), но выполняющую обход строки не с первого элемента по последний, а наоборот, от последнего к первому.
// Общая структура функции при этом останется такой же. Изменится начальный индекс, условие окончания цикла,
// сборка новой строки и формирование нового индекса в цикле.

// reverse('Elbrus'); // surblE

function reverse(str) {
  return str.split('').reverse().join('');
}

// console.log(reverse('Elbrus'));

// Реализуйте функцию filterString(), принимающую на вход строку и символ, и возвращающую новую строку,
// в которой удален переданный символ во всех его позициях.
// Пример вызова:
// const str = 'If I look back I am lost';
// filterString(str, 'I'); // 'f look back am lost'
// filterString(str, 'o'); // 'If I lk back I am lst'

function filterString(str, sym) {
  return str
    .split('')
    .filter((item) => item !== sym)
    .join('');

  //   let result = '';

  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] !== sym) {
  //       result += str[i];
  //   }

  //   return result;
}

// console.log(filterString('If I look back I am lost', 'o'));

// Напишите функцию makeItFunny(), которая принимает на вход строку и возвращает её копию,
// у которой каждый n-ный элемент переведен в верхний регистр. n – задается на входе в функцию.
// Для определения каждого n-ного элемента понадобится остаток от деления %. Подумайте, как его можно использовать.

// const text = 'I never look back';
// // Каждый третий элемент
// makeItFunny(text, 3); // 'I NevEr LooK bAck'

function makeItFunny(text, num) {
  let str = '';

  for (let i = 0; i < text.length; i++) {
    if ((i + 1) % num == 0) {
      str += text[i].toUpperCase();
    } else {
      str += text[i];
    }
  }

  return str;
}

// console.log(makeItFunny('I never look back', 3));

// Реализуйте функцию hasChar(), которая проверяет (с учётом регистра), содержит ли строка указанную букву.

function hasChar(text, char) {
  return text.includes(char);
}

// console.log(hasChar('Renly', 'e')); // true

function encrypt(str) {
  let lastChild = str.split('').pop();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0) {
      result += str[i] + str[i - 1];
    }
  }

  if (str.length % 2 !== 0) {
    result += str[str.length - 1];
  }

  return result;
}

// console.log(encrypt('meow!'));

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + '-';
  }

  return result.slice(0, result.length - 1);
}

// console.log(accum('abcd'));

// Реализуйте функцию, которая считает количество делителей положительного целого числа n.
// Случайные тесты доходят до n = 500000.

// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function dividerCounter(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      result++;
    }
  }

  return result;
}

// console.log(dividerCounter(30));

// В небольшом городе население p0 = 1000 в начале года. Население постоянно растет на 2 процента каждый год
// и еще 50 новых людей каждый год переезжают в город жить. Сколько лет необходимо городу,
// чтобы его население стало больше или равно p >= 1200 жителей?
// В конце первого года: 1000 + 1000 * 0.02 + 50 => 1070 жителей.
// В конце второго года: 1070 + 1070 * 0.02 + 50 => 1141 жителей (** число жителей всегда целое **).
// В конце третьего года: 1141 + 1141 * 0.02 + 50 => 1213.
// Итого понадобится 3 года.
// Немного об аргументах:
// p0 -население в начале года, целое число больше 0
// процент, положительное число или с плавающей запятой
// aug - количество жителей, которые покидают или пребывают в город, целое число
// p - население, которое требуется достичь, целое число больше 0
// Функция nbYear должна возвращать количество лет, которое потребуется для достижения населения больше или равно p.

// nbYear(1500, 5, 100, 5000) -> 15
// nbYear(1500000, 2.5, 10000, 2000000) -> 10

function nbYear(p0, percent, aug, p) {
  let result = 0;
  let years = 1;

  result = p0 + p0 * (percent / 100) + aug;

  while (result < p) {
    result += Math.floor(result * (percent / 100)) + aug;
    years++;
  }

  return years;
}

// console.log(nbYear(1500, 5, 100, 5000)); // 15

// ЗАДАЧА 1
// Напишите функцию generateIntegers, которая принимает один аргумент число n и генерирует массив,
// который содержит целые числа от 0 до n включительно.
// Например, generateIntegers(3) должен вернуть [0, 1, 2, 3].
// N может быть любым целым числом больше и равным 0.

function generateIntegers(n) {
  let arr = [];

  for (let i = 0; i <= n; i++) {
    arr.push(i);
  }

  return arr;
}

// console.log(generateIntegers(5));

// ЗАДАЧА 2
// Дано целое число n и два других значения. Функция valueRepeater должна создавать массив размером n,
// в который входят два других значения и они чередуются.

function valueRepeater(n, a, b) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(i % 2 == 0 ? a : b);
  }

  return arr;
}

// console.log(valueRepeater(5, 'a', 'b')); // [ 'a', 'b', 'a', 'b', 'a' ]

// ЗАДАЧА 3
// Реализуйте функцию, которая принимает массив целых чисел и возвращает массив с удвоением каждого значения.
// [1, 2, 3] --> [2, 4, 6]

function maps(arr) {
  return arr.map((element) => element * 2);
}

// console.log(maps([1, 2, 3]));

// Реализуйте функцию arraySlicer, которая принимает массив и с помощью метода slice возвращает новый с первыми тремя элементами.
// Если элементов меньше 3, то функция должна вернуть всё, что есть.

function arraySlicer(arr) {
  return arr.length < 3 ? arr : arr.slice(0, 3);
}

// console.log(arraySlicer([1, 2]));

// ЗАДАЧА 1
// Реализуйте функцию arraySquarer, которая принимает массив с числами, а возвращает новый массив, состоящий из квадратов этих чисел.
// Для решения этой задачи используйте метод forEach.

function arraySquarer(arr) {
  let newArr = [];

  arr.forEach((item) => newArr.push(Math.pow(item, 2)));

  return newArr;
}

// console.log(arraySquarer([1, 2, 3, 4, 5]));

// ЗАДАЧА 2
// Реализуйте функцию sumArray, которая принимает массив с числами, а возвращает сумму этих чисел.
// Попробуйте решить эту задачу с помощью forEach.

function sumArray(arr) {
  let sum = 0;

  arr.forEach((item) => (sum += item));
  //   return arr.reduce((item, index) => item + index, 0);

  return sum;
}

// console.log(sumArray([1, 2, 3, 4, 5]));

// Необходимо написать функцию counter, которая принимает в виде аргументов два числа: старт и конец.
// Функция должна возвращать число элементов массива между числами, за исключением числа, в котором содержится число 5.
// Стартовое и конечное число включается в число элементов массива.
// Результат может содержать число 5.
// Стартовое число всегда меньше конечного. Оба числа могут отрицательными.

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

function counter(start, end) {
  let arr = [];

  for (let i = start; i <= end; i++) {
    if (!i.toString().includes('5')) {
      arr.push(i);
    }
  }

  return arr.length;
}

// console.log(counter(4, 17));

// ЗАДАЧА 1
// Создайте функцию sumOfLeasts, которая возвращает сумму двух положительных самых маленьких чисел массива,
// в котором минимум 4 положительных целых числа. Дробных чисел не предусмотрено.
// [19, 5, 42, 2, 77] // => 7.
// [10, 343445353, 3453445, 3453545353453] // => 3453455.

function sumOfLeasts(arr) {
  let result = arr.sort((a, b) => a - b);

  return result[0] + result[1];
}

// console.log(sumOfLeasts([10, 343445353, 3453445, 3453545353453]));

// ЗАДАЧА 2
// Реализуйте функцию, которая принимает любое неотрицательное целое число в качестве аргумента и возвращает число
// с его цифрами в порядке убывания. По сути, переставьте цифры так, чтобы получилось максимально возможное число.

// 42145 ----> 54421
// 145263 ----> 654321
// 123456789 ----> 987654321

function maxTransform(n) {
  return Number(
    String(n)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

console.log(maxTransform(42145));
