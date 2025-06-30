
        // UC4 position goes below 0 reset to 0

        if(position < 0){
            console.log("restart at 0");
            position = 0;
        }

        console.log("move to " + position);
    }

    player[currentPlayer] = position;
    console.log("player " + (currentPlayer + 1) + " now at " + player[currentPlayer]);