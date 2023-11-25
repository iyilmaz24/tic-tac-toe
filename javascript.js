
addEventListener("DOMContentLoaded", () => {

    gameGrid = document.getElementById("game-grid");
    gameGrid.innerHTML = "";
    for(let i = 0; i < 9; i++) // use a for loop to populate grid with tiles
    {
        gameGrid.innerHTML += `<button class="tile" id="index-${i}" value="${i}"></button>`;
    }

    gridTiles = document.getElementsByClassName("tile");
    for(let i = 0; i < 9; i++)
    {
        gridTiles[i].addEventListener("click", () => {console.log("hello")});
        // write a callback function that validates tile is empty,
            // places the piece, and then checks if game is won or not
                // keep the functionality in gameBoard but call it in game controller
    }

    // make a game controller that coordinates the flow of the game
    // consider pros and cons of making it a IIFE

    gameBoard = (function() {
        const boardArray = [];
        const displayBoard = () => {
            for(let i = 0; i < 9; i++) {
                console.log(boardArray[i]);
            } 
        }
        const placeMarker = (marker, position) => {
            // check the tile isnt occupied before placing marker
            boardArray[position] = marker;
            // remove the click event listener so tile cant be clicked
                // remove the click event listener here or in the game controller
        }
        const resetBoard = () => {
            // make all tiles empty of markers, empty out boardArray
                // give all click event listeners back to tiles
        }
        const gameStatus = () => {
            // check game won or not through board array using an algo
        }

        return {displayBoard, placeMarker};

    }());

    gameBoard.placeMarker("X", 4);
    gameBoard.placeMarker("O", 8);
    gameBoard.displayBoard();


})