
addEventListener("DOMContentLoaded", () => {

    tempDisplay = document.getElementsByTagName("div");
    console.log(tempDisplay[0]);

    gameBoard = (function() {
        const boardArray = [];
        const displayBoard = () => {
            for(let i = 0; i < 9; i++) {
                console.log(boardArray[i]);
            } 
        }
        const placeMarker = (marker, position) => {
            boardArray[position] = marker;
        }

        return {displayBoard, placeMarker};

    }());

    gameBoard.placeMarker("X", 4);
    gameBoard.placeMarker("O", 8);
    gameBoard.displayBoard();


})