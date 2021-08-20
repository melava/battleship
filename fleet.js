const shipFactory = require('./ship');

const fleetFactory = () => {
    const carrier = shipFactory(5, 'carrier');
    const battleship = shipFactory(4, 'battleship');
    const cruiser = shipFactory(3, 'cruiser');
    const destroyer1 = shipFactory(2, 'destroyer1');
    const destroyer2 = shipFactory(2, 'destroyer2');
    const submarine1 = shipFactory(1, 'submarine1');
    const submarine2 = shipFactory(1, 'submarine2');

    return { carrier, battleship, cruiser, destroyer1, destroyer2, submarine1, submarine2 }
};


module.exports = fleetFactory;