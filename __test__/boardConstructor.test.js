import Gameboard from "../core/gameboard";

test("board constructor correctly creates 10x10 board", () => {
    const newBoard = new Gameboard();
    expect(newBoard.getBoard()).toHaveLength(10);
    for (let i = 0; i < 10; i++){
        const row = newBoard.getBoard()[i];
        expect(row).toHaveLength(10);
        expect(row).toContainEqual({
            value: 0,
            ship: null,
        })
    }
})
