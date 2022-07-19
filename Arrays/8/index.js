// Given an integer array nums, return true if any value
// appears at least twice in the array, and return false
// if every element is distinct.

const containsDuplicate = function (nums) {
  let count = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

containsDuplicate([1, 2, 3, 1]);
containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
