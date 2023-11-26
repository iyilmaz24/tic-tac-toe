
addEventListener("DOMContentLoaded", () => {

    bigTitle = document.getElementById("big-title");

    gameGrid = document.getElementById("game-grid");
    gameGrid.innerHTML = "";
    for(let i = 0; i < 9; i++) // use a for loop to populate grid with tiles
    {
        gameGrid.innerHTML += `<button class="tile" id="index-${i}" value="${i}"></button>`;
    }

    gridTiles = document.getElementsByClassName("tile");
    for(let i = 0; i < 9; i++)
    {
        gridTiles[i].addEventListener("click", (e) => {gameController.makeMove(e.target.value)});
    }

    gameController = (function() {
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

        return {makeMove};
    } ());



    gameBoard = (function() {
        const marker = "X";
        const boardArray = [];
        const displayBoard = () => {
            for(let i = 0; i < 9; i++) {
                console.log(boardArray[i]);
            } 
        }
        const placeMarker = (position) => {
            if(gridTiles[position].innerHTML === "")
            {
                boardArray[position] = marker;
                gridTiles[position].innerHTML = marker;
            }
        }
        
        const resetBoard = () => {
// make all tiles empty of markers, empty out boardArray
        }
        const gameStatusCheck = () => {
            console.log("game status checker implemented here")
// check game won or not through board array using an algo
        }

        return {displayBoard, placeMarker, gameStatusCheck};

    }());

// implement the functionality for the resetBoard function and link it to the 'Reset Board' button
// implement 2nd player feature or randomized choice computer player
    // make game controller call the computer player to make a move after player
// implement gameStatusCheck
    // use game controller to check the game status after a move and call resetBoard accordingly
    // implement a on-screen pop up or something telling user they won or lost through game controller

})