/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // Push every nums2's element into the back of nums1
  let j = 0;
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[j];
    j++;
  }

  // Sort the array
  nums1.sort((a, b) => a - b);

  console.log(nums1);
  return nums1;
};

// Test cases 1
let nums1 = [0];
let m = 0;
let nums2 = [1];
let n = 1;
merge(nums1, m, nums2, n);
