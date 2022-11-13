/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Using HashMap
var containsDuplicate = function (nums) {
  // If the element is not in the HashMap -> Put it into the HashMap
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], nums[i]);
    } else {
      console.log('True');
      return true;
    }
  }
  console.log(map);
  console.log('False');
  return false;
};

// Method 2: Sorting -> Check adjacent elements
var containsDuplicate2 = function (nums) {
  // Sort the array
  let sortedNums = nums.sort();
  console.log(sortedNums);

  // Check duplicate
  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      console.log('True');
      return true;
    }
  }
  console.log('False');
  return false;
};

// Test cases
// let nums = [4, 6, 7, 2, 3, 1];
let nums = [1, 2, 3, 2];
containsDuplicate(nums);
