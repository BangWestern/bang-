"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cardsCharacter = [{
  name: "Paul Regret",
  italianDescription: "Tutti i giocatori lo vedono a distanza aumentata di 1.",
  englishDescription: "All players see him at a distance increased by 1.",
  maxHealth: 3,
  ability: null
}, {
  name: "Jourdonnais",
  italianDescription: "Ogni volta che è bersaglio di un BANG!, può ļestrarre!ļ: se esce Cuori, viene mancato",
  englishDescription: "Whenever he is the target of a BANG!, he may “draw!”: on a Heart, he is missed",
  maxHealth: 4,
  ability: null
}, {
  name: "Black Jack",
  italianDescription: "Mostra la seconda carta che pesca. Se è Cuori o Quadri, pesca una carta in più.",
  englishDescription: "He shows the second card he draws. On Heart or Diamonds, he draws one more card.",
  maxHealth: 4,
  ability: null
}, {
  name: "Slab The Killer",
  italianDescription: "Per evitare i suoi BANG! o c c o r r o n o d u e c a r t e Mancato!",
  englishDescription: "Player needs 2 Missed! cards to cancel his BANG! card.",
  maxHealth: 4,
  ability: null
}, {
  name: "El Gringo",
  italianDescription: "Ogni volta che viene ferito da un giocatore, pesca una carta dalla mano di quel giocatore.",
  englishDescription: "Each time he is hit by a player, he draws a card from the hand of that player",
  maxHealth: 3,
  ability: null
}, {
  name: "Jesse Jones",
  italianDescription: "Può pescare la prima carta dalla mano di un giocatore.",
  englishDescription: "He may draw his À rst card from the hand of a player.",
  maxHealth: 4,
  ability: null
}, {
  name: "Suzy Lafayette",
  italianDescription: "Appena rimane senza carte in mano, pesca una carta.",
  englishDescription: "As soon as she has no cards in hand, she draws a card.",
  maxHealth: 4,
  ability: null
}, {
  name: "WillyTheKid",
  italianDescription: "Può giocare un numero qualsiasi di carte BANG!",
  englishDescription: "He can play any number of BANG! cards.",
  maxHealth: 4,
  ability: null
}, {
  name: "RoseDoolan",
  italianDescription: "Vede tutti i giocatori a distanza diminuita di 1.",
  englishDescription: "She sees all players at a distance decreased by 1.",
  maxHealth: 4,
  ability: null
}, {
  name: "BartCassidy",
  italianDescription: "Ogni volta che viene ferito, pesca una carta.",
  englishDescription: "Each time he is hit, he draws a card.",
  maxHealth: 4,
  ability: null
}, {
  name: "PedroRamirez",
  italianDescription: "Può pescare la prima carta dalla cima degli scarti.",
  englishDescription: "He may draw his À rst card from the discard pile.",
  maxHealth: 4,
  ability: null
}, {
  name: "SidKetchum",
  italianDescription: "Può scartare 2 carte per recuperare un punto vita.",
  englishDescription: "He may discard 2 cards to regain one life point.",
  maxHealth: 4,
  ability: null
}, {
  name: "LuckyDuke",
  italianDescription: "Ogni volta che deve ļestrarre!ļ, scopre 2 carte e sceglie.",
  englishDescription: "Each time he “draws!”, he flips the top two cards and chooses one.",
  maxHealth: 4,
  ability: null
}, {
  name: "VultureSam",
  italianDescription: "Quando un personaggio è eliminato, prende in mano tutte le carte di quel personaggio.",
  englishDescription: "Whenever a player is eliminated from play, he takes in hand all the cards of that player.",
  maxHealth: 4,
  ability: null
}, {
  name: "CalamidyJanet",
  italianDescription: "Può giocare le carte BANG! come carte Mancato!, e viceversa.",
  englishDescription: "She can play BANG! cards as Missed! cards and vice versa",
  maxHealth: 4,
  ability: null
}, {
  name: "KitCarlson",
  italianDescription: "Guarda le prime tre carte del mazzo e sceglie le due da pescare.",
  englishDescription: "He looks at the top three cards of the deck and chooses the 2 to draw.",
  maxHealth: 4,
  ability: null
}];

exports.default = cardsCharacter;

/*
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
}*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhL3NhbXBsZURhdGEuanMiXSwibmFtZXMiOlsiY2FyZHNDaGFyYWN0ZXIiLCJuYW1lIiwiaXRhbGlhbkRlc2NyaXB0aW9uIiwiZW5nbGlzaERlc2NyaXB0aW9uIiwibWF4SGVhbHRoIiwiYWJpbGl0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJQSxpQkFBaUIsQ0FDbkI7QUFDRUMsUUFBTSxhQURSO0FBRUVDLHNCQUFvQix3REFGdEI7QUFHRUMsc0JBQW9CLG1EQUh0QjtBQUlFQyxhQUFXLENBSmI7QUFLRUMsV0FBUztBQUxYLENBRG1CLEVBUW5CO0FBQ0VKLFFBQU0sYUFEUjtBQUVFQyxzQkFBb0IsdUZBRnRCO0FBR0VDLHNCQUFvQixnRkFIdEI7QUFJRUMsYUFBVyxDQUpiO0FBS0VDLFdBQVM7QUFMWCxDQVJtQixFQWVuQjtBQUNFSixRQUFNLFlBRFI7QUFFRUMsc0JBQW9CLGlGQUZ0QjtBQUdFQyxzQkFBb0Isa0ZBSHRCO0FBSUVDLGFBQVcsQ0FKYjtBQUtFQyxXQUFTO0FBTFgsQ0FmbUIsRUFzQm5CO0FBQ0VKLFFBQU0saUJBRFI7QUFFRUMsc0JBQW9CLHFFQUZ0QjtBQUdFQyxzQkFBb0Isd0RBSHRCO0FBSUVDLGFBQVcsQ0FKYjtBQUtFQyxXQUFTO0FBTFgsQ0F0Qm1CLEVBNkJuQjtBQUNFSixRQUFNLFdBRFI7QUFFRUMsc0JBQW9CLDRGQUZ0QjtBQUdFQyxzQkFBb0IsK0VBSHRCO0FBSUVDLGFBQVcsQ0FKYjtBQUtFQyxXQUFTO0FBTFgsQ0E3Qm1CLEVBb0NuQjtBQUNFSixRQUFNLGFBRFI7QUFFRUMsc0JBQW9CLHdEQUZ0QjtBQUdFQyxzQkFBb0IsdURBSHRCO0FBSUVDLGFBQVcsQ0FKYjtBQUtFQyxXQUFTO0FBTFgsQ0FwQ21CLEVBMkNuQjtBQUNFSixRQUFNLGdCQURSO0FBRUVDLHNCQUFvQixxREFGdEI7QUFHRUMsc0JBQW9CLHdEQUh0QjtBQUlFQyxhQUFXLENBSmI7QUFLRUMsV0FBUztBQUxYLENBM0NtQixFQWtEbkI7QUFDRUosUUFBTSxhQURSO0FBRUVDLHNCQUFvQixnREFGdEI7QUFHRUMsc0JBQW9CLHdDQUh0QjtBQUlFQyxhQUFXLENBSmI7QUFLRUMsV0FBUztBQUxYLENBbERtQixFQXlEbkI7QUFDRUosUUFBTSxZQURSO0FBRUVDLHNCQUFvQixtREFGdEI7QUFHRUMsc0JBQW9CLG9EQUh0QjtBQUlFQyxhQUFXLENBSmI7QUFLRUMsV0FBUztBQUxYLENBekRtQixFQWdFbkI7QUFDRUosUUFBTSxhQURSO0FBRUVDLHNCQUFvQiwrQ0FGdEI7QUFHRUMsc0JBQW9CLHVDQUh0QjtBQUlFQyxhQUFXLENBSmI7QUFLRUMsV0FBUztBQUxYLENBaEVtQixFQXVFbkI7QUFDRUosUUFBTSxjQURSO0FBRUVDLHNCQUFvQixxREFGdEI7QUFHRUMsc0JBQW9CLG1EQUh0QjtBQUlFQyxhQUFXLENBSmI7QUFLRUMsV0FBUztBQUxYLENBdkVtQixFQThFbkI7QUFDRUosUUFBTSxZQURSO0FBRUVDLHNCQUFvQixvREFGdEI7QUFHRUMsc0JBQW9CLGtEQUh0QjtBQUlFQyxhQUFXLENBSmI7QUFLRUMsV0FBUztBQUxYLENBOUVtQixFQXFGbkI7QUFDRUosUUFBTSxXQURSO0FBRUVDLHNCQUFvQiw0REFGdEI7QUFHRUMsc0JBQW9CLG9FQUh0QjtBQUlFQyxhQUFXLENBSmI7QUFLRUMsV0FBUztBQUxYLENBckZtQixFQTRGbkI7QUFDRUosUUFBTSxZQURSO0FBRUVDLHNCQUFvQix1RkFGdEI7QUFHRUMsc0JBQW9CLDJGQUh0QjtBQUlFQyxhQUFXLENBSmI7QUFLRUMsV0FBUztBQUxYLENBNUZtQixFQW1HbkI7QUFDRUosUUFBTSxlQURSO0FBRUVDLHNCQUFvQiw4REFGdEI7QUFHRUMsc0JBQW9CLDBEQUh0QjtBQUlFQyxhQUFXLENBSmI7QUFLRUMsV0FBUztBQUxYLENBbkdtQixFQTBHbkI7QUFDRUosUUFBTSxZQURSO0FBRUVDLHNCQUFvQixrRUFGdEI7QUFHRUMsc0JBQW9CLHdFQUh0QjtBQUlFQyxhQUFXLENBSmI7QUFLRUMsV0FBUztBQUxYLENBMUdtQixDQUFyQjs7a0JBbUhlTCxjOztBQUVmIiwiZmlsZSI6InNhbXBsZURhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2FyZHNDaGFyYWN0ZXIgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlBhdWwgUmVncmV0XCIsXG4gICAgaXRhbGlhbkRlc2NyaXB0aW9uOiBcIlR1dHRpIGkgZ2lvY2F0b3JpIGxvIHZlZG9ubyBhIGRpc3RhbnphIGF1bWVudGF0YSBkaSAxLlwiLFxuICAgIGVuZ2xpc2hEZXNjcmlwdGlvbjogXCJBbGwgcGxheWVycyBzZWUgaGltIGF0IGEgZGlzdGFuY2UgaW5jcmVhc2VkIGJ5IDEuXCIsXG4gICAgbWF4SGVhbHRoOiAzLFxuICAgIGFiaWxpdHk6IG51bGxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSm91cmRvbm5haXNcIixcbiAgICBpdGFsaWFuRGVzY3JpcHRpb246IFwiT2duaSB2b2x0YSBjaGUgw6ggYmVyc2FnbGlvIGRpIHVuIEJBTkchLCBwdcOyIMS8ZXN0cmFycmUhxLw6IHNlIGVzY2UgQ3VvcmksIHZpZW5lIG1hbmNhdG9cIixcbiAgICBlbmdsaXNoRGVzY3JpcHRpb246IFwiV2hlbmV2ZXIgaGUgaXMgdGhlIHRhcmdldCBvZiBhIEJBTkchLCBoZSBtYXkg4oCcZHJhdyHigJ06IG9uIGEgSGVhcnQsIGhlIGlzIG1pc3NlZFwiLFxuICAgIG1heEhlYWx0aDogNCxcbiAgICBhYmlsaXR5OiBudWxsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkJsYWNrIEphY2tcIixcbiAgICBpdGFsaWFuRGVzY3JpcHRpb246IFwiTW9zdHJhIGxhIHNlY29uZGEgY2FydGEgY2hlIHBlc2NhLiBTZSDDqCBDdW9yaSBvIFF1YWRyaSwgcGVzY2EgdW5hIGNhcnRhIGluIHBpw7kuXCIsXG4gICAgZW5nbGlzaERlc2NyaXB0aW9uOiBcIkhlIHNob3dzIHRoZSBzZWNvbmQgY2FyZCBoZSBkcmF3cy4gT24gSGVhcnQgb3IgRGlhbW9uZHMsIGhlIGRyYXdzIG9uZSBtb3JlIGNhcmQuXCIsXG4gICAgbWF4SGVhbHRoOiA0LFxuICAgIGFiaWxpdHk6IG51bGxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU2xhYiBUaGUgS2lsbGVyXCIsXG4gICAgaXRhbGlhbkRlc2NyaXB0aW9uOiBcIlBlciBldml0YXJlIGkgc3VvaSBCQU5HISBvIGMgYyBvIHIgciBvIG4gbyBkIHUgZSBjIGEgciB0IGUgTWFuY2F0byFcIixcbiAgICBlbmdsaXNoRGVzY3JpcHRpb246IFwiUGxheWVyIG5lZWRzIDIgTWlzc2VkISBjYXJkcyB0byBjYW5jZWwgaGlzIEJBTkchIGNhcmQuXCIsXG4gICAgbWF4SGVhbHRoOiA0LFxuICAgIGFiaWxpdHk6IG51bGxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRWwgR3JpbmdvXCIsXG4gICAgaXRhbGlhbkRlc2NyaXB0aW9uOiBcIk9nbmkgdm9sdGEgY2hlIHZpZW5lIGZlcml0byBkYSB1biBnaW9jYXRvcmUsIHBlc2NhIHVuYSBjYXJ0YSBkYWxsYSBtYW5vIGRpIHF1ZWwgZ2lvY2F0b3JlLlwiLFxuICAgIGVuZ2xpc2hEZXNjcmlwdGlvbjogXCJFYWNoIHRpbWUgaGUgaXMgaGl0IGJ5IGEgcGxheWVyLCBoZSBkcmF3cyBhIGNhcmQgZnJvbSB0aGUgaGFuZCBvZiB0aGF0IHBsYXllclwiLFxuICAgIG1heEhlYWx0aDogMyxcbiAgICBhYmlsaXR5OiBudWxsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkplc3NlIEpvbmVzXCIsXG4gICAgaXRhbGlhbkRlc2NyaXB0aW9uOiBcIlB1w7IgcGVzY2FyZSBsYSBwcmltYSBjYXJ0YSBkYWxsYSBtYW5vIGRpIHVuIGdpb2NhdG9yZS5cIixcbiAgICBlbmdsaXNoRGVzY3JpcHRpb246IFwiSGUgbWF5IGRyYXcgaGlzIMOAIHJzdCBjYXJkIGZyb20gdGhlIGhhbmQgb2YgYSBwbGF5ZXIuXCIsXG4gICAgbWF4SGVhbHRoOiA0LFxuICAgIGFiaWxpdHk6IG51bGxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiU3V6eSBMYWZheWV0dGVcIixcbiAgICBpdGFsaWFuRGVzY3JpcHRpb246IFwiQXBwZW5hIHJpbWFuZSBzZW56YSBjYXJ0ZSBpbiBtYW5vLCBwZXNjYSB1bmEgY2FydGEuXCIsXG4gICAgZW5nbGlzaERlc2NyaXB0aW9uOiBcIkFzIHNvb24gYXMgc2hlIGhhcyBubyBjYXJkcyBpbiBoYW5kLCBzaGUgZHJhd3MgYSBjYXJkLlwiLFxuICAgIG1heEhlYWx0aDogNCxcbiAgICBhYmlsaXR5OiBudWxsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIldpbGx5VGhlS2lkXCIsXG4gICAgaXRhbGlhbkRlc2NyaXB0aW9uOiBcIlB1w7IgZ2lvY2FyZSB1biBudW1lcm8gcXVhbHNpYXNpIGRpIGNhcnRlIEJBTkchXCIsXG4gICAgZW5nbGlzaERlc2NyaXB0aW9uOiBcIkhlIGNhbiBwbGF5IGFueSBudW1iZXIgb2YgQkFORyEgY2FyZHMuXCIsXG4gICAgbWF4SGVhbHRoOiA0LFxuICAgIGFiaWxpdHk6IG51bGxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUm9zZURvb2xhblwiLFxuICAgIGl0YWxpYW5EZXNjcmlwdGlvbjogXCJWZWRlIHR1dHRpIGkgZ2lvY2F0b3JpIGEgZGlzdGFuemEgZGltaW51aXRhIGRpIDEuXCIsXG4gICAgZW5nbGlzaERlc2NyaXB0aW9uOiBcIlNoZSBzZWVzIGFsbCBwbGF5ZXJzIGF0IGEgZGlzdGFuY2UgZGVjcmVhc2VkIGJ5IDEuXCIsXG4gICAgbWF4SGVhbHRoOiA0LFxuICAgIGFiaWxpdHk6IG51bGxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiQmFydENhc3NpZHlcIixcbiAgICBpdGFsaWFuRGVzY3JpcHRpb246IFwiT2duaSB2b2x0YSBjaGUgdmllbmUgZmVyaXRvLCBwZXNjYSB1bmEgY2FydGEuXCIsXG4gICAgZW5nbGlzaERlc2NyaXB0aW9uOiBcIkVhY2ggdGltZSBoZSBpcyBoaXQsIGhlIGRyYXdzIGEgY2FyZC5cIixcbiAgICBtYXhIZWFsdGg6IDQsXG4gICAgYWJpbGl0eTogbnVsbFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQZWRyb1JhbWlyZXpcIixcbiAgICBpdGFsaWFuRGVzY3JpcHRpb246IFwiUHXDsiBwZXNjYXJlIGxhIHByaW1hIGNhcnRhIGRhbGxhIGNpbWEgZGVnbGkgc2NhcnRpLlwiLFxuICAgIGVuZ2xpc2hEZXNjcmlwdGlvbjogXCJIZSBtYXkgZHJhdyBoaXMgw4AgcnN0IGNhcmQgZnJvbSB0aGUgZGlzY2FyZCBwaWxlLlwiLFxuICAgIG1heEhlYWx0aDogNCxcbiAgICBhYmlsaXR5OiBudWxsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNpZEtldGNodW1cIixcbiAgICBpdGFsaWFuRGVzY3JpcHRpb246IFwiUHXDsiBzY2FydGFyZSAyIGNhcnRlIHBlciByZWN1cGVyYXJlIHVuIHB1bnRvIHZpdGEuXCIsXG4gICAgZW5nbGlzaERlc2NyaXB0aW9uOiBcIkhlIG1heSBkaXNjYXJkIDIgY2FyZHMgdG8gcmVnYWluIG9uZSBsaWZlIHBvaW50LlwiLFxuICAgIG1heEhlYWx0aDogNCxcbiAgICBhYmlsaXR5OiBudWxsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkx1Y2t5RHVrZVwiLFxuICAgIGl0YWxpYW5EZXNjcmlwdGlvbjogXCJPZ25pIHZvbHRhIGNoZSBkZXZlIMS8ZXN0cmFycmUhxLwsIHNjb3ByZSAyIGNhcnRlIGUgc2NlZ2xpZS5cIixcbiAgICBlbmdsaXNoRGVzY3JpcHRpb246IFwiRWFjaCB0aW1lIGhlIOKAnGRyYXdzIeKAnSwgaGUgZmxpcHMgdGhlIHRvcCB0d28gY2FyZHMgYW5kIGNob29zZXMgb25lLlwiLFxuICAgIG1heEhlYWx0aDogNCxcbiAgICBhYmlsaXR5OiBudWxsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlZ1bHR1cmVTYW1cIixcbiAgICBpdGFsaWFuRGVzY3JpcHRpb246IFwiUXVhbmRvIHVuIHBlcnNvbmFnZ2lvIMOoIGVsaW1pbmF0bywgcHJlbmRlIGluIG1hbm8gdHV0dGUgbGUgY2FydGUgZGkgcXVlbCBwZXJzb25hZ2dpby5cIixcbiAgICBlbmdsaXNoRGVzY3JpcHRpb246IFwiV2hlbmV2ZXIgYSBwbGF5ZXIgaXMgZWxpbWluYXRlZCBmcm9tIHBsYXksIGhlIHRha2VzIGluIGhhbmQgYWxsIHRoZSBjYXJkcyBvZiB0aGF0IHBsYXllci5cIixcbiAgICBtYXhIZWFsdGg6IDQsXG4gICAgYWJpbGl0eTogbnVsbFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJDYWxhbWlkeUphbmV0XCIsXG4gICAgaXRhbGlhbkRlc2NyaXB0aW9uOiBcIlB1w7IgZ2lvY2FyZSBsZSBjYXJ0ZSBCQU5HISBjb21lIGNhcnRlIE1hbmNhdG8hLCBlIHZpY2V2ZXJzYS5cIixcbiAgICBlbmdsaXNoRGVzY3JpcHRpb246IFwiU2hlIGNhbiBwbGF5IEJBTkchIGNhcmRzIGFzIE1pc3NlZCEgY2FyZHMgYW5kIHZpY2UgdmVyc2FcIixcbiAgICBtYXhIZWFsdGg6IDQsXG4gICAgYWJpbGl0eTogbnVsbFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJLaXRDYXJsc29uXCIsXG4gICAgaXRhbGlhbkRlc2NyaXB0aW9uOiBcIkd1YXJkYSBsZSBwcmltZSB0cmUgY2FydGUgZGVsIG1henpvIGUgc2NlZ2xpZSBsZSBkdWUgZGEgcGVzY2FyZS5cIixcbiAgICBlbmdsaXNoRGVzY3JpcHRpb246IFwiSGUgbG9va3MgYXQgdGhlIHRvcCB0aHJlZSBjYXJkcyBvZiB0aGUgZGVjayBhbmQgY2hvb3NlcyB0aGUgMiB0byBkcmF3LlwiLFxuICAgIG1heEhlYWx0aDogNCxcbiAgICBhYmlsaXR5OiBudWxsIFxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBjYXJkc0NoYXJhY3RlcjtcblxuLypcbmZ1bmN0aW9uIG1vZGlmeVNob290aW5nUmFuZ2UgKGRpc3RhbmNlLCBwbGF5ZXIpeyAvL25lZWQgdG8gYWRkIG92ZXJhcmNoaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2UgZWZmZWN0cyB3aGVuIGl0ZW0gaXMgcmVtb3ZlZC5cbiAgcGxheWVyLnNob290aW5nUmFuZ2UgKz0gZGlzdGFuY2U7XG59XG52YXIgZ3VucyA9IHtcbiAge1xuICBuYW1lOlwiU2Nob2ZpZWxkXCIsXG4gIGFiaWxpdHk6IGluY3JlYXNlU2hvb3RpbmdSYW5nZSgyKVxuICB9LCAvL2N1cnJ5IHdpdGggY2hhcmFjdGVyIG5hbWVcbiAge1xuICBuYW1lOlwiVm9sY2FuaWNcIixcbiAgYWJpbGl0eTogbnVsbFxuICB9LCAvL2hhcyBhYmlsaXR5IGJ1dCBubyBkaXN0YW5jZSBtb2RpZmljYXRpb25cbiAge1xuICBuYW1lOlwiUmV2LiBDYXJhYmluZVwiLFxuICBhYmlsaXR5OiBpbmNyZWFzZVNob290aW5nUmFuZ2UoNClcbiAgfSxcbiAge1xuICBuYW1lOlwiV2luY2hlc3RlclwiLFxuICBhYmlsaXR5OiBpbmNyZWFzZVNob290aW5nUmFuZ2UoNSlcbiAgfSxcbiAge1xuICBuYW1lOlwiUmVtaW5ndG9uXCIsXG4gIGFiaWxpdHk6IGluY3JlYXNlU2hvb3RpbmdSYW5nZSgzKVxuICB9XG59XG5cbnZhciByb2xlczoge1xuICAgIHNoZXJpZmY6IHtcbiAgICAgIGVuZ2xpc2hUaXRsZTogXCJTaGVyaWZmXCIsXG4gICAgICBpdGFsaWFuVGl0bGU6IFwiU2NlcmlmZm9cIixcbiAgICAgIGl0YWxpYW5EZXNjcmlwdGlvbjogXCJFbGltaW5hIHR1dHRpIGkgZnVvcmlsZWdnZSBlIGlsIFJpbm5lZ2F0byFcIixcbiAgICAgIGVuZ2xpc2hEZXNjcmlwdGlvbjogXCJLaWxsIGFsbCB0aGUgT3V0bGF3cyBhbmQgdGhlIFJlbmVnYWRlIVwiLFxuICAgICAgYWJpbGl0eTogZnVuY3Rpb24ocGxheWVyKSB7cGxheWVyLm1heEhlYWx0aCArPSAxfSxcbiAgICAgIGdvYWw6IG51bGxcbiAgICB9LFxuICAgIGRlcHV0eTogeyBcbiAgICAgIGVuZ2xpc2hUaXRsZTogXCJEZXB1dHkgU2hlcmlmZlwiLFxuICAgICAgaXRhbGlhblRpdGxlOiBcIlZpY2VcIixcbiAgICAgIGl0YWxpYW5EZXNjcmlwdGlvbjogXCJQcm90ZWdnaSBsbyBTY2VyaWZmbyEgRWxpbWluYSB0IHUgdCB0IGkgaSBGIHUgbyByIGkgbCBlIGcgZyBlIGUgaSBsIFJpbm5lZ2F0byFcIixcbiAgICAgIGVuZ2xpc2hEZXNjcmlwdGlvbjogXCJQcm90ZWN0IHRoZSBTaGVyaWZmISBLaWxsIGFsbCB0aGUgT3V0bGF3cyBhbmQgdGhlIFJlbmVnYWRlXCIsXG4gICAgICBnb2FsOiBudWxsXG4gICAgICB9LCBcbiAgICByZW5lZ2FkZToge1xuICAgICAgZW5nbGlzaFRpdGxlOiBcIlJlbmVnYWRlXCIsXG4gICAgICBpdGFsaWFuVGl0bGU6IFwiUmlubmVnYXRvXCIsXG4gICAgICBpdGFsaWFuRGVzY3JpcHRpb246IFwiUmltYW5pIGzigJl1bHRpbW8gcGVyc29uYWdnaW8gaW4gZ2lvY28hXCIsXG4gICAgICBlbmdsaXNoRGVzY3JpcHRpb246IFwiQmUgdGhlIGxhc3Qgb25lIGluIHBsYXkhXCIsXG4gICAgICBnb2FsOiBudWxsXG4gICAgICB9LFxuICAgIG91dGxhdzoge1xuICAgICAgZW5nbGlzaFRpdGxlOiBcIk91dGxhd1wiLFxuICAgICAgaXRhbGlhblRpdGxlOiBcIkZ1b3JpbGVnZ2VcIixcbiAgICAgIGl0YWxpYW5EZXNjcmlwdGlvbjogXCJFbGltaW5hIGxvIFNjZXJpZmZvIVwiLFxuICAgICAgZW5nbGlzaERlc2NyaXB0aW9uOiBcIktpbGwgdGhlIFNoZXJpZmYhXCIsXG4gICAgICBnb2FsOiBudWxsXG4gICAgICB9LFxuICB9LFxudmFyIHBsYXlpbmdDYXJkczoge1xuICAgIGJhbmc6IHtcbiAgICAgIGVuZ2xpc2hUaXRsZTogXCJCYW5nIVwiLFxuICAgICAgYWJpbGl0eTogbnVsbFxuICAgIH0sXG4gICAgbWlzc2VkOiB7XG4gICAgICBlbmdsaXNoVGl0bGU6IFwiTWlzc2VkIVwiLFxuICAgICAgaXRhbGlhblRpdGxlOiBcIk1hbmNhdG8hXCIsXG4gICAgICBhYmlsaXR5OiBudWxsXG4gICAgfSxcbiAgICBiZWVyOiB7XG4gICAgICBlbmdsaXNoVGl0bGU6IFwiQmVlclwiLFxuICAgICAgaXRhbGlhblRpdGxlOiBcIkJpcnJhXCIsXG4gICAgICBhYmlsaXR5OiBudWxsXG4gICAgfSxcbiAgICBwYW5pYzoge1xuICAgICAgZW5nbGlzaFRpdGxlOiBcIlBhbmljIVwiLFxuICAgICAgaXRhbGlhblRpdGxlOiBcIlBhbmljbyFcIixcbiAgICAgIGFiaWxpdHk6IG51bGxcbiAgICB9LFxuICAgIGNhdEJhbG91OiB7XG4gICAgICBlbmdsaXNoVGl0bGU6IFwiQ2F0IEJhbG91XCIsXG4gICAgICBhYmlsaXR5OiBudWxsXG4gICAgfSxcbiAgICBzdGFnZWNvYWNoOiB7XG4gICAgICBlbmdsaXNoVGl0bGU6IFwiU3RhZ2Vjb2FjaFwiLFxuICAgICAgaXRhbGlhblRpdGxlOiBcIkRpbGlnZW56YVwiLFxuICAgICAgYWJpbGl0eTogbnVsbFxuICAgIH0sXG4gICAgd2VsbHNGYXJnbzoge1xuICAgICAgZW5nbGlzaFRpdGxlOiBcIldlbGxzIEZhcmdvXCIsXG4gICAgICBhYmlsaXR5OiBudWxsXG4gICAgfSwgXG4gICAgZ2F0bGluZzoge1xuICAgICAgZW5nbGlzaFRpdGxlOiBcIkdhdGxpbmdcIixcbiAgICAgIGFiaWxpdHk6IG51bGxcbiAgICB9LFxuICAgIGR1ZWw6IHtcbiAgICAgIGVuZ2xpc2hUaXRsZTogXCJEdWVsXCIsXG4gICAgICBpdGFsaWFuVGl0bGU6IFwiRHVlbGxvXCIsXG4gICAgICBpdGFsaWFuRGVzY3JpcHRpb246IFwiVW4gZ2lvY2F0b3JlIHNjYXJ0YSB1biBCQU5HISwgcG9pIHR1LCBlY2MuIElsIHByaW1vIGNoZSBub24gbG8gZmEgcGVyZGUgMSBwdW50byB2aXRhLlwiLFxuICAgICAgZW5nbGlzaERlc2NyaXB0aW9uOiBcIkEgdGFyZ2V0IHBsYXllciBkaXNjYXJkcyBhIEJBTkchLCB0aGVuIHlvdSwgZXRjLiBGaXJzdCBwbGF5ZXIgZmFpbGluZyB0byBkaXNjYXJkIGEgQkFORyEgbG9zZXMgMSBsaWZlIHBvaW50LlwiLFxuICAgICAgYWJpbGl0eTogbnVsbFxuICAgIH0sXG4gICAgaW5kaWFuczoge1xuICAgICAgZW5nbGlzaFRpdGxlOiBcIkluZGlhbnMhXCIsXG4gICAgICBpdGFsaWFuVGl0bGU6IFwiSW5kaWFuaSFcIixcbiAgICAgIGl0YWxpYW5EZXNjcmlwdGlvbjogXCJUdXR0aSBnbGkgYWx0cmkgc2NhcnRhbm8gdW4gQkFORyEgbyBwZXJkb25vIDEgcHVudG8gdml0YS5cIixcbiAgICAgIGVuZ2xpc2hEZXNjcmlwdGlvbjogXCJBbGwgb3RoZXIgcGxheWVycyBkaXNjYXJkIGEgQkFORyEgb3IgbG9zZSAxIGxpZmUgcG9pbnQuXCIsXG4gICAgICBhYmlsaXR5OiBudWxsXG4gICAgfSxcbiAgICBnZW5lcmFsU3RvcmU6IHtcbiAgICAgIGVuZ2xpc2hUaXRsZTogXCJHZW5lcmFsIFN0b3JlXCIsXG4gICAgICBpdGFsaWFuVGl0bGU6IFwiRW1wb3Jpb1wiLFxuICAgICAgaXRhbGlhbkRlc2NyaXB0aW9uOiBcIlJpdmVsYSBjYXJ0ZSBxdWFudGkgaSBnaW9jYXRvcmkuIE9nbnVubyBuZSBwZXNjYSB1bmEuXCIsXG4gICAgICBlbmdsaXNoRGVzY3JpcHRpb246IFwiUmV2ZWFsIGFzIG1hbnkgY2FyZHMgYXMgcGxheWVycy4gRWFjaCBwbGF5ZXIgZHJhd3Mgb25lLlwiLFxuICAgICAgYWJpbGl0eTogbnVsbFxuICAgIH0sXG4gICAgc2Fsb29uOiB7XG4gICAgICBlbmdsaXNoVGl0bGU6IFwiU2Fsb29uXCIsXG4gICAgICBhYmlsaXR5OiBudWxsXG4gICAgfSxcbn07XG5cbnZhciBwZXJtYW5lbnRDYXJkczoge1xuICAgIGphaWw6IHtcbiAgICAgIGVuZ2xpc2hUaXRsZTogXCJKYWlsXCIsXG4gICAgICBpdGFsaWFuVGl0bGU6IFwiUHJpZ2lvbmVcIixcbiAgICAgIGl0YWxpYW5EZXNjcmlwdGlvbjogXCJTY2FydGEgbGEgUHJpZ2lvbmUgZSBnaW9jYS4gQWx0cmltZW50aSBzY2FydGEgbGEgUHJpZ2lvbmUgZSBzYWx0YSBpbCB0dXJuby5cIixcbiAgICAgIGVuZ2xpc2hEZXNjcmlwdGlvbjogXCJEaXNjYXJkIHRoYSBKYWlsLCBwbGF5IG5vcm1hbGx5LiBFbHNlIGRpc2NhcmQgdGhlIEphaWwgYW5kIHNraXAgeW91ciB0dXJuLlwiLFxuICAgICAgYWJpbGl0eTogbnVsbFxuICAgICAgfSxcbiAgICBkeW5hbWl0ZToge1xuICAgICAgZW5nbGlzaFRpdGxlOiBcIkR5bmFtaXRlXCIsXG4gICAgICBpdGFsaWFuVGl0bGU6IFwiRGluYW1pdGVcIixcbiAgICAgIGl0YWxpYW5EZXNjcmlwdGlvbjogXCJQZXJkaSAzIHB1bnRpIHZpdGEuIFNlIG5vIHBhc3NhIGxhIERpbmFtaXRlIGEgc2luaXN0cmEuXCIsXG4gICAgICBlbmdsaXNoRGVzY3JpcHRpb246IFwiTG9zZSAzIGxpZmUgcG9pbnRzLiBFbHNlIHBhc3MgdGhlIER5bmFtaXRlIG9uIHlvdXIgbGVmdC5cIixcbiAgICAgIGFiaWxpdHk6IG51bGxcbiAgICAgIH0sXG4gICAgYmFycmVsOiB7XG4gICAgICBlbmdsaXNoVGl0bGU6IFwiQmFycmVsXCIsXG4gICAgICBpdGFsaWFuVGl0bGU6IFwiQmFyaWxlXCIsXG4gICAgICBhYmlsaXR5OiBudWxsXG4gICAgICB9LFxuICAgIHNjb3BlOiB7XG4gICAgICBlbmdsaXNoVGl0bGU6IFwiU2NvcGVcIixcbiAgICAgIGl0YWxpYW5UaXRsZTogXCJNaXJpbm9cIixcbiAgICAgIGl0YWxpYW5EZXNjcmlwdGlvbjogXCJUdSB2ZWRpIGdsaSBhbHRyaSBhIGRpc3RhbnphIC0xLlwiLFxuICAgICAgZW5nbGlzaERlc2NyaXB0aW9uOiBcIllvdSB2aWV3IG90aGVycyBhdCBkaXN0YW5jZSAtMS5cIixcbiAgICAgIGFiaWxpdHk6IG51bGxcbiAgICAgIH0sXG4gICAgbXVzdGFuZzoge1xuICAgICAgZW5nbGlzaFRpdGxlOiBcIk11c3RhbmdcIiwgLy9zYW1lIGluIGJvdGggbGFuZ3VhZ2VzXG4gICAgICBpdGFsaWFuRGVzY3JpcHRpb246IFwiR2xpIGFsdHJpIHRpIHZlZG9ubyBhIGRpc3RhbnphICsxXCIsXG4gICAgICBlbmdsaXNoRGVzY3JpcHRpb246IFwiT3RoZXJzIHZpZXcgeW91IGF0IGRpc3RhbmNlICsxLlwiXG4gICAgICBhYmlsaXR5OiBudWxsXG4gICAgICB9LFxuICB9XG5cblxudmFyIGRlY2sgPSB7XG4gIHJvbGVzOiB7XG4gICAgc2hlcmlmZjogMSxcbiAgICBkZXB1dHk6IDIsIFxuICAgIHJlbmVnYWRlOiAxLFxuICAgIG91dGxhdzogM1xuICB9LFxuICBjaGFyYWN0ZXJzOntcbiAgICBwYXVsUmVncmV0OiAxLFxuICAgIGpvdXJkb25uYWlzOiAxLFxuICAgIGJsYWNrSmFjazogMSxcbiAgICBzbGFiVGhlS2lsbGVyOiAxLFxuICAgIGVsR3JpbmdvOiAxLFxuICAgIGplc3NlSm9uZXM6IDEsXG4gICAgc3V6eUxhZmF5ZXR0ZTogMSxcbiAgICB3aWxseVRoZUtpZDogMSxcbiAgICByb3NlRG9vbGFuOiAxLFxuICAgIGJhcnRDYXNzaWR5OiAxLFxuICAgIHBlZHJvUmFtaXJlejogMSxcbiAgICBzaWRLZXRjaHVtOiAxLCBcbiAgICBsdWNreUR1a2U6IDEsXG4gICAgdnVsdHVyZVNhbTogMSxcbiAgICBjYWxhbWlkeUphbmV0OiAxLFxuICAgIGtpdENhcmxzb246IDFcbiAgfSxcbiAgd2VhcG9uczoge1xuICAgIHNjaG9maWVsZDogMyxcbiAgICB2b2xjYW5pYzogMixcbiAgICByZXZDYXJhYmluZTogMSxcbiAgICB3aW5jaGVzdGVyOiAxLFxuICAgIHJlbWluZ3RvbjogMVxuICB9LFxuICBwbGF5aW5nQ2FyZHM6IHtcbiAgICBiYW5nOiAyNSxcbiAgICBtaXNzZWQ6IDEyLFxuICAgIGJlZXI6IDYsXG4gICAgcGFuaWM6IDQsXG4gICAgY2F0QmFsb3U6IDQsXG4gICAgU3RhZ2Vjb2FjaDogMixcbiAgICB3ZWxsc0ZhcmdvOiAxLFxuICAgIGdhdGxpbmc6IDEsXG4gICAgZHVlbDogMyxcbiAgICBpbmRpYW5zOiAyLFxuICAgIGdlbmVyYWxTdG9yZTogMixcbiAgICBzYWxvb246IDEgXG4gIH0sXG4gIHBlcm1hbmVudENhcmRzOiB7XG4gICAgamFpbDogMyxcbiAgICBkeW5hbWl0ZTogMSxcbiAgICBiYXJyZWw6IDIsXG4gICAgc2NvcGU6IDEsXG4gICAgbXVzdGFuZzogMlxuICB9XG59Ki9cbiJdfQ==