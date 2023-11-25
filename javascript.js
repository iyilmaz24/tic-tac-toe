
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
        gridTiles[i].addEventListener("click", () => {
            gameController.makeMove(i);
        });
    }

    gameController = (function() {
        const makeMove = (i) => {
            gameBoard.placeMarker(i);
            gameBoard.gameStatusCheck();
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
            else {
                // changes title color to crimson and makes it shake
                bigTitle.classList.add("shakeAnimation");
                setTimeout(() => {bigTitle.classList.remove("shakeAnimation")}, 800);

            }
            // remove the click event listener so tile cant be clicked
                // remove the click event listener here or in the game controller
        }
        const resetBoard = () => {
            // make all tiles empty of markers, empty out boardArray
                // give all click event listeners back to tiles
        }
        const gameStatusCheck = () => {
            console.log("game status checker implemented here")
            // check game won or not through board array using an algo
        }

        return {displayBoard, placeMarker, gameStatusCheck};

    }());


})