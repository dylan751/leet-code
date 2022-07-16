/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] < target) left = middle + 1;
    else if (nums[middle] > target) right = middle - 1;
    else {
      console.log(middle);
      return middle;
    }
  }

  // If not found
  console.log(-1);
  return -1;
};

// Test cases
let nums = [-1, 0, 3, 5, 9, 12];
let target = 9; // Expected output: 4
search(nums, target);
