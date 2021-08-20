const shipFactory = require('./ship');
const fleetFactory = require('./fleet');
const GameBoardFactory = require('./gameboard');
const PlayerFactory = require('./player');

{
    
// test('initialize a ship with the ship factory with hitPoint set to 0 and is not sunk', () => {
//     expect(shipFactory(1).shipLength).toBe(1);
//     expect(shipFactory(1).hitArray).toEqual([]);
//     expect(shipFactory(1).sunk).toBeFalsy();
// });

// describe('hit function', () => {
//     test('hit once a ship with a length of 2', () => {
//         myShip = shipFactory(2);
//         expect(myShip.hitArray).toEqual([]);
//         myShip.hit(23);
//         expect(myShip.hitArray).toEqual([23]);
//         expect(myShip.sunk).toBeFalsy();
//     });
//     test('hit 2x a ship with a length of 2', () => {
//         myShip = shipFactory(2);
//         myShip.hit(23);
//         myShip.hit(24);
//         expect(myShip.hitArray).toEqual([23, 24]);
//         expect(myShip.sunk).toBeTruthy(); 
//     });
// });

// describe('initialize a board', () => {
//     test('board has 100 slots', () => {
//         expect(GameBoardFactory().board.length).toEqual(100);
//     });
//     test('each board slot is an object with a name equal to its position', () => {
//         expect(GameBoardFactory().board[2].slot).toEqual(2);
//     });
//     test('each board slot is an object with a occupied property set to null before the game', () => {
//         expect(GameBoardFactory().board[2].occupied).toBeNull();
//     });
// });

// describe('position a ship through the ship factory', () => {
//     beforeEach(() => {
//         myBoard = GameBoardFactory();
//     });
    
//     test('ship horizontal with position between 6th & 10th col', () => {
//         myShip = shipFactory(5, 'myShip');
//         // console.log(myShip);
//         myBoard.chooseCoordinates(myShip, 5, 'h');
//         expect(myBoard.board[5].occupied).toEqual('myShip');
//         expect(myBoard.board[6].occupied).toEqual('myShip');
//         expect(myBoard.board[7].occupied).toEqual('myShip');
//         expect(myBoard.board[8].occupied).toEqual('myShip');
//         expect(myBoard.board[9].occupied).toEqual('myShip');
//     });
//     test('ship vertical with position between line 7 & 10 on 6th column', () => {
//         myShip = shipFactory(4, 'myShip');
//         myBoard.chooseCoordinates(myShip, 65, 'v');
//         expect(myBoard.board[65].occupied).toEqual('myShip');
//         expect(myBoard.board[75].occupied).toEqual('myShip');
//         expect(myBoard.board[85].occupied).toEqual('myShip');
//         expect(myBoard.board[95].occupied).toEqual('myShip');
//     });
//     test('illegal horizontal ship placement', () => {
//         myShip = shipFactory(5, 'myShip');
//         expect(() => myBoard.chooseCoordinates(myShip, 8, 'h')).toThrow();
//     });
//     test('illegal vertical ship placement', () => {
//         myShip = shipFactory(5, 'myShip');
//         expect(() => myBoard.chooseCoordinates(myShip, 75, 'v')).toThrow();
//     });
// });

// describe('position ships on the board', () => {
//     beforeEach(() => {
//         myBoard = GameBoardFactory();
        
//         myLittleShip = shipFactory(1, 'littleShip');
//         myMediumShip = shipFactory(3, 'mediumShip');
//         myBigShip = shipFactory(5, 'bigShip');
//     });
    
//     test('place 3 ships of different size on the board and verify other slots are empty', () => {
//         myBoard.chooseCoordinates(myLittleShip, 71, 'h');
//         myBoard.chooseCoordinates(myMediumShip, 2, 'h');
//         myBoard.chooseCoordinates(myBigShip, 24, 'v');
//         // console.log(myBoard.board)
//         expect(myBoard.board[71].occupied).toBe('littleShip');
//         expect(myBoard.board[61].occupied).toBe(null);
//         expect(myBoard.board[72].occupied).toBe(null);
//         expect(myBoard.board[81].occupied).toBe(null);
//         expect(myBoard.board[70].occupied).toBe(null);

//         expect(myBoard.board[2].occupied).toBe('mediumShip');
//         expect(myBoard.board[3].occupied).toBe('mediumShip');
//         expect(myBoard.board[4].occupied).toBe('mediumShip');
//         expect(myBoard.board[1].occupied).toBe(null);
//         expect(myBoard.board[5].occupied).toBe(null);
//         expect(myBoard.board[12].occupied).toBe(null);
//         expect(myBoard.board[13].occupied).toBe(null);
//         expect(myBoard.board[14].occupied).toBe(null);
        
//         expect(myBoard.board[24].occupied).toBe('bigShip');
//         expect(myBoard.board[34].occupied).toBe('bigShip');
//         expect(myBoard.board[44].occupied).toBe('bigShip');
//         expect(myBoard.board[54].occupied).toBe('bigShip');
//         expect(myBoard.board[64].occupied).toBe('bigShip');
//         expect(myBoard.board[14].occupied).toBe(null);
//         expect(myBoard.board[25].occupied).toBe(null);
//         expect(myBoard.board[35].occupied).toBe(null);
//         expect(myBoard.board[45].occupied).toBe(null);
//         expect(myBoard.board[55].occupied).toBe(null);
//         expect(myBoard.board[65].occupied).toBe(null);
//         expect(myBoard.board[74].occupied).toBe(null);
//         expect(myBoard.board[63].occupied).toBe(null);
//         expect(myBoard.board[53].occupied).toBe(null);
//         expect(myBoard.board[43].occupied).toBe(null);
//         expect(myBoard.board[33].occupied).toBe(null);
//         expect(myBoard.board[23].occupied).toBe(null);
//     });
// });

// describe('create a fleet with several ships', () => {
//     test('create fleet', () => {
//         expect(fleetFactory().carrier.shipLength).toBe(5);
//         expect(fleetFactory().battleship.shipLength).toBe(4);
//         expect(fleetFactory().cruiser.shipLength).toBe(3);
//         expect(fleetFactory().destroyer1.shipLength).toBe(2);
//         expect(fleetFactory().destroyer2.shipLength).toBe(2);
//         expect(fleetFactory().submarine1.shipLength).toBe(1);
//         expect(fleetFactory().submarine2.shipLength).toBe(1);
//     });
// });

// describe('create a fleet -via fleet factory- and position all ships on the board', () => {
//     beforeEach(() => {
//         myBoard = GameBoardFactory();

//         carrier = fleetFactory().carrier;
//         battleship = fleetFactory().battleship;
//         cruiser = fleetFactory().cruiser;
//         destroyer1 = fleetFactory().destroyer1;
//         destroyer2 = fleetFactory().destroyer2;
//         submarine1 = fleetFactory().submarine1;
//         submarine2 = fleetFactory().submarine2
        
//         myBoard.chooseCoordinates(submarine1, 71, 'h');
//         myBoard.chooseCoordinates(submarine2, 42, 'v');
//         myBoard.chooseCoordinates(destroyer1, 26, 'v');
//         myBoard.chooseCoordinates(destroyer2, 40, 'v');
//         myBoard.chooseCoordinates(cruiser, 2, 'h');
//         myBoard.chooseCoordinates(battleship, 96, 'h');
//         myBoard.chooseCoordinates(carrier, 24, 'v');
//     });
    
//     test('check submarine1 is correctly placed on the board and verify other slots around are empty', () => {
//         // console.log(myBoard.board)
//         expect(myBoard.board[71].occupied).toBe(submarine1.name);
//         expect(myBoard.board[61].occupied).toBe(null);
//         expect(myBoard.board[72].occupied).toBe(null);
//         expect(myBoard.board[81].occupied).toBe(null);
//         expect(myBoard.board[70].occupied).toBe(null);
//     });

//     test('check submarine2 is correctly placed on the board and verify other slots around are empty', () => {
//         // console.log(myBoard.board)
//         expect(myBoard.board[42].occupied).toBe(submarine2.name);
//         expect(myBoard.board[32].occupied).toBe(null);
//         expect(myBoard.board[43].occupied).toBe(null);
//         expect(myBoard.board[52].occupied).toBe(null);
//         expect(myBoard.board[41].occupied).toBe(null);
//     });

//     test('check destroyer1 is correctly placed on the board and verify other slots around are empty', () => {
//         // console.log(myBoard.board)
//         expect(myBoard.board[26].occupied).toBe(destroyer1.name);
//         expect(myBoard.board[36].occupied).toBe(destroyer1.name);
//         expect(myBoard.board[16].occupied).toBe(null);
//         expect(myBoard.board[27].occupied).toBe(null);
//         expect(myBoard.board[37].occupied).toBe(null);
//         expect(myBoard.board[46].occupied).toBe(null);
//         expect(myBoard.board[35].occupied).toBe(null);
//         expect(myBoard.board[25].occupied).toBe(null);
//     });

//     test('check destroyer2 is correctly placed on the board and verify other slots around are empty', () => {
//         // console.log(myBoard.board)
//         expect(myBoard.board[40].occupied).toBe(destroyer2.name);
//         expect(myBoard.board[50].occupied).toBe(destroyer2.name);
//         expect(myBoard.board[30].occupied).toBe(null);
//         expect(myBoard.board[41].occupied).toBe(null);
//         expect(myBoard.board[51].occupied).toBe(null);
//         expect(myBoard.board[60].occupied).toBe(null);
//     });

//     test('check cruiser is correctly placed on the board and verify other slots around are empty', () => {
//         // console.log(myBoard.board)
//         expect(myBoard.board[2].occupied).toBe(cruiser.name);
//         expect(myBoard.board[3].occupied).toBe(cruiser.name);
//         expect(myBoard.board[4].occupied).toBe(cruiser.name);
//         expect(myBoard.board[1].occupied).toBe(null);
//         expect(myBoard.board[5].occupied).toBe(null);
//         expect(myBoard.board[12].occupied).toBe(null);
//         expect(myBoard.board[13].occupied).toBe(null);
//         expect(myBoard.board[14].occupied).toBe(null);
//     });

//     test('check battleship is correctly placed on the board and verify other slots around are empty', () => {
//         // console.log(myBoard.board)
//         expect(myBoard.board[96].occupied).toBe(battleship.name);
//         expect(myBoard.board[97].occupied).toBe(battleship.name);
//         expect(myBoard.board[98].occupied).toBe(battleship.name);
//         expect(myBoard.board[99].occupied).toBe(battleship.name);
//         expect(myBoard.board[95].occupied).toBe(null);
//         expect(myBoard.board[86].occupied).toBe(null);
//         expect(myBoard.board[87].occupied).toBe(null);
//         expect(myBoard.board[88].occupied).toBe(null);
//         expect(myBoard.board[89].occupied).toBe(null);
//     });

//     test('check carrier is correctly placed on the board and verify other slots around are empty', () => {
//         // console.log(myBoard.board)
//         expect(myBoard.board[24].occupied).toBe(carrier.name);
//         expect(myBoard.board[34].occupied).toBe(carrier.name);
//         expect(myBoard.board[44].occupied).toBe(carrier.name);
//         expect(myBoard.board[54].occupied).toBe(carrier.name);
//         expect(myBoard.board[64].occupied).toBe(carrier.name);
//         expect(myBoard.board[14].occupied).toBe(null);
//         expect(myBoard.board[25].occupied).toBe(null);
//         expect(myBoard.board[35].occupied).toBe(null);
//         expect(myBoard.board[45].occupied).toBe(null);
//         expect(myBoard.board[55].occupied).toBe(null);
//         expect(myBoard.board[65].occupied).toBe(null);
//         expect(myBoard.board[74].occupied).toBe(null);
//         expect(myBoard.board[63].occupied).toBe(null);
//         expect(myBoard.board[53].occupied).toBe(null);
//         expect(myBoard.board[43].occupied).toBe(null);
//         expect(myBoard.board[33].occupied).toBe(null);
//         expect(myBoard.board[23].occupied).toBe(null);
//     });
// });



// describe('test receive attack function', () => {
//     beforeEach(() => {
//         myBoard = GameBoardFactory();
//         myFleet = fleetFactory();
        
//         myBoard.chooseCoordinates(myFleet.submarine1, 71, 'h');
//         myBoard.chooseCoordinates(myFleet.submarine2, 42, 'v');
//         myBoard.chooseCoordinates(myFleet.destroyer1, 26, 'v');
//         myBoard.chooseCoordinates(myFleet.destroyer2, 40, 'v');
//         myBoard.chooseCoordinates(myFleet.cruiser, 2, 'h');
//         myBoard.chooseCoordinates(myFleet.battleship, 96, 'h');
//         myBoard.chooseCoordinates(myFleet.carrier, 24, 'v');
//     });
    
//     test('attack an empty slot', () => {
//         // console.log(myBoard.board)
//         myBoard.receiveAttack(23);
//         expect(myBoard.board[23].occupied).toBe(null);
//         expect(myBoard.board[23].hit).toBeTruthy();
//         expect(myBoard.missedHit).toEqual([23]);
        
//     });
    
//     test('attack several empty slots', () => {
//         // console.log(myBoard.board)
//         myBoard.receiveAttack(23);
//         expect(myBoard.board[23].occupied).toBe(null);
//         expect(myBoard.board[23].hit).toBeTruthy();
//         expect(myBoard.missedHit).toEqual([23]);
//         myBoard.receiveAttack(0);
//         expect(myBoard.board[0].occupied).toBe(null);
//         expect(myBoard.board[0].hit).toBeTruthy();
//         expect(myBoard.missedHit).toEqual([23, 0]);
        
//     });
    
//     test('hit the carrier in slot 54', () => {
//         let shot = myBoard.receiveAttack(54);
//         expect(myBoard.board[54].occupied).toBe('carrier');
//         myFleet[shot].hit(54)
//         expect(myFleet[shot].hitArray).toEqual([54]);
//         expect(myFleet[shot].sunk).toBeFalsy();
//     });
    
//     test('hit and sink destroyer', () => {
//         let shot1 = myBoard.receiveAttack(26);
//         let shot2 = myBoard.receiveAttack(36);
//         myFleet[shot1].hit(26);
//         expect(myFleet[shot1].hitArray).toEqual([26]);
//         expect(myFleet[shot1].sunk).toBeFalsy();
//         myFleet[shot2].hit(36);
//         expect(myFleet[shot2].hitArray).toEqual([26, 36]);
//         expect(myFleet[shot2].sunk).toBeTruthy();
//     })
// });

// describe('test receive attack function', () => {
//     beforeEach(() => {
//         myBoard = GameBoardFactory();
//         myFleet = fleetFactory();
        
//         myBoard.chooseCoordinates(myFleet.submarine1, 71, 'h');
//         myBoard.chooseCoordinates(myFleet.destroyer1, 26, 'v');
//         myBoard.chooseCoordinates(myFleet.cruiser, 2, 'h');
//     });
    
//     test('hit and sink all 3 ships on board', () => {
//         let shot = myBoard.receiveAttack(26);
//         myFleet[shot].hit(26);
//         expect(myBoard.allSunk).toBeFalsy();
//         shot = myBoard.receiveAttack(36);
//         myFleet[shot].hit(36);
//         expect(myBoard.allSunk).toBeFalsy();
//         shot = myBoard.receiveAttack(71);
//         myFleet[shot].hit(71);
//         expect(myBoard.allSunk).toBeFalsy();
//         shot = myBoard.receiveAttack(2);
//         myFleet[shot].hit(2);
//         expect(myBoard.allSunk).toBeFalsy();
//         shot = myBoard.receiveAttack(3);
//         myFleet[shot].hit(3);
//         expect(myBoard.allSunk).toBeFalsy();
//         shot = myBoard.receiveAttack(4);
//         myFleet[shot].hit(4);
//         expect(myBoard.allSunk).toBeTruthy();
//         expect(myFleet.submarine1.hitArray).toEqual([71]);
//         expect(myFleet.destroyer1.hitArray).toEqual([26, 36]);
//         expect(myFleet.cruiser.hitArray).toEqual([2, 3, 4]);
//         expect(myFleet.submarine1.sunk).toBeTruthy();
//         expect(myFleet.destroyer1.sunk).toBeTruthy();
//         expect(myFleet.cruiser.sunk).toBeTruthy();
        
        
        
        
//     })
// });

}

describe('create a player', () => {
    test('initialize player', () => {
        myBoard = GameBoardFactory();
        myFirstPlayer = PlayerFactory('Penelope');
        mySecondPlayer = PlayerFactory('Cyril');
        expect(myFirstPlayer.name).toBe('Penelope');
        expect(mySecondPlayer.name).toBe('Cyril');
    });

    test('give a board to each player', () => {
        myBoard = GameBoardFactory();
        myFirstPlayer = PlayerFactory('Penelope', myBoard);
        mySecondPlayer = PlayerFactory('Cyril', myBoard);
        expect(myFirstPlayer.name).toBe('Penelope');
        expect(myFirstPlayer.board).toBeDefined();
        expect(mySecondPlayer.name).toBe('Cyril');
        expect(mySecondPlayer.board).toBeDefined();
    });

    test('give a complete fleet (7 ships) to each player', () => {
        myBoard = GameBoardFactory();
        myFleet = fleetFactory();
        myFirstPlayer = PlayerFactory('Penelope', myBoard, myFleet);
        mySecondPlayer = PlayerFactory('Cyril', myBoard, myFleet);
        expect(myFirstPlayer.name).toBe('Penelope');
        expect(myFirstPlayer.board).toBeDefined();
        expect(myFirstPlayer.fleet).toBeDefined();
        expect(Object.keys(myFirstPlayer.fleet).length).toBe(7);
        expect(mySecondPlayer.name).toBe('Cyril');
        expect(mySecondPlayer.board).toBeDefined();
        expect(mySecondPlayer.fleet).toBeDefined();
        expect(Object.keys(mySecondPlayer.fleet).length).toBe(7);
    });

    test('place a ship on each board', () => {
        myFirstPlayer = PlayerFactory('Penelope', GameBoardFactory(), fleetFactory());
        myFirstPlayer.board.chooseCoordinates(myFirstPlayer.fleet.submarine1, 71, 'h');
        expect(myFirstPlayer.board.board[71].occupied).toBe('submarine1');
        expect(myFirstPlayer.board.board[2].occupied).toBe(null);
        // console.log(myFirstPlayer.board.board)
        
        mySecondPlayer = PlayerFactory('Cyril', GameBoardFactory(), fleetFactory());
        mySecondPlayer.board.chooseCoordinates(mySecondPlayer.fleet.cruiser, 2, 'h');
        expect(mySecondPlayer.board.board[2].occupied).toBe('cruiser');
        expect(mySecondPlayer.board.board[3].occupied).toBe('cruiser');
        expect(mySecondPlayer.board.board[4].occupied).toBe('cruiser');
        expect(mySecondPlayer.board.board[71].occupied).toBe(null);
        // console.log(mySecondPlayer.board.board)
        
    })

});


// Player
// Players can take turns playing the game by attacking the enemy Gameboard.
// ‘computer’ players must do random LEGAL moves. 
// ILLEGAL move = shoot the same coordinate twice.

