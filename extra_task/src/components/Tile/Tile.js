import React from 'react';
import './Tile.css';

const Tile = (props) => {
  return (
    <div className={'Tile ' + props.className} onClick={props.onClick} >
    </div>
  );
};

export default Tile;