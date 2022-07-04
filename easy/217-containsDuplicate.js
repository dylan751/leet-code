/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // Sort the array
  let sortedNums = nums.sort();
  console.log(sortedNums);

  // Check duplicate
  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      console.log("True");
      return true;
    }
  }
  console.log("False");
  return false;
};

// Test cases
let nums = [4, 5, 1, 2, 3, 1];
containsDuplicate(nums);
