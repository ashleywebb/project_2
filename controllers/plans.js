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
        Plans.create(startEmpty).then((data) => {
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
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Plans.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/plans');
        })
        .catch((error) => {
            res.status(400).json({error})
        })
})


// Update
router.put('/:id', (req, res) => {
    const {id} = req.params;
    req.body.todoDone = req.body.todoDone === 'on' ? true : false;

    Plans.findByIdAndUpdate(id, req.body, { new: true })
    .then(() => {
        res.redirect(`/plans/${id}`)
    })
    .catch((error) => {
        res.status(400).json({error})
    })
})


//Create
router.post('/', (req, res) => {
    req.body.todoDone = req.body.todoDone === 'on' ? true : false;
    Plans.create(req.body)
        .then((createdPlans) => {
            res.redirect(`/plans/${createdPlans._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


//Edit
router.get('/:id/edit', (req, res) => {
    const {id} = req.params
    Plans.findById(id)
        .then((planner) => {
            res.render('planner/Edit', { planner })
        })
        .catch((error) => {
            res.status(400).json({error})
        })
})


//Show
router.get('/:id', (req, res) => {
    const {id} = req.params;
    Plans.findById(id)
        .then((plans) => {
            res.render('planner/Show', { plans })
        })
        .catch((error) => {
            res.status(400).json({error})
        })
})

module.exports = router;