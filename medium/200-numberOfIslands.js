/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length <= 0) return 0;
  let count = 0,
    DIRECTIONS = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
  let height = grid.length,
    width = grid[0].length;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] == '1') {
        // there is no chance '0' is part of an island
        traverse(row, col); // once this finishes, we've visited all lands of one island
        count++;
      }
    }
  }

  return count;

  // DFS Traversal
  function traverse(row, col) {
    if (
      row < 0 ||
      row >= height ||
      col < 0 ||
      col >= width ||
      grid[row][col] == '0'
    ) {
      return;
    }
    grid[row][col] = '0'; // turn land to water since we already visited it
    for (let dir of DIRECTIONS) {
      traverse(row + dir[0], col + dir[1]);
    }
  }
  // Time Complexity: O(m*n)
  // Space Complexity: O(m*n), if the entire grid is one island, it will take up m*n space in function call stack
};
