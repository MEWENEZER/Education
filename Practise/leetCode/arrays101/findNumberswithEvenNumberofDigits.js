// Given an array nums of integers, return how many of them contain an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let divCount = 0,
    result = 0;

  for (let num of nums) {
    while (num >= 1) {
      divCount++;
      num /= 10;
    }

    // divCount % 2 === 0 ? result++ : 0;

    if (divCount % 2 === 0) {
      result++;
    }

    divCount = 0;
  }

  return result;
};

console.log(findNumbers([1000, 5, 12, 123]));
