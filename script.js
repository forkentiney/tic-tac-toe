// Gameboard IIFE
const game = (() => {
  const board = [["", "", "",],
                 ["", "", "",],
                 ["", "", "",],];
  const result = () => {
    let aaa = board[0][0] + board[0][1] + board[0][2];
    let bbb = board[1][0] + board[1][1] + board[1][2];
    let ccc = board[2][0] + board[2][1] + board[2][2];
    let one = board[0][0] + board[1][0] + board[2][0];
    let two = board[0][1] + board[1][1] + board[2][1];
    let thr = board[0][2] + board[1][2] + board[2][2];
    let rDi = board[0][0] + board[1][1] + board[2][2];
    let lDi = board[0][2] + board[1][1] + board[2][0];
    if (aaa === 0 || bbb === 0 || ccc === 0 || one === 0 || two === 0 || thr === 0 || rDi === 0 || lDi === 0) {
      player1.increaseScore();
      console.log("Player 1 Wins");
    } else if (aaa === 3 || bbb === 3 || ccc === 3 || one === 3 || two === 3 || thr === 3 || rDi === 3 || lDi === 3) {
      player2.increaseScore();
      console.log("Player 2 Wins");
    } else if (aaa + bbb + ccc === 4) {
      console.log("Tie");
    } else {
      console.log(`${player.name}\'s turn.`);
    };
  };
  return { board, result };
})();

// Player factory and declaration
function createPlayer(name, symbol) {
  let score = 0;
  const displayScore = () => score;
  const increaseScore = () => { score++; };
  const change = () => {
    if (player === player1) {
      player = player2;
    } else {
      player = player1;
    };
  };
  const move = (location) => {
    if (location === "a1" && game.board[0][0] === "") {
      game.board[0][0] = symbol;
    } else if (location === "a2" && game.board[0][1] === "") {
      game.board[0][1] = symbol;
    } else if (location === "a3" && game.board[0][2] === "") {
      game.board[0][2] = symbol;
    } else if (location === "b1" && game.board[1][0] === "") {
      game.board[1][0] = symbol;
    } else if (location === "b2" && game.board[1][1] === "") {
      game.board[1][1] = symbol;
    } else if (location === "b3" && game.board[1][2] === "") {
      game.board[1][2] = symbol;
    } else if (location === "c1" && game.board[2][0] === "") {
      game.board[2][0] = symbol;
    } else if (location === "c2" && game.board[2][1] === "") {
      game.board[2][1] = symbol;
    } else if (location === "c3" && game.board[2][2] === "") {
      game.board[2][2] = symbol;
    } else {
      console.log("Spot taken. Move again.");
      // Run this a second time (below) so that player is rotated back to current player
      change();
    };
    change();
    game.result();
  };
  return { name, symbol, displayScore, move, change, increaseScore };
};
const player1 = createPlayer("Player 1", 0);
const player2 = createPlayer("Player 2", 1);
let player = player1;

// Display Controller IIFE
const displayController = (() => {

})();
