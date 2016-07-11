import React from 'react';

const Box = (props) => {
  const { id, select, labels } = props;
  return (
    <div
      id={id}
      className="box"
      onClick={() => select(id)}
    >
    {labels[id]}
    </div>
  );
};

export default Box;
