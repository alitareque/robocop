const { getRobotPosition } = require('./src/robot')
const express = require('express')

let inputCommandArr = [];
// Read input data from input.txt file
const fs = require('fs');
try {  
    var data = fs.readFileSync('./src/input.txt', 'utf8');
    inputCommandArr = (data).split(/\n/i);
} catch(e) {
    console.log('Error:', e.stack);
}
let positionOutput = '';
if (inputCommandArr.length > 0) {
    positionOutput = getRobotPosition(inputCommandArr);
    console.log(positionOutput);
}


const app = express()
const port = 3000

let output = 'Test';

app.get('/', (req, res) => {
  res.send(positionOutput)
})

app.listen(port, () => {
  console.log(`The ROBOT app is running here http://localhost:${port}`)
})