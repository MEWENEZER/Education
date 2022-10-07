// Given a binary array nums, return the maximum number of consecutive 1's in the array.

/**
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let currentIndex = 0,
    maxIndex = 0;

  for (const num of nums) {
    if (num === 1) {
      currentIndex++;
      if (currentIndex > maxIndex) {
        maxIndex = currentIndex;
      }
    } else {
      currentIndex = 0;
    }
  }
  return maxIndex;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1]));
