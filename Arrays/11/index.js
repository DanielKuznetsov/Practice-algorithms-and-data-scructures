// Given an array arr, replace every element in that array with the greatest
//  element among the elements to its right, and replace the last element with
//  -1.

// After doing so, return the array.

const replaceElements = function (arr) {
  if (arr.length <= 1) {
    arr[0] = -1;
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    let newArr = [];
    let newNum = 0;

    for (let j = i + 1; j < arr.length; j++) {
      newArr.push(arr[j]);
    }

    newNum = Math.max(...newArr);

    arr[i] = newNum;
    if (i === arr.length - 1) arr[i] = -1;
  }

  return arr;
};

replaceElements([17, 18, 5, 4, 6, 1]);
replaceElements([400]);
