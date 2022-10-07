// Given an integer array nums sorted in non-decreasing order,
// return an array of the squares of each number sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  return nums.map((item) => Math.pow(item, 2)).sort((a, b) => a - b);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
