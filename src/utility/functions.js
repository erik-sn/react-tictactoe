export function Exception(message) {
  this.message = message;
  this.name = 'Exception';
}

export function isWinner(game) {
  function check(game, player, x, y, n) {
    // cols, rows, left-diagonal, right-diagonal respectively
    const counts = [0, 0, 0, 0];
    for (let i = 0; i < n; i++) {
      counts[0] = game[x][i] === player ? counts[0] + 1 : counts[0];
      counts[1] = game[i][y] === player ? counts[1] + 1 : counts[1];
      counts[2] = game[i][i] === player ? counts[2] + 1 : counts[2];
      counts[3] = game[i][n - i - 1] === player ? counts[3] + 1 : counts[3];
    }
    return counts.some(count => count === n);
  }

  // input validation
  const n = game.length;
  const test = 1;
  if (!Array.isArray(game)) {
    throw new Exception('The input game must be a square array of arrays');
  } else {
    game.forEach(row => {
      if (!Array.isArray(row)) {
        throw new Exception('The input game must be a square array of arrays');
      }
    })
  }
  if (game.some(row => row.length !== n)) {
    throw new Exception('The input game was not a square board');
  }

  // iterate over all boxes - if the space contains a mark, search
  // all related columns, rows, and both diagonals to see if the
  // game is won
  for (let x = 0; x < game.length; x++) {
    for (let y = 0; y < game.length; y++) {
      if (game[x][y] !== '' && check(game, game[x][y], x, y, n)) {
        return game[x][y];
      }
    }
  }
  return false;
}


/**
    If the game is over, return the score from X's perspective.
    Otherwise get a list of new game states for every possible move
    Create a scores list
    For each of these states add the minimax result of that state to the scores list
    If it's X's turn, return the maximum score from the scores list
    If it's O's turn, return the minimum score from the scores list
 */
export function minimax(game, player) {
  // check to see if there is a winner, return from player's perspective
  const result = isWinner(game);
  if (result === player) {
    return 10;
  } else if (result) {
    return -10;
  }

  const scores = [];
  const moves = [];

  // find open spaces
  for (let x = 0; x < game.length; x++) {
    for (let y = 0; y < game.length; y++) {
      if (game[x][y] === '') {
        moves.push([x, y]);
      }
    }
  }

  moves.forEach(move => {
    const possibleGame = game[move[0]][move[1]];
    scores.push(minimax(possibleGame));
  });
  console.log(scores);
}

