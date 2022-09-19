function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(3, 'I'));

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}

console.log(simpleMultiplication(3));

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
  return array.map((item) => -item);
}

console.log(invert([1, -2, 0, -7, 3, 6]));

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems.
// It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells.
// RNA differs slightly from DNA its chemical structure and contains no Thymine.
// In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA('helTo'));

//

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet(''));

// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(11.8));

//

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

console.log(hero(7, 4));

// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr;
};

console.log(reverseSeq([5]));

//

function solution(str) {
  return str.split('').reverse().join('');
}

console.log(solution('dima'));

//

function abbrevName(name) {
  return name
    .split(' ')
    .map((item) => item[0].toUpperCase())
    .join('.');
}

console.log(abbrevName('dima filimonov'));

//

function maps(x) {
  return x.map((item) => item * 2);
}

console.log(maps([1, 2, 3]));

//

function reverseWords(str) {
  return str
    .split(' ')
    .map((item) => item.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
