import Ship from "../core/ship";

test("Hit correctly make ship get hit one time", () => {
    const newShip = new Ship(3);
    const currentHit = newShip.getHitTimes();
    newShip.hit();
    expect(newShip.getHitTimes()).toBe(currentHit + 1);
})
test("Hit correctly make ship get hit at random time", () => {
    const newShip = new Ship(5);
    const hitTimes = Math.floor(Math.random() * 5);
    // hit the ship
    for (let i = 0; i < hitTimes; i++){
        newShip.hit();
    }
    // check if hit behave correctly
    expect(newShip.getHitTimes()).toBe(hitTimes);
})