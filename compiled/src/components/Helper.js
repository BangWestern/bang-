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
"use strict";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJIZWxwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi8vZnVuY3Rpb25zIHRoYXQgd2lsbCBiZSB1c2VkIGluIG11bHRpcGxlIGFyZWFzL3RpbWVzIHRocm91Z2hvdXQgdGhlIGdhbWUgXG4vL2luIGNoYXJhY3Rlci9jYXJkIGFiaWxpdGllcyBcblxuLy9mb3IgcmVmZXJlbmNlOlxuLy8gdmFyIHBsYXllcnMgPSB7XG4vLyAgaGFuZFNpemU6IG51bGwsXG4vLyAgY3VycmVudEhlYWx0aDogbnVsbCxcbi8vICBjYXJkQ291bnQ6IDQsXG4vLyAgaW5KYWlsOiBmYWxzZSxcbi8vICBoYXNEeW5hbWl0ZTogZmFsc2UsXG4vLyAgc2hvb3RpbmdSYW5nZTogMSxcbi8vICByZWd1bGFyUmFuZ2U6IDEsXG4vLyAgZW5lbXlTaWdodFJhbmdlOiAxLFxuLy8gIGFiaWxpdHk6IG51bGwsXG4vLyAgam9iOiBudWxsXG4vLyB9XG5cbmZ1bmN0aW9uIGluY3JlYXNlU2hvb3RpbmdSYW5nZSAoZGlzdGFuY2UsIHBsYXllcil7IFxuICBwbGF5ZXIuc2hvb3RpbmdSYW5nZSArPSBkaXN0YW5jZTtcbn1cblxuZnVuY3Rpb24gbG93ZXJTaG9vdGluZ1JhbmdlIChkaXN0YW5jZSwgcGxheWVyKXsgXG4gIHBsYXllci5zaG9vdGluZ1JhbmdlIC09IGRpc3RhbmNlO1xufVxuXG5mdW5jdGlvbiBpbmNyZWFzZVJlZ3VsYXJSYW5nZSAoZGlzdGFuY2UsIHBsYXllcil7IFxuICBwbGF5ZXIucmVndWxhclJhbmdlICs9IGRpc3RhbmNlO1xufVxuXG5mdW5jdGlvbiBsb3dlclJlZ3VsYXJSYW5nZSAoZGlzdGFuY2UsIHBsYXllcil7IFxuICBwbGF5ZXIucmVndWxhclJhbmdlIC09IGRpc3RhbmNlO1xufVxuXG5mdW5jdGlvbiBpbmNyZWFzZUVuZW15U2lnaHRSYW5nZSAoZGlzdGFuY2UsIHBsYXllcil7IFxuICBwbGF5ZXIuZW5lbXlTaWdodFJhbmdlICs9IGRpc3RhbmNlO1xufVxuZnVuY3Rpb24gbG93ZXJFbmVteVNpZ2h0UmFuZ2UgKGRpc3RhbmNlLCBwbGF5ZXIpeyBcbiAgcGxheWVyLmVuZW15U2lnaHRSYW5nZSAtPSBkaXN0YW5jZTtcbn1cblxuXG5mdW5jdGlvbiBoZWFsKHBsYXllcil7XG4gIGlmKHBsYXllci5jdXJyZW50SGVhbHRoICE9PSBwbGF5ZXIubWF4SGVhbHRoKXtcbiAgICBwbGF5ZXIuY3VycmVudEhlYWx0aCArPSAxOyAgXG4gIH1cbn1cblxuZnVuY3Rpb24gZGFtYWdlKHBsYXllcil7XG4gIHBsYXllci5jdXJyZW50SGVhbHRoIC09IDE7XG4gIGlmKHBsYXllci5jdXJyZW50SGVhbHRoIDw9IDApe1xuICAgIGlmKC8vcGxheWVyIHBsYXlzIGJlZXIpe1xuICAgICAgcGxheWVyLmN1cnJlbnRIZWFsdGggPT09IDE7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXcocGxheWVyLCBhbW91bnQpe1xuICAvL2RlY2sucmFuZG9tIHNlbGVjdFxuICBwbGF5ZXIuaGFuZFNpemUgKz0gYW1vdW50XG59XG5mdW5jdGlvbiBkaXNjYXJkT3duQ2FyZHMocGxheWVyLCBhbW91bnQpe1xuICAvL3BsYXllciBkaXNjYXJkcyBjYXJkcyBvZiB0aGVpciBjaG9pY2UuXG4gIHBsYXllci5oYW5kU2l6ZSAtPSBhbW91bnQ7XG59XG5cbmZ1bmN0aW9uIGVuZFR1cm4ocGxheWVyKXtcbiAgaWYocGxheWVyLmhhbmRTaXplID4gcGxheWVyLmN1cnJlbnRIZWFsdGgpe1xuICAgIHZhciBkaWZmZXJlbmNlID0gcGxheWVyLmhhbmRTaXplIC0gcGxheWVyLmN1cnJlbnRIZWFsdGg7XG4gICAgZGlzY2FyZE93bkNhcmRzKHBsYXllciwgZGlmZmVyZW5jZSlcbiAgfVxufSovXG4iXX0=