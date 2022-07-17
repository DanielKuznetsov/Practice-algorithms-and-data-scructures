// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 2

const findMaxConsecutiveOnes = function (nums) {
  let maxCount = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count += 1;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 0;
    }
  }

  return Math.max(maxCount, count);
};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]);
