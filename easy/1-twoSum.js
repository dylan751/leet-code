/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Method 1: Using Hash Map
// Loop once -> nums[i] -> Check if the hashmap contains target - nums[i]
var twoSum = function (nums, target) {
  let map = new Map();

  // Check if the hashmap contains (target - nums[i])
  for(let i = 0; i < nums.length; i++) {
    if(map.has(target - nums[i])) {
      console.log([map.get(target - nums[i]), i]);
      return [map.get(target - nums[i]), i]
    }
    // Else -> Inset into hashmap: key: nums[i], value: i
    map.set(nums[i], i);
  }
}

// Method 2: 2 loops
var twoSum2 = function (nums, target) {
  let res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        res.push(i);
        res.push(j);
      }
    }
  }
  console.log(res);
  return res;
};

/* Test cases */
let nums = [3, 4, 3, 2, 1, 5];
let target = 9;
twoSum(nums, target);
