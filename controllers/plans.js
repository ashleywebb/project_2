const express = require('express');
const Plans = require("../models/planner");

// CreateRouter
const router = express.Router();

router.get('/start', (req, res) => {
    const startEmpty = [
        {}
    ]
    // Delete
    Plans.deleteMany({}).then((data) => {
        Plans.create(startPlan).then((data) => {
            res.json(data);
        })
    }).catch((err) => {
        res.status(400).send(err)
    })
})


// Index
router.get('/', (req, res) => {
    Plans.find({})
    .then((plans) => {
        res.render("planner/Index", { plans })
    })
    .catch((error) => {
        res.status(400).json({error})
    })
})

// New
router.get('/new', (req, res) => {
    res.render('planner/New')
});


// Delete
router.get('')

module.exports = router