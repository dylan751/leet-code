/**
 * @param {character[][]} board
 * @return {boolean}
 */

const BOARD_SIZE = 9;

// Check if the board[i][j]'s value is valid or not
var isValidValue = function (row, column, board) {
  let value = board[row][column]; // Current value
  for (let i = 0; i < BOARD_SIZE; i++) {
    // Check is_valid row
    if (i != column && board[row][i] == value) {
      return false;
    }
    // Check is_valid column
    if (i != row && board[i][column] == value) {
      return false;
    }
    // Check is_valid surrounding
    if (
      (3 * Math.floor(row / 3) + Math.floor(i / 3) != row ||
        3 * Math.floor(column / 3) + (i % 3) != column) &&
      board[3 * Math.floor(row / 3) + Math.floor(i / 3)][
        3 * Math.floor(column / 3) + (i % 3)
      ] == value
    ) {
      return false;
    }
  }
  return true;
};

var isValidSudoku = function (board) {
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (j = 0; j < BOARD_SIZE; j++) {
      if (board[i][j] != "." && isValidValue(i, j, board) == false) {
        console.log("False");
        return false;
      }
    }
  }
  console.log("True");
  return true;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

isValidSudoku(board);
