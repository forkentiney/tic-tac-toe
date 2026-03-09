// Create gameboard
const game = (() => {
  const board = [["", "", "",],
                 ["", "", "",],
                 ["", "", "",],];
  return { board };
})();


// Player factory and declaration
function createPlayer(name, symbol) {
  let score = 0;
  return { name, symbol, score };
};
const player1 = createPlayer("player1", 0);
const player2 = createPlayer("player2", 1);

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
    changePlayer();
  };
  changePlayer();
};

// Testing filling gameboard
