import Ship from '../core/ship';

test("isSunk correctly return true when the ship is sunk", () => {
    const newShip = new Ship(3);
    for (let i = 0; i < 3; i++){
        newShip.hit();
    }
    expect(newShip.isSunk()).toBe(true);
})
test("isSunk correctly return false when the ship is not sunk", () => {
    const newShip = new Ship(4);
    const hitTimes = Math.floor(Math.random() * 4);
    for (let i = 0; i < hitTimes; i += 1){
        newShip.hit();
    }
    expect(newShip.isSunk()).toBe(false);
})