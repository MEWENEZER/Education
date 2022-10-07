// Given an array nums of integers, return how many of them contain an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let result = 0;

  for (let num of nums) {
    if (!(String(num).length % 2)) {
      result++;
    }
  }

  return result;
};

console.log(findNumbers([100, 5, 12, 123]));
