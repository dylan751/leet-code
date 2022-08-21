/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] < nums[left]) {
      // Middle is in the right portion -> Min value must be in the middle or in the left of middle
      // Go left
      left += 1;
    } else {
      if (nums[middle] > nums[right]) {
        // Middle is in the right portion -> Go right
        left = middle + 1;
      } else {
        // The array is not rotated -> mid = nums[0]
        console.log(nums[left]);
        return nums[left];
      }
    }
  }
};

// Solution 2:
var findMin2 = function (nums) {
  let left = 0, right = nums.length - 1;
  while (nums[left] > nums[right]) {
      let middle  = Math.floor((left + right) / 2);
      if (nums[middle] < nums[right]) {
          right = middle;
      } else {
          left = middle + 1;
      }
  }
          
  return nums[left];
}

// Test cases
let nums = [4, 5, 6, 7, 0, 1, 2];
// let nums = [5, 1, 2, 3, 4];
findMin(nums); // Expected output: 0;
