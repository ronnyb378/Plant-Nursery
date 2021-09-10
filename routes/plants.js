const express = require('express');
const db = require('../models');
const router = express.Router();
// const db = require('../models')

// Get all Plants
// Get /api/v1/plants
router.get('/', async function(req, res, next){
    // find all plants in db
    const plants = await db.Plant.findAll({
        include: [{
            model: db.User,
            attributes: ['username']
        }]
    })
    // send them back
    res.send(plants)
});

// POST /api/v1/Plants
router.post('/', (req, res, next) => {

    // check for all required field
    if (!req.body || !req.body.name){
        // if no input for required field, send error
        res.status(422).json({error: 'must include the name'})
        return
    }
})


module.exports = router;
