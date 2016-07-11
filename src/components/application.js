if (process.env.BROWSER) {
  require('../sass/style.scss');
}

import React, { Component } from 'react';
import Modal from './modal';
import Footer from './footer';


export default class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
  }

  render() {
    const { showModal, user } = this.state;
    const modal = (
      <Modal
        choice={(choice) => this.setState({ user: choice })}
        text={'Choose which player you want to be:'}
      />
    );

    return (
      <div>
        {!user ? modal : ''}
        <div id="app-container" style={!user ? { opacity: '0.3' } : {}} >

        </div>
        <Footer />
      </div>
    );
  }
}
