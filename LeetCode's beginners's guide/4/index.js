// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:

// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

const middleNode = function (head) {
  let middleNode;

  if (head.length % 2 === 0) {
    middleNode = head.length / 2 + 1;
  } else {
    middleNode = (head.length + 1) / 2;
  }

  const result = head.slice(middleNode - 1);

  console.log(result);
};

middleNode([1, 2, 3, 4, 5]);
middleNode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13]);

// Actual solution

// var middleNode = function(head) {
//   let A = [head];
//   while (A[A.length - 1].next != null)
//       A.push(A[A.length - 1].next);
//   return A[Math.trunc(A.length / 2)];
// };
