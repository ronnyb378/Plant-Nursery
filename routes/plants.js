const express = require('express');
const router = express.Router();
const db = require('../models')

// GET all Plants
router.get('/mygarden', async function(req, res, next) {
    console.log("**************SESSION*****************",req.session.user.id)
    await db.Plant.findAll({
        where: {
            UserId: req.session.user.id
        }
    }).then(plant => {
        if (plant.length < 1) {
            res.json("No plants b!")
        } else {
            res.json(plant)
        }
        
        
    })
})


module.exports = router;