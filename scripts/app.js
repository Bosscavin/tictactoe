
//Create Game Data with 3 rows and 3 columns set to 0
const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];


//Initialize edited player to 0
let editedPlayer = 0;
//Initialize active player to 0
let activePlayer = 0;
//Initialize current round to 0
let currentRound = 1;
//Initialize gameIsOver state to false
let gameIsOver = false;

//Created player objects with property name and symbol in an array
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


//Target editable elements
const playerConfigOverlay = document.getElementById('config-overlay');
const backdrop = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutput = document.getElementById('config-errors');
const gameArea = document.getElementById('active-game');
const activePlayerName = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('game-over');

//Target button elements
const editPlayerOneBtn = document.getElementById('edit-player-1-btn');
const editPlayerTwoBtn = document.getElementById('edit-player-2-btn');
const cancelConfigBtn = document.getElementById('cancel-config-btn');
const confirmConfigBtn = document.getElementById('confirm-config-btn');
const startNewGameBtn = document.getElementById('start-game-button');
// const gameFieldElemts = document.querySelectorAll('#game-board li');
const gameBoardElement = document.getElementById('game-board');



//Added event listeners to clickable elements
editPlayerOneBtn.addEventListener('click', openPlayerConfig);
editPlayerTwoBtn.addEventListener('click', openPlayerConfig);
cancelConfigBtn.addEventListener('click', closePlayerConfig);
startNewGameBtn.addEventListener('click', startNewGame);
gameBoardElement.addEventListener('click', selectGameField);
backdrop.addEventListener('click', closePlayerConfig);
formElement.addEventListener('submit', savePlayerConfig);

// for (const gameFieldElemt of gameFieldElemts) {
//     gameFieldElemt.addEventListener('click', selectGameField);
// }

