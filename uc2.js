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