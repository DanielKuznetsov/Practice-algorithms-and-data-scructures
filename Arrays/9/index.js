// Given an array of integers arr, return true if and only if it
//  is a valid mountain array.

// Recall that arr is a mountain array if and only if:

//     arr.length >= 3
//     There exists some i with 0 < i < arr.length - 1 such that:
//         arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//         arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

const validMountainArray = function (arr) {
  if (
    arr.length < 3 ||
    arr[0] >= arr[1] ||
    arr[arr.length - 2] <= arr[arr.length - 1]
  )
    return false;

  let upwards = 0;
  let downwards = 0;
  let straight = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      upwards++;
    } else {
      break;
    }
  }

  for (let i = upwards; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      downwards++;
    }
  }

  if (upwards + downwards === arr.length - 1) console.log(true);

  // console.log(upwards, downwards, arr.length - 1, straight);
};

validMountainArray([3, 7, 6, 4, 3, 0, 1, 0]);
validMountainArray([0, 3, 2, 1]);
validMountainArray([1, 3, 2]);
// validMountainArray([3, 5, 5]);
// validMountainArray([2, 1]);
// validMountainArray([1, 2, 3, 4, 5, 4, 3, 2, 1]);
