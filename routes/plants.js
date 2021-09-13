const express = require('express');

const router = express.Router();
const db = require('../models')

// GET all plants
router.get('/mygarden', async function(req, res, next) {
    console.log("**************SESSION*****************",req.session.user.id)
    await db.Plant.findAll({
        where: {
            UserId: req.session.user.id
        }
    }).then(plant => {
        if (plant.length < 1) {
            res.json("No plants saved for this user!")
        } else {
            res.json(plant)
        }       
    })
})

// POST a new plant
router.post('/mygarden/:id', async (req, res) => {
    const user = await db.User.findByPk(req.session.user.id)
    const plant = await user.createPlant({
        name: req.body.name,
        healthrating: req.body.healthrating,
        species: req.body.species,
        nickname: req.body.nickname,
        sun: req.body.sun,
        waterfrequency: req.body.waterfrequency,
        activegrowthperiod: req.body.activegrowthperiod,
        soiltype: req.body.soiltype,
        fertilizer: req.body.fertilizer,
        plantdescription: req.body.plantdescription,
        dateacquired: req.body.dateacquired,
        location: req.body.location
    })
    res.json(plant)
})

// // DELETE a plant
// router.delete('/mygarden', (req, res) => {

// })

module.exports = router;
