/*****************************************
  This is the Top level game Board
  
  Currently only controls the rendering of
    - Other players
    - Your Player
    - Draw Deck
*****************************************/

import React, { Component } from 'react';

//IMPORT OTHER COMPONENTS
import DrawDeck from './DrawDeck';
import OtherPlayers from './OtherPlayers';
import Player from './Player';

//IMPORT STYLES
//import logo from '../styles/logo.svg';
import '../styles/App.css';

//IMPORT SAMPLE DATA
import characterData from '../data/sampleData';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="Board">
        <div className="drawDeck-container">
          <DrawDeck />
        </div>
        <div className="otherPlayers-container">
          <OtherPlayers />
        </div>
        <div className="player-container">
          <Player character={characterData[0]}/>
        </div>
      </div>
    );
  }
}

export default App;
