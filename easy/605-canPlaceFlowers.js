/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      n > 0 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i] === 0 &&
      flowerbed[i + 1] !== 1
    ) {
      n--;
      i++;
    }
  }

  console.log(n === 0);
  return n === 0;
};

// Test cases
let flowerbed = [1, 0, 0, 0, 1];
let n = 1; // Expected output: true
canPlaceFlowers(flowerbed, n);

