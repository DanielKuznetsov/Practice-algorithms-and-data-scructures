// Given an integer array nums, return the third distinct
// maximum number in this array. If the third maximum does
// not exist, return the maximum number.

// Example 1:

// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

const thirdMax = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  const setNums = new Set(sortedNums);
  const arr = [...setNums];

  let maxNum = 0;
  let count = 0;
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      maxNum = Math.max(maxNum, arr[i]);
      count++;
    }

    maxNum = Math.max(maxNum, arr[i]);
    newArr.push(maxNum);
  }

  if (newArr.length <= 2) {
    console.log(newArr[newArr.length - 1]);
  } else {
    console.log(newArr[newArr.length - 3]);
  }
};

thirdMax([1, 2, 2, 5, 3, 5]);

// Solution 2

// var thirdMax = function(nums) {

//   let r = [];
//   nums.sort()

//   for(i=0; i<nums.length; i++){
//       if(nums[i] != nums[i+1]){
//           r.push(nums[i]);
//       }
//   }

//   if(r.length > 2){
//       for(i=0; i<2; i++){
//           r.splice(r.indexOf(Math.max(...r)), 1);
//       }
//   }
//    return Math.max(...r)
// };
