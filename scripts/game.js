
//Creates resetGameStatus funcction
const resetGameStatus = () => {
    //reset the active player value to 0
    activePlayer = 0;
    //reset the current round value to 0
    currentRound = 0;
    //reset the current round value to false
    gameIsOver = false;
    //Resets the innerHtml of the paragraph and span to original state
    gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner-name">Player name</span>';
    //Reset the original display style of active game section to none
    gameOverElement.style.display = 'none';
    
    //initialize gameboardindex to 0
    //gameboardindex determines the row and column or the gameData and board
    let gameBoardIndex = 0
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            //Resets the game data to 0
            gameData[i][j] = 0;
            //Targets the li's on the gameboard
            const gameBoardItem = gameBoardElement.children[gameBoardIndex];
            //Resets li elemnts value to empty
            gameBoardItem.textContent = '';
            //Removes disable class to each li
            gameBoardItem.classList.remove('disabled');
            //Increase gameBoardIndex value to one
            gameBoardIndex++;
        }
    }
}

//Creates StartNewGame fuinction
const startNewGame = () => {
    //Checks of the the player's names are empty
    if (players[0].name === '' || players[1].name === '') {
        //Trigger an alert to set players name
        alert('set custom player names for both players');
        //Stops executing code below
        return;
    }

    //Call the resetGameStatus to clear any previous values
    resetGameStatus();
    //Sets the name of the current active player to display
    activePlayerName.textContent = players[activePlayer].name;
    //Shows the game area
    gameArea.style.display = 'block';
}


//Creates function to swithPlayer
const switchPlayer = () => {
    //Checks if the active player is set to 0
    if (activePlayer === 0) {
        //Sets the activeplayer to 1
        activePlayer = 1;
    } else {
        //Sets the active player to 0
        activePlayer = 0;
    }


    //Sets the name of the current active player
    activePlayerName.textContent = players[activePlayer].name;
}


//Creates selectGameField function
//it creates the logic to what happen when we touch the board elements
const selectGameField = (e) => {
    //Checks if the clicked portion does not have an LI tag or the gameIsOver is true
    if (e.target.tagName !== 'LI' || gameIsOver)  {
        //Stops executing codes below
        return;
    }
    
    //Targets the boardgame
    const selectedField = e.target;
    //Targets the column
    const selectedColumn = selectedField.dataset.col - 1;
    //Targets the row
    const selectedRow = selectedField.dataset.row - 1;

    //Checks if the gameData array is more than 0
    //Prevents the player on clicking on the same tile that already has value
    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Please Select an empty field');
        return;
    }

    //Sets the symbols of the player in the targeted board element
    selectedField.textContent = players[activePlayer].symbol;
    //Add class name disabled to the targeted li
    selectedField.classList.add('disabled');
    
    
    //Sets the value on gameData
    //Sets the value on the array depending on which player is playing
    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    
    //Assigns the value from checkForGameOver function
    const winnerId = checkForGameOver();
    //checks id the winnedId is not equals to 0
    if (winnerId !== 0) {
        //Execute endGame function with the winnerId as the parameters
        endGame(winnerId);
    }

    //Increase thhe current round to 1
    currentRound++;
    //Execute switchhPlayer function
    switchPlayer();
}


//Creates checkForGameOver function
const checkForGameOver = () => {
    // if (gameData[0][0] === 2 && gameData[0][1] === 2 && gameData[0][2] === 2 ) {
    //     return 2;
    // }

    // if (gameData[0][0] === 1 && gameData[0][1] === 1 && gameData[0][2] === 1 ) {
    //     return 2;
    // }


    //Check rows for equality
    for (let i = 0; i < 3; i++) {
        if (gameData[i][0] > 0  && 
            gameData[i][0] === gameData[i][1] && 
            gameData[i][1] === gameData[i][2] ) {
            return gameData[i][0];
        }
    }

    //Check columns for equality
    for (let i = 0; i < 3; i++) {
        if (gameData[0][i] > 0  && 
            gameData[0][i] === gameData[1][i] && 
            gameData[0][i] === gameData[2][i] ) {
            return gameData[0][i];
        }
    }


    //Diagonal: Top Left to Bottom right
    if (gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2])  {
        return gameData[0][0];   
    }


    //Diagonal: Bottom Left to Top Right
    if (gameData[2][0] > 0 && 
        gameData[2][0] === gameData[1][1] && 
        gameData[1][1] === gameData[0][2]) {
        return gameData[2][0];
    }


    //Check of the current round is equal to 9
    //Checks for draw
    if (currentRound === 9) {
        //returns -1
        return -1
    }


    ///Return 0 value of there is still no winner
    return 0;

    // if (gameData[0][0] > 0  && 
    //     gameData[0][0] === gameData[0][1] && 
    //     gameData[0][1] === gameData[0][2] ) {
    //     return gameData[0][0];
    // }

    // if (gameData[1][0] > 0  && 
    //     gameData[1][0] === gameData[1][1] && 
    //     gameData[1][1] === gameData[1][2] ) {
    //     return gameData[1][0];
    // }

    // if (gameData[2][0] > 0  && 
    //     gameData[2][0] === gameData[2][1] && 
    //     gameData[2][1] === gameData[2][2] ) {
    //     return gameData[2][0];
    // }
}


//Creates endGame function with the winnerId as the parameter
const endGame = (winnerId) => {
    //sets the game is over to true
    gameIsOver = true;
    //Sets the style of gameover area to block
    //Displays gameover area to screen
    gameOverElement.style.display = 'block';
    //Checks if the the winner id is more than 0
    if (winnerId > 0) {
        //Assign the winner name to winnerName constant
        const winnerName = players[winnerId - 1].name;
        //Sets the name of the winner that will be displayed
        gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
    } else {
        //Sets the display value to draw if there is no winners
        gameOverElement.firstElementChild.textContent = 'It\'s a draw!';
    }
    
}