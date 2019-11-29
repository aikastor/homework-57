import React, {Component} from 'react';
import Tiles from "./components/Tiles/Tiles";

import './App.css';
import TriesCounter from "./components/TriesCounter/TriesCounter";
import ResetButton from "./components/ResetButton/ResetButton";

class App extends Component {
  state= {
    tiles: [false,false,false,false,false,false,false,false,false,false,false,false,
            false,false,false,false,false,false,false,false,false,false,false,false,
            false,false,false,false,false,false,false,false,false,false,false,false,],
    randomTileNum: Math.floor(Math.random() * 36),
    bombFound: false,
    tries: 0,
  };
  openTile = index => {
    let bombFound = this.state.bombFound;
    if (!bombFound) {
      const tiles = [...this.state.tiles];
      const mine = this.state.randomTileNum;
      tiles[index] = true;

      if(index === mine) {
        bombFound = true;
        tiles[index] = 'bomb';
      }
      let tries = this.state.tries;
      tries ++;
      this.setState({tiles, tries, bombFound});
    } else {
      alert('Bomb found! Reset the game!')
    }


  };
  resetTiles = () =>{
    let tiles = [...this.state.tiles].map(tile => {
      return tile = false;
    });
    this.setState({tiles, randomTileNum: Math.floor(Math.random() * 36), bombFound: false, tries: 0});
  };
  render() {
    return (
      <div className='App'>
        <h3 className='h3'>Mine Sweeper</h3>
        <Tiles tiles={this.state.tiles}
               openTile={this.openTile}
        />
        <TriesCounter
          triesCounter={this.state.tries}
        />
        <ResetButton onClick={this.resetTiles}/>
      </div>
    );
  }
}

export default App;