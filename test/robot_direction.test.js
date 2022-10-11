const { movePosition } = require('../src/robot')

// Test inputs only for the movement function for the Robot
describe('Test the movement function for the Robot', () => {

    test('Check movement in the NORTH direction', () => {
        let curPositionX = 0;
        let curPositionY = 0;
        let curFaceDirection = 'NORTH';
        const getMovementNorth = movePosition(curPositionX, curPositionY, curFaceDirection);
        expect(getMovementNorth.length).toBe(3);
        expect(getMovementNorth[0]).toBe(0);
        expect(getMovementNorth[1]).toBe(1);
        expect(getMovementNorth[2]).toBe("NORTH");
    })

    test('Check movement in the SOUTH direction', () => {
        let curPositionX = 0;
        let curPositionY = 5;
        let curFaceDirection = 'SOUTH';
        const getMovementSouth = movePosition(curPositionX, curPositionY, curFaceDirection);
        expect(getMovementSouth.length).toBe(3);
        expect(getMovementSouth[0]).toBe(0);
        expect(getMovementSouth[1]).toBe(4);
        expect(getMovementSouth[2]).toBe("SOUTH");
    })

    test('Check movement in the EAST direction', () => {
        let curPositionX = 0;
        let curPositionY = 0;
        let curFaceDirection = 'EAST';
        const getMovementEast = movePosition(curPositionX, curPositionY, curFaceDirection);
        expect(getMovementEast.length).toBe(3);
        expect(getMovementEast[0]).toBe(1);
        expect(getMovementEast[1]).toBe(0);
        expect(getMovementEast[2]).toBe("EAST");
    })

    test('Check movement in the WEST direction', () => {
        let curPositionX = 5;
        let curPositionY = 0;
        let curFaceDirection = 'WEST';
        const getMovementEast = movePosition(curPositionX, curPositionY, curFaceDirection);
        expect(getMovementEast.length).toBe(3);
        expect(getMovementEast[0]).toBe(4);
        expect(getMovementEast[1]).toBe(0);
        expect(getMovementEast[2]).toBe("WEST");
    })

    test('Check if the value stops when movement is off the table', () => {
        // Check movement towards off the table from NORTH
        let curPositionX = 0;
        let curPositionY = 5;
        let curFaceDirection = 'NORTH';
        const getMovementNorth = movePosition(curPositionX, curPositionY, curFaceDirection);
        expect(getMovementNorth.length).toBe(3);
        expect(getMovementNorth[0]).toBe(0);
        expect(getMovementNorth[1]).toBe(5);
        expect(getMovementNorth[2]).toBe("NORTH");

        // Check movement towards off the table from SOUTH
        curPositionX = 0;
        curPositionY = 0;
        curFaceDirection = 'SOUTH';
        const getMovementSOUTH = movePosition(curPositionX, curPositionY, curFaceDirection);
        expect(getMovementSOUTH.length).toBe(3);
        expect(getMovementSOUTH[0]).toBe(0);
        expect(getMovementSOUTH[1]).toBe(0);
        expect(getMovementSOUTH[2]).toBe("SOUTH");

        // Check movement towards off the table from EAST
        curPositionX = 5;
        curPositionY = 0;
        curFaceDirection = 'EAST';
        const getMovementEAST = movePosition(curPositionX, curPositionY, curFaceDirection);
        expect(getMovementEAST.length).toBe(3);
        expect(getMovementEAST[0]).toBe(5);
        expect(getMovementEAST[1]).toBe(0);
        expect(getMovementEAST[2]).toBe("EAST");

        // Check movement towards off the table from WEST
        curPositionX = 0;
        curPositionY = 0;
        curFaceDirection = 'WEST';
        const getMovementWEST = movePosition(curPositionX, curPositionY, curFaceDirection);
        expect(getMovementWEST.length).toBe(3);
        expect(getMovementWEST[0]).toBe(0);
        expect(getMovementWEST[1]).toBe(0);
        expect(getMovementWEST[2]).toBe("WEST");
    })
})
