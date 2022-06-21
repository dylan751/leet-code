/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = nums1.length - 1;

  // Push every nums2's element into the back of nums1
  for (let val of nums2) {
    nums1[i] = val;
    i--;
  }

  // Sort the array
  nums1.sort((a, b) => a - b);

  console.log(nums1);
  return nums1;
};

// Test cases 1
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
merge(nums1, m, nums2, n);
