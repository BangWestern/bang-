/*****************************************
  This is the Top level game Board
  
  Currently only controls the rendering of
    - Other players
    - Your Player
    - Draw Deck
*****************************************/

import React, { Component } from 'react';
//import logo from '../styles/logo.svg';
import DrawDeck from './DrawDeck';
import OtherPlayers from './OtherPlayers';
import Player from './Player';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div id="Board">
        <div id="drawDeck">
          <DrawDeck />
        </div>
        <div id="otherPlayers">
          <OtherPlayers />
        </div>
        <div id="player">
          <Player />
        </div>
      </div>
    );
  }
}

export default App;
