/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;

  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (target === nums[middle]) {
      console.log(middle);
      return middle;
    }

    // Left sorted portion
    if (nums[middle] >= nums[left]) {
      if (target > nums[middle] || target < nums[left]) {
        // If target > nums[middle] -> Search right
        // If target < nums[left] -> target is in the right portion
        left = middle + 1;
      } else {
        // If nums[left] < target < nums[middle]
        right = middle - 1;
      }
    } else {
      // Right sorted portion
      if (target < nums[middle] || target > nums[right]) {
        // Go left
        right = middle - 1;
      } else {
        // Go right
        left = middle + 1;
      }
    }
  }

  // If end loop but still don't have result -> return -1
  console.log(-1);
  return -1;
};

// Test cases
let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 7;

search(nums, target);
