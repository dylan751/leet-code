/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  // Get abs of dividend and divisor
  let dividend_abs = Math.abs(dividend);
  let divisor_abs = Math.abs(divisor);

  // Calculate
  let res = 0;
  let sum = divisor_abs;
  while (sum <= dividend_abs) {
    let p = 1;
    while (sum + sum <= dividend_abs) {
      sum += sum;
      p += p;
    }

    res += p;
    dividend_abs -= sum;
    sum = divisor_abs;
  }

  // Check sign
  if (dividend * divisor < 0) {
    if (-res < -2147483648) return -2147483648;
    console.log(-res);
    return -res;
  }

  if (res > 2147483647) return 2147483647;
  console.log(res);
  return res;
};

// Test cases
let dividend = -2147483647;
let divisor = 2;
divide(dividend, divisor);
