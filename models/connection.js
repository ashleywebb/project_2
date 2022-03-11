require("dotenv").config();
const mongoose = require('mongoose')

/////////////////////////
// Database Connection //
/////////////////////////
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// Establish Connection
mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection 
    .on('open', () => {console.log('All good!')})
    .on('close', () => {console.log('B-Bye!')})
    .on('error', (error) => {console.log(error)})

module.exports = mongoose;