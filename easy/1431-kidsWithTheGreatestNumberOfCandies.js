/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const greatestNumberOfCandies = Math.max(...candies);

  return candies.map(
    (candie) => candie + extraCandies >= greatestNumberOfCandies,
  );
};

const candies = [2, 3, 5, 1, 3],
  extraCandies = 3;
kidsWithCandies(candies, extraCandies); // Expected output: [true,true,true,false,true]
