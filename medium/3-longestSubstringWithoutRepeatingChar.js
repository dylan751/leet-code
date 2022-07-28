// Method 1
var lengthOfLongestSubstring = function (str) {
  const hash = {};
  let start = 0;
  let max = 0;

  for (let i = 0; i < str.length; i++) {
      let rightChar = str[i];

      if (!(rightChar in hash)) hash[rightChar] = 0;
      hash[rightChar] += 1;

      while (hash[rightChar] > 1) {
          let leftChar = str[start];
          start += 1;

          if (leftChar in hash) hash[leftChar] -= 1;
          if (hash[leftChar] === 0) delete hash[leftChar];
      }
      max = Math.max(max, i - start + 1);
  }

  console.log(max);
  return max;
};

// Method 2
function lengthOfLongestSubstring2(s) {
  let res = 0;
  let curr_sub_tring = [];
  for (let i = 0; i < s.length; i++) {
    if (curr_sub_tring.includes(s[i])) {
      if (curr_sub_tring.length > res) {
        res = curr_sub_tring.length;
      }
      // Xoá khỏi mảng từ ký tự đầu mảng đến ký tự trùng (bao gồm cả ký tự trùng)
      let remove_index = curr_sub_tring.indexOf(s[i]);
      for(let j = 0; j <= remove_index; j++) {
          curr_sub_tring.shift();
      }
    }
    curr_sub_tring.push(s[i]);
  }
  if (curr_sub_tring.length > res) {
    res = curr_sub_tring.length;
  }
  console.log(res);
  return res;
}

// --- Test cases ---
let string = "aksdjk";
lengthOfLongestSubstring(string); // Expected output: 5