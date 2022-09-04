/* Техническое задание

Мяу! Мне нужна программа, которая подсчитает полезность и результативность игроков на основе их статистики.
Оформи код в виде функции getStatistics с одним параметром — массивом игроков.

Каждый футболист в этом массиве описывается объектом с тремя полями: имя (свойство name), //
забитые голы (свойство goals) и голевые пасы (свойство passes).                           // 

Функция должна возвращать этот же массив, в котором каждому игроку добавлены ещё два поля: 
коэффициент полезности по Кексу® (свойство coefficient) и результативность (свойство percent).

Коэффициент полезности считается так: умножаем голы игрока на 2 (потому что я считаю, что голы важнее всего) 
и прибавляем к этому значению все голевые пасы футболиста.

Результативность (процент забитых мячей футболиста от результата всей команды) считаем так: находим сумму 
голов всех игроков и выясняем, сколько процентов от этого числа забил каждый футболист. Округляй значение с помощью Math.round.

*/

let players = [
  { name: 'Васька', goals: 5, passes: 5 },
  { name: 'Байт', goals: 12, passes: 2 },
  { name: 'Снежок', goals: 2, passes: 7 },
];

let getStatistics = function (players) {
  let coefficient = [];
  let percent = [];
  let goalsAll = 0;

  for (let i = 0; i < players.length; i++) {
    goalsAll += players[i].goals;
  }

  for (let i = 0; i < players.length; i++) {
    coefficient[i] = 2 * players[i].goals + players[i].passes;
    players[i].coefficient = coefficient[i];

    percent[i] = Math.round((players[i].goals * 100) / goalsAll);
    players[i].percent = percent[i];
  }
  return players;
};

getStatistics(players);

/* Техническое задание
  
  Мяу! Допиши за меня конфигуратор. Я создал объект house и задал ему несколько свойств: 
  rooms (количество комнат), floors (этажи), material (материал для стен), coefficient (средняя площадь каждой комнаты).
  
  Ещё я завёл мапу materialPrice, в которой записал стоимость каждого возможного материала для строительства.
  
  Добавь в объект два метода: calculateSquare, который будет возвращать площадь дома, и calculatePrice,
   который будет возвращать стоимость строительства.
  
  Площадь считай так: умножь количество комнат на коэффициент и число этажей в доме.  
  Цена строительства — произведение площади и стоимости материала дома.
  
*/

let materialPrice = {
  wood: 1000,
  stone: 1500,
  brick: 2000,
};

let house = {
  rooms: 10,
  floors: 5,
  material: 'wood',
  coefficient: 10.5,

  calculateSquare: function () {
    return (square = this.rooms * this.coefficient * this.floors);
  },

  calculatePrice: function () {
    return this.calculateSquare() * materialPrice[this.material];
  },
};

console.log(house.calculateSquare());
console.log(house.calculatePrice());
