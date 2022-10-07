// Given a binary array nums, return the maximum number of consecutive 1's in the array.

/**
 *
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let currentIndex = 0;
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentIndex += 1;
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
