
addEventListener("DOMContentLoaded", () => {


    // use gameController to control flow of entire game
    gameController = (function() {

        bigTitle = document.getElementById("big-title");
        gameGrid = document.getElementById("game-grid");
        gameGrid.innerHTML = "";

        const populateTiles = () => {
            for(let i = 0; i < 9; i++) // use a for loop to populate grid with tiles
            {
                gameGrid.innerHTML += `<button class="tile" id="index-${i}" value="${i}"></button>`;
            }
        }
        const addClickListeners = () => {
            gridTiles = document.getElementsByClassName("tile");
            for(let i = 0; i < 9; i++) // add click event listener to each tile
            {
                gridTiles[i].addEventListener("click", (e) => {gameController.makeMove(e.target.value)});
            }

            resetButton = document.getElementById("reset-button");
            resetButton.addEventListener("click", () => {gameBoard.resetBoard()});
        }
        const makeMove = (i) => {
            if(gridTiles[i].innerHTML === "")
            {
                gameBoard.placeMarker(i);
                gameBoard.gameStatusCheck();
            }
            else
            {
                // changes game title color to crimson and makes it shake
                bigTitle.classList.add("shakeAnimation");
                setTimeout(() => {bigTitle.classList.remove("shakeAnimation")}, 800);
            }
        }

        return {makeMove, populateTiles, addClickListeners};
    } ());


    // use gameBoard to manage the grid + game status, and place + track pieces
    gameBoard = (function() {

        const marker = "X";
        let boardArray = [];

        const placeMarker = (position) => {
            if(gridTiles[position].innerHTML === "")
            {
                boardArray[position] = marker;
                gridTiles[position].innerHTML = marker;
            }
        }
        const resetBoard = () => {
            boardArray = [];
            for(let i = 0; i < 9; i++)
            {
                gridTiles[i].innerHTML = "";
            }
        }
        const gameStatusCheck = () => {
            console.log("game status checker implemented here")
            // check game won or not through board array using an algo
        }

        return {placeMarker, gameStatusCheck, resetBoard};

    }());

// implement 2nd player feature or randomized choice computer player
    // make game controller call the computer player to make a move after player
// implement gameStatusCheck
    // use game controller to check the game status after a move and call resetBoard accordingly
    // implement a on-screen pop up or something telling user they won or lost through game controller

    gameController.populateTiles();
    gameController.addClickListeners();

})