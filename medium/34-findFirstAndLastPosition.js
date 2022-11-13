/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let res = [];
  let mark = 0; // Check if find or not
  let foundLeft = 0,
    foundRight = 0;
  let left = 0;
  let right = nums.length - 1;

  // Search from both ends
  while (left <= right && (foundLeft == 0 || foundRight == 0)) {
    if (nums[left] == target && foundLeft == 0) {
      res.unshift(left);
      foundLeft = 1;
    }
    if (nums[right] == target && foundRight == 0) {
      res.push(right);
      foundRight = 1;
    }
    if (foundLeft == 0) left++;
    if (foundRight == 0) right--;
  }

  if (foundLeft == 0 && foundRight == 0) {
    res = [-1, -1];
  }

  console.log(res);
  return res;
};

// Test cases
// let nums = [5, 7, 7, 8, 8, 10];
let nums = [5, 3, 31, 12, 23, 3];
let target = 23;
searchRange(nums, target);
// Expected output: [3, 4]
