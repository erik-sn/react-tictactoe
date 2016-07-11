if (process.env.BROWSER) {
  require('../sass/style.scss');
}

import React, { Component } from 'react';
import Modal from './modal';
import Footer from './footer';
import Box from './box';

export default class Application extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      labels: {
        topLeft: '',
        topMiddle: '',
        topRight: '',
        middleLeft: '',
        middleMiddle: '',
        middleRight: '',
        bottomLeft: '',
        bottomMiddle: '',
        bottomRight: '',
      },
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(id) {
    const labels = this.state.labels;
    labels[id] = this.state.user;
    this.setState({ labels });
  }

  render() {
    const { user, labels } = this.state;
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
          <div className="box-row">
            <Box id="topLeft" labels={labels} select={this.onSelect} />
            <Box id="topMiddle" labels={labels} select={this.onSelect} />
            <Box id="topRight" labels={labels} select={this.onSelect} />
          </div>
          <div className="box-row">
            <Box id="middleLeft" labels={labels} select={this.onSelect} />
            <Box id="topmiddleMiddleMiddle" labels={labels} select={this.onSelect} />
            <Box id="topmiddleRightRight" labels={labels} select={this.onSelect} />
          </div>
          <div className="box-row">
            <Box id="bottomLeft" labels={labels} select={this.onSelect} />
            <Box id="bottomMiddle" labels={labels} select={this.onSelect} />
            <Box id="bottomRight" labels={labels} select={this.onSelect} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
