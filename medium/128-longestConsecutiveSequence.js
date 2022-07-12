/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) {
    return 0;
  }

  const map = Object.create(null);
  let max = 0;

  for (const num of nums) {
    if (num in map) {
      continue;
    }

    const prev = num - 1;
    const next = num + 1;
    let len = 1;

    if (prev in map) {
      if (next in map) {
        len += map[prev] + map[next];
        map[prev - map[prev] + 1] = len;
        map[next + map[next] - 1] = len;
      } else {
        len += map[prev];
        ++map[prev - map[prev] + 1];
      }
    } else if (next in map) {
      len += map[next];
      ++map[next + map[next] - 1];
    }
    map[num] = len;
    max = Math.max(max, len);
  }

  console.log(max);
  return max;
};

// Test cases
let nums = [100, 4, 200, 1, 3, 2];
longestConsecutive(nums); // Output = 4, longest consecutive sequence: [1, 2, 3, 4]
