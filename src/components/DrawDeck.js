/*****************************************
  This is the Draw Deck component
*****************************************/

import React, { Component } from 'react';
import cardBack from '../images/card-play-back.png';
import '../styles/DrawDeck.css';

class DrawDeck extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="drawDeck">
        <img name="drawDeckCardImage" src={cardBack} alt="Draw Deck back of card."/>
        <p></p>
      </div>
    );
  }
}

export default DrawDeck;