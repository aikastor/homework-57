import React from 'react';

const TriesCounter = (props) => {
  return (
    <p className='TriesCounter'>
      Tries: {props.triesCounter}
    </p>
  );
};

export default TriesCounter;