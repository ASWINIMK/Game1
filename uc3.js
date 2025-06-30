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