// Gameboard IIFE
const game = (() => {
  const board = [["", "", "",],
                 ["", "", "",],
                 ["", "", "",],];
  return { board };
})();

// Display Controller IIFE
const displayController = (() => {

})();

// Player factory and declaration
function createPlayer(name, symbol) {
  let score = 0;
  return { name, symbol, score };
};
const player1 = createPlayer("Player 1", 0);
const player2 = createPlayer("Player 2", 1);

// Set default player and change
let player = player1;
function changePlayer() {
  if (player === player1) {
    player = player2;
  } else {
    player = player1;
  }
};

function makeMove(location) {
  // Put symbol in location
  if (location === "a1" && game.board[0][0] === "") {
    game.board[0][0] = player.symbol;
  } else if (location === "a2" && game.board[0][1] === "") {
    game.board[0][1] = player.symbol;
  } else if (location === "a3" && game.board[0][2] === "") {
    game.board[0][2] = player.symbol;
  } else if (location === "b1" && game.board[1][0] === "") {
    game.board[1][0] = player.symbol;
  } else if (location === "b2" && game.board[1][1] === "") {
    game.board[1][1] = player.symbol;
  } else if (location === "b3" && game.board[1][2] === "") {
    game.board[1][2] = player.symbol;
  } else if (location === "c1" && game.board[2][0] === "") {
    game.board[2][0] = player.symbol;
  } else if (location === "c2" && game.board[2][1] === "") {
    game.board[2][1] = player.symbol;
  } else if (location === "c3" && game.board[2][2] === "") {
    game.board[2][2] = player.symbol;
  } else {
    console.log("Spot taken. Move again.");
    // Run this a second time (below) so that player is rotated back to current player
    changePlayer();
  };
  changePlayer();
  checkResult();
};

function checkResult() {
  let aaa = game.board[0][0] + game.board[0][1] + game.board[0][2];
  let bbb = game.board[1][0] + game.board[1][1] + game.board[1][2];
  let ccc = game.board[2][0] + game.board[2][1] + game.board[2][2];
  let one = game.board[0][0] + game.board[1][0] + game.board[2][0];
  let two = game.board[0][1] + game.board[1][1] + game.board[2][1];
  let thr = game.board[0][2] + game.board[1][2] + game.board[2][2];
  let rDi = game.board[0][0] + game.board[1][1] + game.board[2][2];
  let lDi = game.board[0][2] + game.board[1][1] + game.board[2][0];

  if (aaa === 0 || bbb === 0 || ccc === 0 || one === 0 || two === 0 || thr === 0 || rDi === 0 || lDi === 0) {
    console.log("Player 1 Wins");
  } else if (aaa === 3 || bbb === 3 || ccc === 3 || one === 3 || two === 3 || thr === 3 || rDi === 3 || lDi === 3) {
    console.log("Player 2 Wins");
  } else if (aaa + bbb + ccc === 5) {
    console.log("Tie");
  } else {
    console.log(`${player.name}\'s turn.`);
  };
};
