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

console.log(getHiddenCard('2034399002125581'));

const printNumbers = (initialNumber) => {
  while (initialNumber > 0) {
    console.log(initialNumber);
    initialNumber--;
  }

  console.log('finished!');
};

printNumbers(5);

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

console.log(multiplyNumbersFromRange(1, 3));

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

console.log(joinNumbersFromRange(5, 10));

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

printReversedNameBySymbol('Arya');

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

console.log(countChars('ElbrUse', 'E'));

// Реализуйте такую же функцию reverse(), но выполняющую обход строки не с первого элемента по последний, а наоборот, от последнего к первому.
// Общая структура функции при этом останется такой же. Изменится начальный индекс, условие окончания цикла,
// сборка новой строки и формирование нового индекса в цикле.

// reverse('Elbrus'); // surblE

function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(reverse('Elbrus'));

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

console.log(filterString('If I look back I am lost', 'o'));

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

console.log(makeItFunny('I never look back', 3));
