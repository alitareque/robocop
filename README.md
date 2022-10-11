# Robocop
This app tracks a robot movement and prevents it to fall off a table

**How To Download**

Please clone or download the zip file from the main branch

**Setup the app**

To set up the app just run the following command:

`npm i`

**Run the app**

To run the app just go to the root folder and run:

`npm start`

**Input file**

The input file is located in the src/input.txt file.

Please provide the input in the file.

For any changes please re-save the index.js file so that teh nodemon server would restart.

**Ouput**

Output can be seen on the terminal console and also on a browser at http://localhost/3000.

Please note in the server restarts, the browser needs to be refreshed to see the changes.

**Test**

Please run the following command to run the whole test suite:

`npm run test`

Run the following command to run the integration test only:

`npm run test robot.test.js`

Run the following command to run the direction test only:

`npm run test robot_direction.test.js`

Run the following command to run the turn face test only:

`npm run test robot_turn.test.js`

