const GameBoardFactory = () => {
    board = createBoard(),
    missedHit = [],
    allSunk = false

    function createBoard () {
        let board = [];
        for (let i = 0; i < 100; i++) {
            board[i] = {slot: i, occupied: null, hit: false};
        }
        return board
    }

    function chooseCoordinates (ship, start, axis) {
        let horizontalLimitRule = 10 - (start%10) - ship.shipLength;
        let verticalLimitRule = 100 - start - (10*(ship.shipLength-1));
        if ( (axis == 'h' && horizontalLimitRule < 0) || (axis == 'v' && verticalLimitRule < 0) ) {
            throw new Error('This ship is too long for this position')
        } else {
            let position = Array(ship.shipLength);
            for (let i = 0; i < position.length; i++) {
                position[i] = start;
                axis == 'h' ? start += 1 : start += 10;
            }
            placeShipOnBoard(position, ship)
        }
    }

    function placeShipOnBoard(coordinatesArray, ship) {
        coordinatesArray.forEach(coord => {
            board.find(element => {
                if (element.slot === coord) element.occupied = ship.name
            });
        });
        // console.log(board)
    }

    function receiveAttack(coord, playerBoard) {
        let attackedSpot = playerBoard.board.find(element => element.slot === coord);
        if (attackedSpot.hit === true) {
            throw new Error('illegal move! This slot was already shot')
        }
        attackedSpot.hit = true;
        // console.log(attackedSpot)
        if (attackedSpot.occupied) {
            // console.log('hit!')
            checkIfLost(playerBoard);
            return attackedSpot.occupied;
        } else {
            // console.log('missed!')
            this.missedHit.push(coord);
            return attackedSpot.occupied
        } 
    }

    function checkIfLost(playerBoard) {
        let allOccupiedSlots = playerBoard.board.filter(element => element.occupied)
        // console.log(allOccupiedSlots)
        let sunkShips = allOccupiedSlots.filter(element => element.hit)
        // console.log(sunkShips)
        if (allOccupiedSlots.length === sunkShips.length) {
            // console.log('You lost! All your ships are sunk.');
            playerBoard.allSunk = true
        }
        return playerBoard.allSunk

    }

    return { board, missedHit, allSunk, chooseCoordinates, receiveAttack }
};


module.exports = GameBoardFactory;