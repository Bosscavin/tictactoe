const startNewGame = () => {
    if (players[0].name === '' || players[1].name === '') {
        alert('set custom player names for both players');
        return;
    }
    activePlayerName.textContent = players[activePlayer].name;
    gameArea.style.display = 'block';
}



const switchPlayer = () => {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }

    activePlayerName.textContent = players[activePlayer].name;
}

const selectGameField = (e) => {
    if (e.target.tagName !== 'LI') {
        return;
    }

    const selectedField = e.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('Please Select an empty field');
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add('disabled');
    
    

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    

    const winnerId = checkForGameOver();
    console.log(winnerId);


    currentRound++;
    switchPlayer();
}

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

    if (currentRound === 9) {
        return -1
    }

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