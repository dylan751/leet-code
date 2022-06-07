function lengthOfLongestSubstring(s) {
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
lengthOfLongestSubstring(string);