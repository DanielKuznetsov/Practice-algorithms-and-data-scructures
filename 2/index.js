// Example 1:

// Input: accounts = [[1,2,3],[3,2,1]]
// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

// Example 3:

// Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
// Output: 17

const maximumWealth = function (accounts) {
  const results = [];
  let maxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    results.push(sum);

    if (maxWealth < results[i]) {
      maxWealth = results[i];
    }
  }

  return maxWealth;
};

maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]);

// Second approach
const maximumWealth2 = function (accounts) {
  let maxWealthSoFar = 0;

  for (customer of accounts) {
    let currentCustomerWealth = 0;

    for (let i = 0; i < customer[i]; i++) {
      currentCustomerWealth += customer[i];
    }

    maxWealthSoFar = Math.max(maxWealthSoFar, currentCustomerWealth);
  }

  return maxWealthSoFar;
};

maximumWealth2([
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
]);
