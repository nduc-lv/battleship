import Gameboard from "../core/gameboard";

test("receiveAttack successfully send hit to a ship", () => {
    const Ship = function (length){
        this.getHit = jest.fn(() => {});
    }
    
    const gameBoard = new Gameboard();
    const board = gameBoard.getBoard();
    gameBoard.placeShip(3, [0,0], "row", Ship);
    gameBoard.receiveAttack([0, 0]);

    const attackedShip = board[0][0].ship;
    // check if getHit is called
    expect(attackedShip.getHit.mock.calls).toHaveLength(1);
})

test("receiveAttack successfully change cell state", () => {
    const Ship = function (length){
        this.getHit = jest.fn(() => {});
    }
    const gameBoard = new Gameboard();
    const board = gameBoard.getBoard();
    gameBoard.placeShip(3, [0,0], "row", Ship);
    gameBoard.receiveAttack([0, 0]);

    // check if cell change state
    expect(board[0][0].value).toBe(-1);
})

test("receiveAttack successfully misses", () => {
    const Ship = function (length){
        this.getHit = jest.fn(() => {});
    }
    
    const gameBoard = new Gameboard();
    const board = gameBoard.getBoard();
    gameBoard.placeShip(3, [0,0], "row", Ship);
    gameBoard.receiveAttack([1, 1]);

    const attackedShip = board[0][0].ship;
    // check if getHit is called
    expect(attackedShip.getHit.mock.calls).toHaveLength(0);
    // check if cell stated is changed
    expect(board[1][1].value).toBe(-1);
})

