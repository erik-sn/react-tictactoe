if (process.env.BROWSER) {
  require('../styles/box.scss');
}

import React from 'react';

const Box = (props) => {
  const { id, select, size, val } = props;
  return (
    <div
      id={id}
      style={{ height: size, width: size, fontSize: size * 0.5, cursor: val ? 'auto' : 'pointer' }}
      className={`box ${val ? '' : 'open-box'}`}
      onClick={() => select(id)}
    >
    {val}
    </div>
  );
};

export default Box;
