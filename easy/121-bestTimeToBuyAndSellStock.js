/**
 * @param {number[]} prices
 * @return {number}
 */

// Same method as the code below (but cleaner code)
var maxProfit = function (prices) {
  let buy = prices[0];
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    // If tomorrow can buy at lower cost -> Buy at lower cost
    if (prices[i] < buy) {
      buy = prices[i];
    } else {
      // If buy < sell -> Keep comparing the sell price of days after
      maxProfit = Math.max(prices[i] - buy, maxProfit);
    }
  }

  console.log(maxProfit);
  return maxProfit;
};

// -------------------- MYSELF CODE --------------------
var maxProfit2 = function (prices) {
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
let prices = [7, 1, 5, 3, 6, 4];
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
