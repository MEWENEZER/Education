// Написать функцию, которая принимает два числа и возращает результат их умножения

function multiplication(a, b) {
  return a * b;
}

console.log(multiplication(2, 5));

// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку
// "Привет Иван Петров с возрастом 17 лет" (только здесь данные, которые были переданы в функцию)

let strHello = (hello, name, surname, age) => {
  console.log(`${hello}, ${name} ${surname} с возрастом ${age} лет`);
};

strHello('Привет', 'Иван', 'Петров', 17);

// Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции
// возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не опеределен"

let gender = (x) => {
  if (x.toUpperCase() === 'М') {
    console.log('Ваш пол мужской');
  } else if (x.toUpperCase() === 'Ж') {
    console.log('Ваш пол женский');
  } else {
    console.log('Ваш пол не опеределен');
  }
};

gender('м');

// Сделайте функцию, которая принимает параметром число от 1 до 7,
// а возвращает день недели на русском языке.

let days = (day) => {
  switch (day) {
    case 1:
      return 'Понедельник';
      break;
    case 2:
      return 'Вторник';
      break;
    case 3:
      return 'Среда';
      break;
    case 4:
      return 'Четверг';
      break;
    case 5:
      return 'Пятница';
      break;
    case 6:
      return 'Суббота';
      break;
    case 7:
      return 'Воскресенье';
      break;
    default:
      return 'ERROR';
  }
};

console.log(days(1));

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return console.log('Родители разрешили?');
  }
}

checkAge(20);
