// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

function runningSum(sums) {
  const results = [];
  results[0] = sums[0];
  for (let i = 1; i < sums.length; i++) {
    results[i] = sums[i] + results[i - 1];
  }

  return results;
}

runningSum([1, 1, 1, 1, 1]);

// Second approach

function runningSum2(sums) {
  for (let i = 1; i < sums.length; i++) {
    sums[i] = sums[i] + sums[i - 1];
  }

  console.log(sums);
}

runningSum2([1, 1, 1, 1, 1]);
