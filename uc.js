// UC1 start position 0

let numPlayers = 3;
let player = [];
let currentPlayer = 0;
let rolls = [];    // UC6 count rolls

for(let i = 0; i < numPlayers; i++){
    player[i] = 0;
    rolls[i] = 0;
}

// ladder

let ladderStart = [3,5,11,20,27,36,51,72];
let ladderEnd = [22,8,26,29,56,44,67,91];

// snake

let snakeStart = [17,19,21,43,62,68,87,99];
let snakeEnd = [4,7,9,34,18,24,36,78];

while(player[currentPlayer] != 100){

    console.log("player "+(currentPlayer + 1)+ " turn");
    console.log("current player index : "+currentPlayer);

    // UC2 get random number between 1 to 6

    let dice = Math.floor(Math.random() * 6) + 1;
    rolls[currentPlayer]++;   
    console.log("player " + (currentPlayer + 1) + " rolls " + dice);
    console.log("player "+(currentPlayer + 1)+ " rolls count : "+rolls[currentPlayer]);
    let position = player[currentPlayer];
    console.log("player "+(currentPlayer + 1) + " position "+ position);
    

    // UC3 must roll 1 to start

    if(position == 0){
        if(dice == 1){
            position = 1;
            console.log("starts game moves to 1");
        }
        else{
            console.log("must roll 1 to start");
            currentPlayer++;
            if(currentPlayer == numPlayers){
                currentPlayer = 0;
            }
            continue;
        }
    }
    else{

        position += dice;

        if(position > 100){
            console.log("stays at " + player[currentPlayer]);
            currentPlayer++;
            if(currentPlayer == numPlayers){
                currentPlayer = 0;
            }
            continue;
        }

        // check ladder

        for(let i = 0; i < ladderStart.length; i++){
            if(position == ladderStart[i]){
                console.log("ladder from " + position + " to " + ladderEnd[i]);
                position = ladderEnd[i];
                break;
            }
        }

        // check snake

        for(let i = 0; i < snakeStart.length; i++){
            if(position == snakeStart[i]){
                console.log("snake from " + position + " to " + snakeEnd[i]);
                position = snakeEnd[i];
                break;
            }
        }

        // UC4 position goes below 0 reset to 0

        if(position < 0){
            console.log("restart at 0");
            position = 0;
        }

        console.log("move to " + position);
    }

    player[currentPlayer] = position;
    console.log("player " + (currentPlayer + 1) + " now at " + player[currentPlayer]);

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