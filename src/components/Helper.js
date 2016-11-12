/*//functions that will be used in multiple areas/times throughout the game 
//in character/card abilities 

//for reference:
// var players = {
//  handSize: null,
//  currentHealth: null,
//  cardCount: 4,
//  inJail: false,
//  hasDynamite: false,
//  shootingRange: 1,
//  regularRange: 1,
//  enemySightRange: 1,
//  ability: null,
//  job: null
// }

function increaseShootingRange (distance, player){ 
  player.shootingRange += distance;
}

function lowerShootingRange (distance, player){ 
  player.shootingRange -= distance;
}

function increaseRegularRange (distance, player){ 
  player.regularRange += distance;
}

function lowerRegularRange (distance, player){ 
  player.regularRange -= distance;
}

function increaseEnemySightRange (distance, player){ 
  player.enemySightRange += distance;
}
function lowerEnemySightRange (distance, player){ 
  player.enemySightRange -= distance;
}


function heal(player){
  if(player.currentHealth !== player.maxHealth){
    player.currentHealth += 1;  
  }
}

function damage(player){
  player.currentHealth -= 1;
  if(player.currentHealth <= 0){
    if(//player plays beer){
      player.currentHealth === 1;
    }
  }
}

function draw(player, amount){
  //deck.random select
  player.handSize += amount
}
function discardOwnCards(player, amount){
  //player discards cards of their choice.
  player.handSize -= amount;
}

function endTurn(player){
  if(player.handSize > player.currentHealth){
    var difference = player.handSize - player.currentHealth;
    discardOwnCards(player, difference)
  }
}*/
