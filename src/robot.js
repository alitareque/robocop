const getRobotPosition = (input) => {
    let curPositionY = null;
    let curPositionX = null;
    let curFaceDirection = null;
    input.forEach((elem, idx) => {
        const command = elem.split(' ')[0];
        switch (command) {
            case 'PLACE':
                const removeCommand = elem.split(' ')[1];
                [curPositionX, curPositionY, curFaceDirection] = removeCommand.split(',');
                if (curPositionX < 0 || curPositionX > 5) {
                    curPositionX = null;
                }
                if (curPositionY < 0  || curPositionY > 5) {
                    curPositionY = null;
                }
            break;
            case 'MOVE':
                if (curPositionX !== null && curPositionY !== null) {
                    const movementUpdated = movePosition(curPositionX, curPositionY, curFaceDirection);
                    [curPositionX, curPositionY, curFaceDirection] = movementUpdated;
                }
            break;
            case 'LEFT':
            case 'RIGHT':
                if (curPositionX !== null && curPositionY !== null) {
                    curFaceDirection = turnFace(command, curFaceDirection);
                }    
            break;
            case 'REPORT':
            break;
        }
    });
      
    if (curPositionX && curPositionY) {
        return curPositionX.toString().concat(', ', curPositionY.toString(), ', ', curFaceDirection);
    } else {
        return 'The toy robot cannot be placed on the table';
    }
}
const movePosition = (curPositionX, curPositionY, curFaceDirection) => {
    const minAxis = 0;
    const maxAxis = 5;
    switch (curFaceDirection) {
        case 'NORTH':
            if (curPositionY < maxAxis) {
                curPositionY++;
            }
        break;
        case 'SOUTH':
            if (curPositionY > minAxis) {
                curPositionY--;
            }
        break;
        case 'EAST':
            if (curPositionX < maxAxis) {
                curPositionX++;
            }
        break;
        case 'WEST':
            if (curPositionX > minAxis) {
                curPositionX--;
            }
        break;
    }
    return [curPositionX, curPositionY, curFaceDirection];
}

const turnFace = (direction, curFaceDirection) => {
    switch (direction) {
        case 'LEFT':
            switch (curFaceDirection) {
                case 'NORTH':
                    curFaceDirection = 'WEST';
                break;
                case 'SOUTH':
                    curFaceDirection = 'EAST';
                break;
                case 'EAST':
                    curFaceDirection = 'NORTH';
                break;
                case 'WEST':
                    curFaceDirection = 'SOUTH';
                break;
            }
        break;
        case 'RIGHT':
            switch (curFaceDirection) {
                case 'NORTH':
                    curFaceDirection = 'EAST';
                break;
                case 'SOUTH':
                    curFaceDirection = 'WEST';
                break;
                case 'EAST':
                    curFaceDirection = 'SOUTH';
                break;
                case 'WEST':
                    curFaceDirection = 'NORTH';
                break;
            }
        break;
    }
    return curFaceDirection;
}

module.exports = { getRobotPosition, movePosition, turnFace }