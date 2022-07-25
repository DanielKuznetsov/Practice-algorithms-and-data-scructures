// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

const findDisappearedNumbers = function (nums) {
  let set = new Set(nums);
  let len = nums.length;
  let arr1 = [];

  if (set.size === nums.length) {
    return [];
  }

  for (i = 1; i <= len; i++) {
    if (!set.has(i)) {
      arr1.push(i);
    }
  }

  // console.log(arr1);
  return arr1;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
findDisappearedNumbers([1, 1]);
