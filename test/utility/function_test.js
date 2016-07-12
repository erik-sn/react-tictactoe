import { Exception, isWinner } from '../../src/utility/functions';
import { expect } from 'chai';

describe('isWinner', () => {

  it('throws an error if the input is not square', () => {
    const game1 = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    expect(() => isWinner(game1)).to.throw(new Exception('The input game was not a square board'));

    const game2 = [
      ['', '', ''],
      ['', '', ''],
    ];
    expect(() => isWinner(game2)).to.throw(new Exception('The input game was not a square board'));
  });

  it('Returns false if there is no winner', () => {
    const game1 = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    expect(isWinner(game1)).to.equal(false);

    const game2 = [
      ['X', 'X', ''],
      ['', 'X', ''],
      ['', '', ''],
    ];
    expect(isWinner(game2)).to.equal(false);

    const game3 = [
      ['X', 'X', ''],
      ['X', 'X', ''],
      ['', '', ''],
    ];
    expect(isWinner(game3)).to.equal(false);

    const game4 = [
      ['X', 'O', 'X'],
      ['O', '', 'O'],
      ['X', 'O', 'X'],
    ];
    expect(isWinner(game4)).to.equal(false);
  });

  it('Returns the winning player if the game is won', () => {
    const game1 = [
      ['X', 'X', 'X'],
      ['', '', ''],
      ['', '', ''],
    ];
    expect(isWinner(game1)).to.equal('X');

    const game2 = [
      ['X', '', ''],
      ['', 'X', ''],
      ['', '', 'X'],
    ];
    expect(isWinner(game2)).to.equal('X');

    const game3 = [
      ['', 'X', ''],
      ['', 'X', ''],
      ['', 'X', ''],
    ];
    expect(isWinner(game3)).to.equal('X');

    const game4 = [
      ['', 'O', 'X'],
      ['O', 'X', 'O'],
      ['X', 'O', ''],
    ];
    expect(isWinner(game4)).to.equal('X');
  });

  it('supports games of any size', () => {
    // build games with first row filled out as X's
    for (let size = 2; size < 10; size++) {
      const game = [];
      for (let rowIndex = 0; rowIndex < size; rowIndex++) {
        const row = [];
        for (let colIndex = 0; colIndex < size; colIndex++) {
          if (rowIndex === 0) {
            row.push('X');
          } else {
            row.push('');
          }
        }
        game.push(row);
      }
      expect(isWinner(game)).to.equal('X');
    }

  });
});
