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


