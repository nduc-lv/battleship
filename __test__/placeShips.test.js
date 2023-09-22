import Gameboard from "../core/gameboard";
test("correctly place ship in row direction with length equal to 4", () => {
    // mock ship constructor 
    const mockShip = jest.fn((length) =>{
    })

    const newBoard = new Gameboard();
    const board = newBoard.getBoard();
    newBoard.placeShip(4, [0, 3], "row", mockShip);

    // assert outgoing command message
    // mockShip constructor call only 1 time
    expect(mockShip.mock.calls).toHaveLength(1);

    // mockShip constructor have the correct argument
    expect(mockShip.mock.calls[0][0]).toBe(4);
    
    for (let i = 3; i < 4; i += 1){
        expect(board[0][i].value).toBe(1);
        expect(board[0][i].ship).toBeTruthy();
    }
})
test("correctly place ship in column direction with length equal to 4", () => {
    // mock ship constructor 
    const mockShip = jest.fn((length) =>{
    })

    const newBoard = new Gameboard();
    const board = newBoard.getBoard();
    newBoard.placeShip(4, [0, 3], "column", mockShip);

    // assert outgoing command message
    // mockShip constructor call only 1 time
    expect(mockShip.mock.calls).toHaveLength(1);

    // mockShip constructor have the correct argument
    expect(mockShip.mock.calls[0][0]).toBe(4);
    
    for (let i = 3; i < 4; i += 1){
        expect(board[0][i].value).toBe(1);
        expect(board[0][i].ship).toBeTruthy();
    }
})