/**
 * @param {number} x
 * @return {number}
 */
// Method 1
var mySqrt = function (x) {
  if (x > 0 && x <= 3) {
    console.log(1);
    return 1;
  }
  for (let i = 0; i <= Math.ceil(x / 2); i++) {
    if (i * i > x) {
      console.log(i - 1);
      return i - 1;
    } else if (i * i == x) {
      console.log(i);
      return i;
    }
  }
};

// ----------------------------------------------------------------------------------------

/**
 * @param {number} x
 * @return {number}
 */
// Method 2
var mySqrt = function (x) {
  //if x is 0 or x is 1
  if (x <= 1) return x;

  //we will traverse till half of the value that sqrt is surely present in that range
  let start = 1,
    end = x / 2;
  let ans = 0;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid == x) return mid;
    else if (mid * mid < x) {
      //for the case if perfect square root doesn't exist
      ans = Math.ceil(mid);
      start = mid + 1;
    } else end = mid - 1;
  }
  console.log(ans);
  return ans;
};

// Test cases
let x = 8;
mySqrt(x);
