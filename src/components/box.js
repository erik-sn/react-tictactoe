if (process.env.BROWSER) {
  require('../sass/box.scss');
}

import React from 'react';

const Box = (props) => {
  const { id, select, size, val } = props;
  return (
    <div
      id={id}
      style={{ height: size, width: size, fontSize: size * 0.5 }}
      className="box"
      onClick={() => select(id)}
    >
    {val}
    </div>
  );
};

export default Box;
