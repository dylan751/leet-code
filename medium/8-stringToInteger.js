/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  s = s.trim();
  let s_num = '';
  for (let i = 0; i < s.length; i++) {
    if ((isNaN(Number(s[i])) && i !== 0) || s[i] === ' ') break;
    s_num += s[i];
  }
  let num = Number(s_num);

  if (isNaN(num)) return 0;
  const limit = Math.pow(2, 31);
  if (num > limit - 1) num = limit - 1;
  if (num < -limit) num = -limit;
  return num;
};
