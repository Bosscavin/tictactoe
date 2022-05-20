const openPlayerConfig = () => {
    playerConfigOverlay.style.display = 'block';
    backdrop.style.display = 'block';
};

const closePlayerConfig = () => {
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutput.textContent = ''
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
    
}