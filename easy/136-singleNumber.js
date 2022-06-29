/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNumber = function (nums) {
//   let i = 0;
//   let j = 0;
//   let temp = 0;
//   // Sort the array asc
//   for (i = nums.length - 1; i >= 0; i--) {
//     for (j = 0; j < i; j++) {
//       if (nums[j] > nums[j + 1]) {
//         temp = nums[j];
//         nums[j] = nums[j + 1];
//         nums[j + 1] = temp;
//       }
//     }
//   }

//   // Check 2 numbers beside each other is duplicate
//   i = 0;
//   while (i < nums.length - 1) {
//     if (nums[i] != nums[i + 1]) {
//       console.log(nums[i]);
//       return nums[i];
//     }
//     i += 2;
//   }

//   console.log(nums[nums.length - 1]);
//   return nums[nums.length - 1];
// };

var singleNumber = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    // Using XOR
    // n ^ 0 = n
    // n ^ n = 0
    result = result ^ nums[i];
    console.log(result);
  }

  console.log(result);
  return result;
};

// Test cases
let nums = [1, 2, 4, 3, 2, 3, 2, 1, 1, 2, 2, 4, 1]; // Expected output: 2
singleNumber(nums);
