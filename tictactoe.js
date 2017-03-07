const fs = require('fs');

function writeBoard(board) {
  fs.writeFileSync('./board.js', JSON.stringify(board));
  return board;
}

function resetBoard() {
  return writeBoard(makeBoard());
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

function modifyBoard(board, coordinates, player) {
  board[coordinates[0]][coordinates[1]] = player;
  return board;
}

function checkBoardForWin(board) {
  if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') return 'X';
  if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') return 'O';
  for (let i = 0; i < board.length; i += 1) {
    if (board[i].every(item => item === 'X')) return 'X';
    if (board[i].every(item => item === 'O')) return 'O';
  }
  return false;
}

function checkBoardForTie(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let n  = 0; n < board[i].length; n += 1) {
      if (board[i][n] === ' ') return false;
    }
  }
  return true;
}

function initializeGame() {
  let currentPlayer = 'X';
  const board = resetBoard();
  // newRound(board, );

}

function newRound(board, coordinates, player) {

}

// initializeGame();

// const board = makeBoard();
// modifyBoard(board, [0,0], 'X');
// writeBoard(board);
// printBoard();


function takeUserInput() {
  const stdin = process.openStdin();
  stdin.addListener('data', function(d) {
    const string = d.toString().trim();
    console.log(`Your input: ${string}`);
    takeUserInput();
  });
}

takeUserInput();

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