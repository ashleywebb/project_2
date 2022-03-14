/////////////////////////
// Import Dependencies //
/////////////////////////
require('dotenv').config();
const express = require('express')
const morgan = require ('morgan')
const methodOverride = require('method-override')
const plansController = require('./controllers/plans')
const path = require('path')

//////////////////////
// App Object Setup //
//////////////////////
const app = express();
app.engine('jsx', require ('express-react-views').createEngine());
app.set('view engine', 'jsx')

////////////////
// Middleware //
////////////////
app.use(morgan("tiny"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static("public"));


////////////
// Routes //
////////////
app.use('/plans', plansController)
app.get('/', (req, res) => {
    res.send("Your server is running!")
})


/////////////////////
// Server Listener //
/////////////////////
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Now listening on ${PORT}`))