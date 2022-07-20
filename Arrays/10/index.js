// An important difference for in-place vs not in-place is that in-place
// modifies the input Array. This means that other functions can no longer
// access the original data, because it has been overwritten. We'll talk more
//  about this in a bit.

function squareEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr[i] *= arr[i];
    }
  }

  console.log(arr);
}

squareEven([9, -2, -9, 11, 56, -12, -3]);

// NOT in-place solution written in Java

// public int[] squareEven(int[] array, int length) {

//   // Check for edge cases.
//   if (array == null) {
//     return null;
//   }

//   // Create a resultant Array which would hold the result.
//   int result[] = new int[length];

//   // Iterate through the original Array.
//   for(int i = 0; i < length; i++) {

//     // Get the element from slot i of the input Array.
//     int element = array[i];

//     // If the index is an even number, then we need to square element.
//     if (i % 2 == 0) {
//       element *= element;
//     }

//     // Write element into the result Array.
//     result[i] = element;
//   }

//   // Return the result Array.
//   return result;
// }
