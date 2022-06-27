/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let left = 0; // Buy stock
  let right = 1; // Sell stock
  let maxProfit = 0;
  // Loop until right == prices.length
  while (right < prices.length) {
    // If buy stock > sell stock -> Update buy time: Left jump to Right position, right + 1
    if (prices[left] > prices[right]) {
      left = right;
      right++;
    } else {
      // If buy stock < sell stock -> Update maxProfit -> Update sell time only: right + 1
      maxProfit =
        maxProfit > prices[right] - prices[left]
          ? maxProfit
          : prices[right] - prices[left];

      right++;
    }
  }

  console.log(maxProfit);
  return maxProfit;
};

// Test cases
let prices = [7,1,5,3,6,4];
maxProfit(prices);

// // Right Solution (but TIME LIMIT EXCEEDED)
// var maxProfit = function (prices) {
//   let max = Number.MIN_SAFE_INTEGER;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i; j < prices.length; j++) {
//       max = max > prices[j] - prices[i] ? max : prices[j] - prices[i];
//     }
//   }

//   let maximumProfit = max;
//   console.log(maximumProfit);
//   return maximumProfit;
// };
