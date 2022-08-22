/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0,
    count = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      for (let j = i; j < nums.length; j++) {
        nums[j] = nums[j + 1];
      }
      i--;
    }
  }
  console.log(nums);

  i = 0;
  while (nums[i] != undefined) {
    count++;
    i++;
  }

  console.log(count);
  return count;
};

// Test cases
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
removeElement(nums, val);
