/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum < 0 ? nums[i] : sum + nums[i];
    maxSum = sum > maxSum ? sum : maxSum;
  }

  console.log(maxSum);
  return maxSum;
};

// Test cases
let nums = [-2,1,-3,4,-1,2,1,-5,4]; // Expected output: 6
maxSubArray(nums);
