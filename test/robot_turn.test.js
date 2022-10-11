const { turnFace } = require('../src/robot')

// Test inputs only for the turnFace function for the Robot
describe('Test the turn face function for the Robot', () => {

    test('LEFT turn from NORTH', () => {
        let direction = 'LEFT';
        let curFaceDirection = 'NORTH';
        const getFaceDirection = turnFace(direction, curFaceDirection);
        expect(getFaceDirection).toBe('WEST');
    })

    test('LEFT turn from WEST', () => {
        let direction = 'LEFT';
        let curFaceDirection = 'WEST';
        const getFaceDirection = turnFace(direction, curFaceDirection);
        expect(getFaceDirection).toBe('SOUTH');
    })

    test('LEFT turn from SOUTH', () => {
        let direction = 'LEFT';
        let curFaceDirection = 'SOUTH';
        const getFaceDirection = turnFace(direction, curFaceDirection);
        expect(getFaceDirection).toBe('EAST');
    })

    test('LEFT turn from EAST', () => {
        let direction = 'LEFT';
        let curFaceDirection = 'EAST';
        const getFaceDirection = turnFace(direction, curFaceDirection);
        expect(getFaceDirection).toBe('NORTH');
    })

    test('RIGHT turn from NORTH', () => {
        let direction = 'RIGHT';
        let curFaceDirection = 'NORTH';
        const getFaceDirection = turnFace(direction, curFaceDirection);
        expect(getFaceDirection).toBe('EAST');
    })

    test('RIGHT turn from EAST', () => {
        let direction = 'RIGHT';
        let curFaceDirection = 'EAST';
        const getFaceDirection = turnFace(direction, curFaceDirection);
        expect(getFaceDirection).toBe('SOUTH');
    })

    test('RIGHT turn from SOUTH', () => {
        let direction = 'RIGHT';
        let curFaceDirection = 'SOUTH';
        const getFaceDirection = turnFace(direction, curFaceDirection);
        expect(getFaceDirection).toBe('WEST');
    })

    test('RIGHT turn from WEST', () => {
        let direction = 'RIGHT';
        let curFaceDirection = 'WEST';
        const getFaceDirection = turnFace(direction, curFaceDirection);
        expect(getFaceDirection).toBe('NORTH');
    })

})