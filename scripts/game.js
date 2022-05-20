const startNewGame = () => {
    if (players[0].name === '' || players[1].name === '') {
        alert('set custom player names for both players');
        return;
    }
    gameArea.style.display = 'block';
}