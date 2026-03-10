// Gameboard IIFE
const game = (() => {
  const xScore = document.querySelector("#x");
  const oScore = document.querySelector("#o");
  const board = [["", "", "",],
                 ["", "", "",],
                 ["", "", "",],];
  const reset = () => {
    game.board = [["", "", "",],
                  ["", "", "",],
                  ["", "", "",],];
    displayController.cells.forEach(cell => cell.textContent = "");
    player = player1
  };
  const result = () => {
    let aaa = game.board[0][0] + game.board[0][1] + game.board[0][2];
    let bbb = game.board[1][0] + game.board[1][1] + game.board[1][2];
    let ccc = game.board[2][0] + game.board[2][1] + game.board[2][2];
    let one = game.board[0][0] + game.board[1][0] + game.board[2][0];
    let two = game.board[0][1] + game.board[1][1] + game.board[2][1];
    let thr = game.board[0][2] + game.board[1][2] + game.board[2][2];
    let rDi = game.board[0][0] + game.board[1][1] + game.board[2][2];
    let lDi = game.board[0][2] + game.board[1][1] + game.board[2][0];
    if (aaa === 0 || bbb === 0 || ccc === 0 || one === 0 || two === 0 || thr === 0 || rDi === 0 || lDi === 0) {
      player1.increaseScore();
      xScore.textContent = `Score: ${player1.displayScore()}`;
      console.log("Player 1 Wins");
    } else if (aaa === 3 || bbb === 3 || ccc === 3 || one === 3 || two === 3 || thr === 3 || rDi === 3 || lDi === 3) {
      player2.increaseScore();
      oScore.textContent = `Score: ${player2.displayScore()}`;
      console.log("Player 2 Wins");
    } else if (aaa + bbb + ccc === 4) {
      console.log("Tie");
    } else {
      console.log(`${player.name}\'s turn.`);
    };
  };
  return { board, result, reset };
})();

// Player factory and declaration
function createPlayer(name, value, symbol) {
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
      game.board[0][0] = value;
    } else if (location === "a2" && game.board[0][1] === "") {
      game.board[0][1] = value;
    } else if (location === "a3" && game.board[0][2] === "") {
      game.board[0][2] = value;
    } else if (location === "b1" && game.board[1][0] === "") {
      game.board[1][0] = value;
    } else if (location === "b2" && game.board[1][1] === "") {
      game.board[1][1] = value;
    } else if (location === "b3" && game.board[1][2] === "") {
      game.board[1][2] = value;
    } else if (location === "c1" && game.board[2][0] === "") {
      game.board[2][0] = value;
    } else if (location === "c2" && game.board[2][1] === "") {
      game.board[2][1] = value;
    } else if (location === "c3" && game.board[2][2] === "") {
      game.board[2][2] = value;
    } else {
      return false;
    };
    change();
    game.result();
  };
  return { name, value, symbol, displayScore, move, change, increaseScore };
};
const player1 = createPlayer("Player 1", 0, "X");
const player2 = createPlayer("Player 2", 1, "O");
let player = player1;

// Display Controller IIFE
const displayController = (() => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.addEventListener("click", () => {
    let symbol = player.symbol;
    if (player.move(cell.id) === false) {
      console.log("Spot taken. Move again.");
    } else {
      cell.textContent = symbol;
    };
  }));
  return { cells };
})();
