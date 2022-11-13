/**
 * @param {number[]} height
 * @return {number}
 */
// Create 2 pointer at the start + end of the array -> maximum length
// Calculate the size -> compare to maxSize and update maxSize
// If left's value <= right's value -> Shift left, else shift right
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let maxArea = 0;
  let newMaxArea;

  while (left != right) {
    newMaxArea = (right - left) * Math.min(height[left], height[right]);
    maxArea = maxArea > newMaxArea ? maxArea : newMaxArea;

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  console.log(maxArea);
  return maxArea;
};

// Test cases
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(height); // Expected output: 49
