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

