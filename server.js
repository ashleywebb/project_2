/////////////////////////
// Import Dependencies //
/////////////////////////
require('dotenv').config();
const express = require('express')
const morgan = require ('morgan')
const methodOverride = require('method-override')
const fruitController = require('./controllers/plans')
const path = require('path')

//////////////////////
// App Object Setup //
//////////////////////
const app = express();
app.engine('jsx', require ('express-react-views').createEngine());
app.set('view engine', 'jsx')

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now listening on ${PORT}`))