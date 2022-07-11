/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const res = [];

  let product = 1;

  // Count the prefix product of nums[i]
  for (let i = 0; i < nums.length; i++) {
    res[i] = product;
    product *= nums[i];
  }

  // Count the postfix product of nums[i]
  // Multiply with the prefix
  product = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    res[j] *= product;
    product *= nums[j];
  }

  console.log(res);
  return res;
};

// Test cases
let nums = [1, 2, 3, 4];
productExceptSelf(nums);
