const { getRobotPosition } = require('../src/robot')
// Initial placement outside the table
const outsidePlacementYmin = [
    'PLACE 0,-1,NORTH',
    'REPORT'
];
const outsidePlacementYmax = [
    'PLACE 0,6,NORTH',
    'REPORT'
];
const outsidePlacementXmin = [
    'PLACE -1,0,NORTH',
    'REPORT'
];
const outsidePlacementXmax = [
    'PLACE 6,0,NORTH',
    'REPORT'
];
// Check if the robot moves outside < 0 or >5 along X axis
const movingXmin = [
    'PLACE 0,0,NORTH',
    'LEFT',
    'MOVE',
    'REPORT'
];
const movingXmax = [
    'PLACE 5,0,NORTH',
    'RIGHT',
    'MOVE',
    'REPORT'
];
// Check if the robot moves outside < 0 or >5 along Y axis
const movingYmin = [
    'PLACE 0,0,SOUTH',
    'MOVE',
    'REPORT'
];
const movingYmax = [
    'PLACE 0,5,NORTH',
    'MOVE',
    'REPORT'
];

describe('Robot Movement Tracker Integration Test Suite', () => { 
    test('Initially placed the toy robot outside the table - Should throw error text', () => { 
        // Checking along Y axis for min and max values to place the robot on the table
        const outputYMin = getRobotPosition(outsidePlacementYmin);
        expect(outputYMin).toBe('The toy robot cannot be placed on the table');
        const outputYMax = getRobotPosition(outsidePlacementYmax);
        expect(outputYMax).toBe('The toy robot cannot be placed on the table');

        // Checking along X axis for min and max values to place the robot on the table
        const outputXMin = getRobotPosition(outsidePlacementXmin);
        expect(outputXMin).toBe('The toy robot cannot be placed on the table');
        const outputXMax = getRobotPosition(outsidePlacementXmax);
        expect(outputXMax).toBe('The toy robot cannot be placed on the table');
    })

    test('Check if the robot stops before moving to the left or right of X axis where the table ends', () => {
        const outputMovingXmin = getRobotPosition(movingXmin);
        expect(outputMovingXmin).toBe('0, 0, WEST');
        const outputMovingXmax = getRobotPosition(movingXmax);
        expect(outputMovingXmax).toBe('5, 0, EAST');
    })

    test('Check if the robot stops before moving to the top or bottom of Y axis where the table ends', () => {
        const outputMovingYmin = getRobotPosition(movingYmin);
        expect(outputMovingYmin).toBe('0, 0, SOUTH');
        const outputMovingYmax = getRobotPosition(movingYmax);
        expect(outputMovingYmax).toBe('0, 5, NORTH');
    })
})
