/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        res.push(i);
        res.push(j);
      }
    }
  }
  console.log(res);
  return res;
};

/* Test cases */
let nums = [3, 3];
let target = 6;
twoSum(nums, target);
