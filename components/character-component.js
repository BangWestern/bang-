var React = require("react");   

class Character extends React.Component {
	constructor(characterProp){
		super(characterProp)

		this.state = {
			character: {characterProp},//contains name, italianDescription,
			// maxHealth, englishDescription, and ability
			handSize: null,
			currentHealth: null, //same as hand size
			cardCount: 4,
			inJail: false,
			hasDynamite: false,
			shootingRange: 1,
			regularRange: 1,
			enemySightRange: 1,
			ability: null,
			job: null
		}
	}

	ability(function){

	}

	render(){

	}
}

class App extends React.Component {
	constructor(){
		super()

		this.state = {

		}
	}
	//we can add multiple Character class components for each player with different character props to differentiate 
	render(){
		<Character /> 
		<Character />
		<Character />	
	}
	
}
