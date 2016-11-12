// var players = {
// 	handSize: null,
// 	currentHealth: null,
// 	cardCount: 4,
// 	inJail: false,
// 	hasDynamite: false,
// 	shootingRange: 1,
// 	regularRange: 1,
// 	enemySightRange: 1,
// 	ability: null,
// 	job: null
// }

var allCharacters = [
	{
		name: "Paul Regret",
		italianDescription: "Tutti i giocatori lo vedono a distanza aumentata di 1.",
		englishDescription: "All players see him at a distance increased by 1.",
		maxHealth: 3,
		enemySightRange: 0, //-1 from enemySightRange
	},
	{
		name: "Jourdonnais",
		italianDescription: "Ogni volta che è bersaglio di un BANG!, può ļestrarre!ļ: se esce Cuori, viene mancato",
		englishDescription: "Whenever he is the target of a BANG!, he may “draw!”: on a Heart, he is missed",
		maxHealth: 4,
		ability: null,
	},
	{
		name: "Black Jack",
		italianDescription, "Mostra la seconda carta che pesca. Se è Cuori o Quadri, pesca una carta in più.",
		englishDescription, "He shows the second card he draws. On Heart or Diamonds, he draws one more card.",
		maxHealth: 4,
		ability: null,
	},
	{
		name: "Slab The Killer",
		italianDescription: "Per evitare i suoi BANG! o c c o r r o n o d u e c a r t e Mancato!",
		englishDescription: "Player needs 2 Missed! cards to cancel his BANG! card.",
		maxHealth: 4,
		ability: null
	},
	{
		name: "El Gringo",
		italianDescription: "Ogni volta che viene ferito da un giocatore, pesca una carta dalla mano di quel giocatore.",
		englishDescription: "Each time he is hit by a player, he draws a card from the hand of that player",
		maxHealth: 3,
		ability: null
	},
	{
		name: "Jesse Jones",
		italianDescription: "Può pescare la prima carta dalla mano di un giocatore.",
		englishDescription: "He may draw his À rst card from the hand of a player.",
		maxHealth: 4,
		ability: null
	},
	{
		name: "Suzy Lafayette",
		italianDescription: "Appena rimane senza carte in mano, pesca una carta.",
		englishDescription: "As soon as she has no cards in hand, she draws a card.",
		maxHealth: 4,
		ability: null
	},
	{
		name: "WillyTheKid",
		italianDescription: "Può giocare un numero qualsiasi di carte BANG!",
		englishDescription: "He can play any number of BANG! cards.",
		maxHealth: 4,
		ability: null
	},
	{
		name: "RoseDoolan",
		italianDescription: "Vede tutti i giocatori a distanza diminuita di 1.",
		englishDescription: "She sees all players at a distance decreased by 1.",
		maxHealth: 4,
		regularRange: 2,
		shootingRange: 2	
	},
	{
		name: "BartCassidy",
		italianDescription: "Ogni volta che viene ferito, pesca una carta.",
		englishDescription: "Each time he is hit, he draws a card.",
		maxHealth: 4,
		ability: null
	},
	{
		name: "PedroRamirez",
		italianDescription: "Può pescare la prima carta dalla cima degli scarti.",
		englishDescription: "He may draw his À rst card from the discard pile.",
		maxHealth: 4,
		ability: null
	},
	{
		name: "SidKetchum",
		italianDescription: "Può scartare 2 carte per recuperare un punto vita.",
		englishDescription: "He may discard 2 cards to regain one life point.",
		maxHealth: 4,
		ability: null
	},
	{
		name: "LuckyDuke",
		italianDescription: "Ogni volta che deve ļestrarre!ļ, scopre 2 carte e sceglie.",
		englishDescription: "Each time he “draws!”, he flips the top two cards and chooses one.",
		maxHealth: 4,
		ability: null
	},
	{
		name: "VultureSam",
		italianDescription: "Quando un personaggio è eliminato, prende in mano tutte le carte di quel personaggio.",
		englishDescription: "Whenever a player is eliminated from play, he takes in hand all the cards of that player.",
		maxHealth: 4,
		ability: null
	},
	{
		name: "CalamidyJanet",
		italianDescription: "Può giocare le carte BANG! come carte Mancato!, e viceversa.",
		englishDescription: "She can play BANG! cards as Missed! cards and vice versa",
		maxHealth: 4,
		ability: null
	},
	{
		name: "KitCarlson",
		italianDescription: "Guarda le prime tre carte del mazzo e sceglie le due da pescare.",
		englishDescription: "He looks at the top three cards of the deck and chooses the 2 to draw.",
		maxHealth: 4,
		ability: null	
	}

];


function modifyShootingRange (distance, player){ //need to add overarching function to reverse effects when item is removed.
	player.shootingRange += distance;
}
var guns = {
	{
	name:"Schofield",
	ability: increaseShootingRange(2)
	}, //curry with character name
	{
	name:"Volcanic",
	ability: null
	}, //has ability but no distance modification		
	{
	name:"Rev. Carabine",
	ability: increaseShootingRange(4)
	},
	{
	name:"Winchester",
	ability: increaseShootingRange(5)
	},
	{
	name:"Remington",
	ability: increaseShootingRange(3)
	}
}

var roles: {
		sheriff: {
			englishTitle: "Sheriff",
			italianTitle: "Sceriffo",
			italianDescription: "Elimina tutti i fuorilegge e il Rinnegato!",
			englishDescription: "Kill all the Outlaws and the Renegade!",
			ability: function(player) {player.maxHealth += 1},
			goal: null
		},
		deputy: { 
			englishTitle: "Deputy Sheriff",
			italianTitle: "Vice",
			italianDescription: "Proteggi lo Sceriffo! Elimina t u t t i i F u o r i l e g g e e i l Rinnegato!",
			englishDescription: "Protect the Sheriff! Kill all the Outlaws and the Renegade",
			goal: null
			}, 
		renegade: {
			englishTitle: "Renegade",
			italianTitle: "Rinnegato",
			italianDescription: "Rimani l’ultimo personaggio in gioco!",
			englishDescription: "Be the last one in play!",
			goal: null
			},
		outlaw: {
			englishTitle: "Outlaw",
			italianTitle: "Fuorilegge",
			italianDescription: "Elimina lo Sceriffo!",
			englishDescription: "Kill the Sheriff!",
			goal: null
			},
	},
var playingCards: {
		bang: {
			englishTitle: "Bang!",
			ability: null
		},
		missed: {
			englishTitle: "Missed!",
			italianTitle: "Mancato!",
			ability: null
		},
		beer: {
			englishTitle: "Beer",
			italianTitle: "Birra",
			ability: null
		},
		panic: {
			englishTitle: "Panic!",
			italianTitle: "Panico!",
			ability: null
		},
		catBalou: {
			englishTitle: "Cat Balou",
			ability: null
		},
		stagecoach: {
			englishTitle: "Stagecoach",
			italianTitle: "Diligenza",
			ability: null
		},
		wellsFargo: {
			englishTitle: "Wells Fargo",
			ability: null
		}, 
		gatling: {
			englishTitle: "Gatling",
			ability: null
		},
		duel: {
			englishTitle: "Duel",
			italianTitle: "Duello",
			italianDescription: "Un giocatore scarta un BANG!, poi tu, ecc. Il primo che non lo fa perde 1 punto vita.",
			englishDescription: "A target player discards a BANG!, then you, etc. First player failing to discard a BANG! loses 1 life point.",
			ability: null
		},
		indians: {
			englishTitle: "Indians!",
			italianTitle: "Indiani!",
			italianDescription: "Tutti gli altri scartano un BANG! o perdono 1 punto vita.",
			englishDescription: "All other players discard a BANG! or lose 1 life point.",
			ability: null
		},
		generalStore: {
			englishTitle: "General Store",
			italianTitle: "Emporio",
			italianDescription: "Rivela carte quanti i giocatori. Ognuno ne pesca una.",
			englishDescription: "Reveal as many cards as players. Each player draws one.",
			ability: null
		},
		saloon: {
			englishTitle: "Saloon",
			ability: null
		},
};

var permanentCards: {
		jail: {
			englishTitle: "Jail",
			italianTitle: "Prigione",
			italianDescription: "Scarta la Prigione e gioca. Altrimenti scarta la Prigione e salta il turno.",
			englishDescription: "Discard tha Jail, play normally. Else discard the Jail and skip your turn.",
			ability: null
			},
		dynamite: {
			englishTitle: "Dynamite",
			italianTitle: "Dinamite",
			italianDescription: "Perdi 3 punti vita. Se no passa la Dinamite a sinistra.",
			englishDescription: "Lose 3 life points. Else pass the Dynamite on your left.",
			ability: null
			},
		barrel: {
			englishTitle: "Barrel",
			italianTitle: "Barile",
			ability: null
			},
		scope: {
			englishTitle: "Scope",
			italianTitle: "Mirino",
			italianDescription: "Tu vedi gli altri a distanza -1.",
			englishDescription: "You view others at distance -1.",
			ability: null
			},
		mustang: {
			englishTitle: "Mustang", //same in both languages
			italianDescription: "Gli altri ti vedono a distanza +1",
			englishDescription: "Others view you at distance +1."
			ability: null
			},
	}


var deck = {
	roles: {
		sheriff: 1,
		deputy: 2, 
		renegade: 1,
		outlaw: 3
	},
	characters:{
		paulRegret: 1,
		jourdonnais: 1,
		blackJack: 1,
		slabTheKiller: 1,
		elGringo: 1,
		jesseJones: 1,
		suzyLafayette: 1,
		willyTheKid: 1,
		roseDoolan: 1,
		bartCassidy: 1,
		pedroRamirez: 1,
		sidKetchum: 1, 
		luckyDuke: 1,
		vultureSam: 1,
		calamidyJanet: 1,
		kitCarlson: 1
	},
	weapons: {
		schofield: 3,
		volcanic: 2,
		revCarabine: 1,
		winchester: 1,
		remington: 1
	},
	playingCards: {
		bang: 25,
		missed: 12,
		beer: 6,
		panic: 4,
		catBalou: 4,
		Stagecoach: 2,
		wellsFargo: 1,
		gatling: 1,
		duel: 3,
		indians: 2,
		generalStore: 2,
		saloon: 1 
	},
	permanentCards: {
		jail: 3,
		dynamite: 1,
		barrel: 2,
		scope: 1,
		mustang: 2
	}
}