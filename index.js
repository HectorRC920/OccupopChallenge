const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();

const routerAPI = require('./app/routes');

// we make a global router to have them all in one place
// in case of changing something in the future we can create a new one and replace the existing one
new routerAPI(app);

console.log('Server is running on port ' + process.env.NODE_LOCAL_PORT || 3000)

app.listen(process.env.NODE_LOCAL_PORT || 3000)