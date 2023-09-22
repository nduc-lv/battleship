class Gameboard {
    constructor(){
        // create 10x10 board
        this.board = [];
        this.shipRegisters = [];
        for (let i = 0; i < 10; i += 1){
            const tempArray = [];
            for (let j = 0; j < 10; j += 1){
                const cell = {
                    value: 0,
                    ship: null,
                }
                tempArray.push(cell);
            }
            this.board.push(tempArray);
        }
    }

    getBoard(){
        return this.board;
    }

    // place a ship on the board
    placeShip(shipLength, [startingLocationX, startingLocationY], direction, Ship){
        const ship = new Ship(shipLength);
        this.shipRegisters.push(ship);
        const board = this.getBoard();
        if (direction === 'row'){
            for (let currPart = startingLocationY; currPart < shipLength; currPart += 1){
                // mark the cell as occupied
                const cell = board[startingLocationX][currPart];
                cell.value = 1;
                cell.ship = ship;
            }
        }
        if (direction === 'column'){
            for (let currPart = startingLocationX; currPart < shipLength; currPart += 1){
                // mark the cell is occupied
                const cell = board[currPart][startingLocationY];
                cell.value = 1;
                cell.ship = ship;
            }
        }
    }

    // record the attack
    receiveAttack([corX, corY]){
        const board = this.getBoard();
        const cell = board[corX][corY];
        // hit the ship if attack hits
        if (cell.value === 1){
            cell.ship.getHit();
        }
        cell.value = -1;
    }

    // check if all ship is shink
    isAllSunk(){
        for (let i = 0; i < this.shipRegisters.length; i++){
            if (!(this.shipRegisters[i].isSunk())){
                return false;
            }
        }
        return true;
    }
}

export default Gameboard;