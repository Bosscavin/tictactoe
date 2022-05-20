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
    e.target.textContent = players[activePlayer].symbol;
    e.target.classList.add('disabled');
    switchPlayer();
}