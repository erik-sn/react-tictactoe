if (process.env.BROWSER) {
  require('../sass/style.scss');
}

import React, { Component } from 'react';
import Modal from './modal';
import Footer from './footer';
import Box from './box';

import { isWinner } from '../utility/functions';

export default class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
      size: window.innerHeight,
      user: undefined,
      computer: undefined,
      game: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      winner: false,
    };
    this.onSelect = this.onSelect.bind(this);
  }

  componentWillMount() {
    this.adjustSize();
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.adjustSize();
    });
  }
  /**
   * Called when the user clicks on an empty box, set this box as
   * the user's label and then let the computer take a turn
   * @param  {any} id
   */
  onSelect(id) {
    const { game, computer } = this.state;
    const xy = id.replace('box', '');
    const x = parseInt(xy[0], 10);
    const y = parseInt(xy[1], 10);

    // check to make sure box isn't filled in already
    if (game[x][y] === '') {
      game[x][y] = this.state.user;
      this.setState({ game });
      this.makeMove(x, y);
    }
  }

  /**
   * Set the user as X or O, and set the computer as the opposite. Then
   * let the computer make the first move.
   * @param  {string} user
   */
  setUser(user) {
    const computer = user === 'X' ? 'O' : 'X';
    this.setState({ user, computer });
    this.makeMove();
  }

  adjustSize() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const smallest = height < width ? height : width;
    this.setState({ size: (smallest * 0.6) / 3 });
  }

  makeMove(userX, userY) {   
    console.log(isWinner)
    const { game, user, computer } = this.state;
    console.log(isWinner(game));
  }

  render() {
    const { game, size, user, labels } = this.state;
    const modal = (
      <Modal choice={(input) => this.setUser(input)} text={'Choose which player you want to be:'} />
    );
    const props = { size, labels, select: this.onSelect };

    return (
      <div>
        {!user ? modal : ''}
        <div id="app-container" style={!user ? { opacity: '0.3', width: size * 3 } : { width: size * 3 }} >
          <div className="box-row">
            <Box id="box00" val={game[0][0]} {...props} />
            <Box id="box01" val={game[0][1]} {...props} />
            <Box id="box02" val={game[0][2]} {...props} />
          </div>
          <div className="box-row">
            <Box id="box10" val={game[1][0]} {...props} />
            <Box id="box11" val={game[1][1]} {...props} />
            <Box id="box12" val={game[1][2]} {...props} />
          </div>
          <div className="box-row">
            <Box id="box20" val={game[2][0]} {...props} />
            <Box id="box21" val={game[2][1]} {...props} />
            <Box id="box22" val={game[2][2]} {...props} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
