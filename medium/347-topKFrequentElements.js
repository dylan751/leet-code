/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // Create a map to count the frequence of each number
  let count = new Map();
  let bucket = new Array(nums.length + 1);
  let res = [];

  for (let num of nums) {
    if (!count.has(num)) count.set(num, 1);
    else count.set(num, count.get(num) + 1);
  }
  console.log('Map:', count);

  // Poppulate the bucket with numbers in frequency
  // as the index of the bucket
  for (let [key, value] of count.entries()) {
    if (!Array.isArray(bucket[value])) {
      bucket[value] = [];
    }
    bucket[value].push(key);
  }
  console.log('Bucket:', bucket);

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (Array.isArray(bucket[i])) {
      for (let n of bucket[i]) {
        res.push(n);
        if (res.length === k) {
          // Get k elements
          console.log('Res:', res);
          return res;
        }
      }
    }
  }
};

// Test cases
// let nums = [1, 1, 1, 2, 2, 3];
let nums = [1, 3, 4, 4, 1, 2, 3, 4, 5, 2, 1, 2];
let k = 3;
topKFrequent(nums, k);
