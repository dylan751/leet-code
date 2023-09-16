/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  const res = [];
  for (i = nums.length - 1; i >= 0; i--) {
    while (nums[i] > 0) {
      res.unshift(nums[i] % 10);
      nums[i] = Math.floor(nums[i] / 10);
    }
  }

  console.log(res);
  return res;
};

// Test cases
let nums = [131, 25, 83, 77]; // Expected output: [1,3,1,2,5,8,3,7,7]
separateDigits(nums);
