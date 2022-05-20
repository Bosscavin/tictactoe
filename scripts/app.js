const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors');

const editPlayerOneBtn = document.getElementById('edit-player-1-btn');
const editPlayerTwoBtn = document.getElementById('edit-player-2-btn');
const cancelConfigBtn = document.getElementById('cancel-config-btn');
const confirmConfigBtn = document.getElementById('confirm-config-btn');


editPlayerOneBtn.addEventListener('click', openPlayerConfig);
editPlayerTwoBtn.addEventListener('click', openPlayerConfig);

cancelConfigBtn.addEventListener('click', closePlayerConfig);


backdrop.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);