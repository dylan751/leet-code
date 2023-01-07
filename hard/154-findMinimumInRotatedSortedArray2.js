/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;

  if (nums[left] < nums[right]) return nums[left];
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      if (nums[right] === nums[mid]) {
        right--;
      } else {
        left = mid + 1;
      }
    }
  }
  return nums[left];
};
