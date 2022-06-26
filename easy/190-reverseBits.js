/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let n_str = "";

  // Convert unsigned int n to string -> Reverse the binary number
  while (n > 0) {
    if (n % 2 == 1) n_str += "1";
    else n_str += "0";
    n = Math.floor(n / 2);
  }
  for (let i = n_str.length; i < 32; i++) {
    n_str += "0";
  }
  console.log(n_str);

  let sum = 0, count = 0;
  // Turn the string into result number
  for (let i = n_str.length - 1; i >= 0; i--) {
    sum += n_str[i] * Math.pow(2, count);
    count++;
  }

  console.log(sum);
  return sum;
};

// Test cases
let n = 43261596; // Represent 00000010100101000001111010011100
reverseBits(n);
