/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let res = 0;
  let i = 0,
    j = 0;

  let mergedArray = [];
  // Merge two arrays
  while (i < nums1.length || j < nums2.length) {
    if (i == nums1.length && j < nums2.length) {
      mergedArray.push(nums2[j]);
      j++;
    } else if (j == nums2.length && i < nums1.length) {
      mergedArray.push(nums1[i]);
      i++;
    } else {
      if (nums1[i] >= nums2[j]) {
        mergedArray.push(nums2[j]);
        j++;
      } else {
        mergedArray.push(nums1[i]);
        i++;
      }
    }
  }
  console.log(mergedArray);

  // Calculate median
  if (mergedArray.length % 2 == 0) {
    res =
      (mergedArray[mergedArray.length / 2 - 1] +
        mergedArray[mergedArray.length / 2]) /
      2;
  } else {
    res = mergedArray[Math.floor(mergedArray.length / 2)];
  }

  console.log(res);
  return res;
};

// Test cases
let nums1 = [1, 3];
let nums2 = [2, 4];
findMedianSortedArrays(nums1, nums2);
