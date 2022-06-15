/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let res = digits;

  let remain = 0; // So du

  // Check most right digit
  res[digits.length - 1] += 1;
  if (res[digits.length - 1] > 9) {
    res[digits.length - 1] = 0;
    remain = 1;
  } else {
      console.log(res);
      return res;
  }

  for (let i = digits.length - 2; i >= 0; i--) {
    if (remain == 1) {
      res[i] = res[i] + remain;
      remain = 0;
      if (res[i] > 9) {
        res[i] = 0;
        remain = 1;
        continue;
      }
    }

    if (remain == 0) {
      break;
    }
  }

  // The last number
  if (remain == 1) {
    res.unshift(1);
  }

  console.log(res);
  return res;
};

// Test cases
// let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
let digits = [9, 9];
plusOne(digits);
