/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let res = 0;
  while (i < nums.length) {
    if (nums[i] == nums[i + 1] && nums[i] != undefined) {
      // Remove from array
      for (let j = i + 1; j < nums.length; j++) {
        nums[j] = nums[j + 1];
      }
      i--;
    }
    i++;
  }

  i = 0;
  while (nums[i] != undefined) {
    res++;
    i++;
  }

  console.log(res);
  return res;
};

// Test cases
let nums = [1, 2, 3, 3, 3, 4, 5];
removeDuplicates(nums);
