import React from 'react';
import './ResetButton.css';

const ResetButton = (props) => {
  return (
    <div className='buttonContainer'
         onClick={props.onClick}>
      <button>RESET GAME</button>
    </div>
  );
};

export default ResetButton;