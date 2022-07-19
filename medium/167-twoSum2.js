/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 1;
  let right = numbers.length;

  while (left < right) {
    if (numbers[left - 1] + numbers[right - 1] < target) left += 1;
    else if (numbers[left - 1] + numbers[right - 1] > target) right -= 1;
    else {
      console.log([left, right]);
      return [left, right];
    }
  }

  console.log(-1);
  return -1;
};

// Test cases
let numbers = [2, 7, 11, 15];
let target = 14;
twoSum(numbers, target);
