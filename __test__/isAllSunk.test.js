import Gameboard from "../core/gameboard";

test("isAllSunk correctly report all ship sunk", () => {
    const gameBoard = new Gameboard();

    expect(gameBoard.isAllSunk()).toBeTruthy();
})

test("isAllSunk correctly report all ship not sunk", () => {
    const mockShip = function(){
        this.isSunk = ()=>{};
    }

    const gameBoard = new Gameboard();

    gameBoard.placeShip(3, [0, 0], "row", mockShip);

    expect(gameBoard.isAllSunk()).toBeFalsy();
})

