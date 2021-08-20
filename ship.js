const shipFactory = (shipLength, name) => {
    hitArray = [],
    sunk = false
    
    function hit (hitPoint) {
        this.hitArray.push(hitPoint);
        isSunk(this);
    }
    
    function isSunk (ship) {
        ship.hitArray.length >= shipLength ? ship.sunk = true : ship.sunk = false;
    }
    
    return { shipLength, name, hitArray, sunk, hit }
};


module.exports = shipFactory;