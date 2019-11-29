import React from 'react';
import Tile from "../Tile/Tile";

import './Tiles.css';


const Tiles = (props) => {

  const tiles = props.tiles.map( (tile, index) => {
    let className = tile === 'bomb' ? 'bomb' : tile ? 'white' : 'gray';
      return (<Tile onClick={()=>props.openTile(index)} key={'tile'+index} className={className}/>)
    }
  );


  return (
    <div className='TilesContainer'>
      {tiles}
    </div>
  )
};

export default Tiles;