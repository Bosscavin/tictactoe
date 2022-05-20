let editedPlayer = 0;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
];

const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors');

const gameArea = document.getElementById('active-game');

const editPlayerOneBtn = document.getElementById('edit-player-1-btn');
const editPlayerTwoBtn = document.getElementById('edit-player-2-btn');
const cancelConfigBtn = document.getElementById('cancel-config-btn');
const confirmConfigBtn = document.getElementById('confirm-config-btn');
const startNewGameBtn = document.getElementById('start-game-button');


editPlayerOneBtn.addEventListener('click', openPlayerConfig);
editPlayerTwoBtn.addEventListener('click', openPlayerConfig);

cancelConfigBtn.addEventListener('click', closePlayerConfig);
startNewGameBtn.addEventListener('click', startNewGame);


backdrop.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);