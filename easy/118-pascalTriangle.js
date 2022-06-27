/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [];
  if (numRows == 0) return res;

  // The first row of every pascal's Triangle
  res.push([1]);
  if (numRows == 1) return res;

  let temp = [];

  // Create the nth row
  for (let i = 1; i < numRows; i++) {
    temp = [];

    temp.push(1);
    for (let j = 1; j < i; j++) {
      temp.push(res[i - 1][j - 1] + res[i - 1][j]);
    }
    temp.push(1);

    res.push(temp); // Update the nth row into res array
  }

  console.log(res);
  return res;
};

// Test cases
let numRows = 5;
generate(numRows);
