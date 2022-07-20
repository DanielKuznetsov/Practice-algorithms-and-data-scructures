// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

const moveZeroes = function (nums) {
  // O(n) Time Complexity
  // 2 Pointers
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[left]] = [nums[left], nums[i]];
      left++;
    }
  }
  return nums;
};

moveZeroes([0, 1, 0, 3, 12]);
