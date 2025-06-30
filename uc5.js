    // UC5 player reach 100

    if(position == 100){
        winner = currentPlayer + 1;
        break;
    }

    currentPlayer++;

    if(currentPlayer == numPlayers){
        currentPlayer = 0;
    }
}

console.log("player " + winner + " wins");
console.log("Total rolls by each player :");
for(let i = 0; i < numPlayers; i++){
    console.log("player "+ (i + 1)+" :" + rolls[i]+" rolls");
}