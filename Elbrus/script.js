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
