const fs = require('fs');

const board = makeBoard();

function writeBoard(board) {
  fs.writeFileSync('./board.js', JSON.stringify(board));
}

function resetBoard() {
  writeBoard(makeBoard());
}

function makeBoard() {
  return [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ];
}

function printBoard() {
  let board = fs.readFileSync('./board.js', 'utf8');
  board = JSON.parse(board);
  for (let i = 0; i < board.length; i += 1) {
    board[i] = board[i].join(' - ');
  }
  board = board.join('\n');
  console.log(board);
}

resetBoard();
printBoard();

// how to persist changes?

// store the board in an two dimensional array
// join the outer arrays with new lines
// join the inner arrays with a few spaces

// make the board read from a javascript file
// make a function to print the board
// make a function to reset the board
// make a function to impact change on the board (should take a previous board, coordinates, a value, and output a board)
// make a function to check the board
  // if there are no more possible moves, reset it
  // if someone has won, return the winner, and reset it

// make a game function that should recurse until it hits its base case
// base case is: there is a straight or diagonal line on the board