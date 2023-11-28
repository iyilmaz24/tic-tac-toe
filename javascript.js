
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
            if(gridTiles[i].innerHTML == "")
            {
                gameBoard.placeMarker(i);

                if(gameBoard.gameStatusCheck() == false){ // if player won, this will be skipped to next if statement, else computer plays
                    setTimeout(() => {
                        index = computerPlayer.makeRandomChoice(gameBoard.returnOpenSpaces());
                        gameBoard.placeMarker(index, "O");
                        gameBoard.gameStatusCheck();
                    }, 1000);
                }                // if above was skipped, we congratulate winner because of gameStatusCheck returning 'true', else
                if(gameBoard.gameStatusCheck() == true) // after computer plays, we check again to see if someone won through gameStatusCheck
                {                         
                    //if(gameBoard.playerWon == "true") {
                    bigTitle.innerHTML = "You Won!";
                    bigTitle.classList.add("greenText");  
                    // };      

                    //if(gameBoard.playerWon == "false") {
                    bigTitle.innerHTML = "You Lost!";
                    bigTitle.classList.add("redText");     
                    // };

                    setTimeout(() => {bigTitle.innerHTML = "Tic Tac Toe"; 
                    bigTitle.classList.remove("greenText");
                    bigTitle.classList.remove("redText");
                    gameBoard.resetBoard(); }, 5000);
                    // gameBoard.playerWon = null;
                }
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

        let playerWon = null;
        let boardArray = [];

        const placeMarker = (position, marker = "X") => {
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
            // check game won or not through board array using an algo

            // if player wins:
                // playerWon = true
                // return true

            // if computer wins
                // playerWon = false
                // return true

            return false;
        }
        const returnOpenSpaces = () => {
            let returnArray = [];
            for(let i = 0; i < 9; i++)
            {
                if(gridTiles[i].innerHTML == "")
                {
                    returnArray.push(i);
                }
            } // return all currently possible move indices in an array
            return returnArray;
        }

        return {placeMarker, gameStatusCheck, resetBoard, returnOpenSpaces};
    } ());


    computerPlayer = (function() {
        // makes a random choice from currently open spaces to simulate opponent
        const makeRandomChoice = (array) => {
            return array[Math.floor(Math.random() * array.length)];
        }

        return {makeRandomChoice};
    } ());


    gameController.populateTiles();
    gameController.addClickListeners();




// implement gameStatusCheck
    // use game controller to check the game status after a move and call resetBoard accordingly


})