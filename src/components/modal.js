import React from 'react';

const Modal = (props) => {
  const { text, choice } = props;
  return (
    <div className="modal">
      <div id="modal-text">{text}</div>
      <div id="choice-container">
        <div className="user-choice" onClick={() => choice('X')}>X</div>
        <div className="user-choice" onClick={() => choice('O')}>O</div>
      </div>
    </div>
  );
};

export default Modal;
