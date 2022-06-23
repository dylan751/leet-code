/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let res = nums.indexOf(target);

    console.log(res);
    return res;
};

// Test cases
let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 3;
search(nums, target);