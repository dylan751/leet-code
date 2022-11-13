/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (target == nums[i]) {
      console.log(i);
      return i;
    }
    // If not found target in nums
    if (target < nums[i]) {
      console.log(i);
      return i;
    }
  }
  // If not return -> Insert into last of the array
  console.log(nums.length);
  return nums.length;
};

let nums = [1, 3, 5, 6];
let target = 7;
searchInsert(nums, target);
