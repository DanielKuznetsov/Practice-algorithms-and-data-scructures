// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

// Example 1:

// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// Example 2:

// Input: arr = [1,2,3]
// Output: [1,2,3]
// Explanation: After calling your function, the input array is modified to: [1,2,3]

const duplicateZeros = function (arr) {
  let i = 0;
  let len = arr.length;
  while (i < arr.length) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      i++;
    }
    i++;
  }

  while (len < arr.length) arr.pop();

  return arr;
};

duplicateZeros([1, 0, 3, 0, 5, 0]);
