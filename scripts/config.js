//Create openPlayerConfig function that takes an even parameter
const openPlayerConfig = (e) => {
    //takes the player Id, convert it to num and store it to editedPlayer constant
    editedPlayer = +e.target.dataset.playerid;
    //sets the player config overlay style to block
    playerConfigOverlay.style.display = 'block';
    //sets the backdrop overlay style to block
    backdrop.style.display = 'block';
};

const closePlayerConfig = () => {
    //sets player config overlay display to none
    playerConfigOverlay.style.display = 'none';
    //sets the backdrop display to none
    backdrop.style.display = 'none';
    //Removes the class on the first child element of the form
    formElement.firstElementChild.classList.remove('error');
    //Sets the p thats shows error message to empty
    errorsOutput.textContent = '';
    //Clears the input value to empty
    formElement.firstElementChild.lastElementChild.value = '';
}


const savePlayerConfig = (e) => {
    //Prevents default behavior of form to submit data to a server
    e.preventDefault();
    //Creates a new FormData out of event target and put it to a constant
    const formData = new FormData(e.target);
    //Gets the input value, trims the spaces and put it to a constant
    const enteredPlayerName = formData.get('playername').trim();
    //checks if there is an empty value on input
    if (!enteredPlayerName) {
        //adds class name error to the input and label
        e.target.firstElementChild.classList.add('error');
        //Adds text to p element that would show an error message
        errorsOutput.textContent = 'Please Enter a Valid Name'
        //stops from executing codes below
        return
    }

    //If there is a valid value from the player input
    //Targer the element that will show the player name
    //The value from edited player will come from the clicked Player box name to be edited
    const updatedPlayerData = document.getElementById('player-'+ editedPlayer + '-data');
    //Sets the h3 elemennt on div contaiing player data
    updatedPlayerData.children[1].textContent = enteredPlayerName;
    
    // if (editedPlayer === 1) {
    //     players[0].name = enteredPlayerName;
    // } else {
    //     players[1].name = enteredPlayerName;
    // }


    //Sets the name property of a player in an array
    //Minus 1 on the value of edited player because array starts from 0
    //Sets the value on name property on selected player object
    players[editedPlayer - 1].name = enteredPlayerName;
    //Execute closePlayerConfig function to remove all the overlays and error messages if there is any
    closePlayerConfig();
}