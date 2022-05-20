const openPlayerConfig = (e) => {
    editedPlayer = +e.target.dataset.playerid;
    playerConfigOverlay.style.display = 'block';
    backdrop.style.display = 'block';
};

const closePlayerConfig = () => {
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutput.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}


const savePlayerConfig = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const enteredPlayerName = formData.get('playername').trim();
    if (!enteredPlayerName) {
        e.target.firstElementChild.classList.add('error');
        errorsOutput.textContent = 'Please Enter a Valid Name'
        return
    }

    const updatedPlayerData = document.getElementById('player-'+ editedPlayer + '-data');
    updatedPlayerData.children[1].textContent = enteredPlayerName;
    
    // if (editedPlayer === 1) {
    //     players[0].name = enteredPlayerName;
    // } else {
    //     players[1].name = enteredPlayerName;
    // }

    players[editedPlayer - 1].name = enteredPlayerName;
    closePlayerConfig();
}