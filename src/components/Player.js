/*****************************************
  This is the Player component

*****************************************/

import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {character: this.props.character}, //contains name, italianDescription, maxHealth, englishDescription, and ability
      currentHealth: null,
      cardCount: 4,
      inJail: false,
      hasDynamite: false,
      shootRange: 1,
      regularRange: 1,
      ability: null,
      role: null
    }
  }

  componentDidMount() {
    this.setState({character: this.props.character});
  }

  ability(callback) {

  }

  render() {
    return (
      <div>{this.state.character.name}</div>
    )
  }
}

export default Player;