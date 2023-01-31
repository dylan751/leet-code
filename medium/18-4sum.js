/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let sum = 0,
    ret = [],
    done = {};
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++)
    for (let j = i + 1; j < nums.length - 1; j++) {
      var newtarget = target - nums[i] - nums[j];
      var low = j + 1;
      var high = nums.length - 1;
      while (high > low) {
        if (nums[high] + nums[low] == newtarget) {
          let temp = [nums[i], nums[j], nums[low], nums[high]];
          if (!done[temp.join('')]) {
            ret.push(temp);
            done[temp.join('')] = true;
          }
          high -= 1;
          low += 1;
        } else if (nums[high] + nums[low] > newtarget) high -= 1;
        else low += 1;
      }
    }
  return ret;
};
