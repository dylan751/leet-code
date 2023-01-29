/**
 * @param {number} num
 * @return {string}
 */

const VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const CHARS = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];

var intToRoman = function (num) {
  const results = [];

  while (num > 0) {
    for (let i = 0; i < VALUES.length; i++) {
      const divider = VALUES[i];
      const count = Math.floor(num / divider);

      if (count > 0) {
        results.push(CHARS[i].repeat(count));

        num -= count * divider;
        break;
      }
    }
  }

  return results.join('');
};
