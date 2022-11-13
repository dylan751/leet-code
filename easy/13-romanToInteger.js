/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I':
        if (s[i + 1] == 'V') {
          i++;
          res += 4;
        } else if (s[i + 1] == 'X') {
          i++;
          res += 9;
        } else {
          res += 1;
        }
        break;
      case 'V':
        res += 5;
        break;
      case 'X':
        if (s[i + 1] == 'L') {
          i++;
          res += 40;
        } else if (s[i + 1] == 'C') {
          i++;
          res += 90;
        } else {
          res += 10;
        }
        break;
      case 'L':
        res += 50;
        break;
      case 'C':
        if (s[i + 1] == 'D') {
          i++;
          res += 400;
        } else if (s[i + 1] == 'M') {
          i++;
          res += 900;
        } else {
          res += 100;
        }
        break;
      case 'D':
        res += 500;
        break;
      case 'M':
        res += 1000;
        break;
    }
  }
  console.log(res);
  return res;
};

// Test cases
let s = 'MCMXCIV';
romanToInt(s);
