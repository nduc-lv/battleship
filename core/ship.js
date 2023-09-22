class Ship{
    constructor(length){
        this.length = length;
        this.sunk = false;
        this.hitTimes = 0;
    }

    // increase the number of hits on the ship
    hit(){
        this.hitTimes += 1;
    }

    getHitTimes(){
        return this.hitTimes;
    }

    // tell whether the ship is sunk or not
    isSunk(){
        if (this.getHitTimes() === this.length){
            return true;
        }
        return false;
    }
}

export default Ship;