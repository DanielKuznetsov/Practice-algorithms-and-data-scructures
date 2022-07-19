// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element
// appears only once. The relative order of the elements should
// be kept the same.

const removeDuplicates = function (nums) {
  const len = nums.length;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < len; i++) {
    if (i > nums.length - 1) {
      break;
    }
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
