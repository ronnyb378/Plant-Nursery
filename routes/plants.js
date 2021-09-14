const express = require('express');

const router = express.Router();
const db = require('../models')

// GET all plants
router.get('/mygarden', async function(req, res, next) {
    // console.log("**************SESSION*****************",req.session.user.id)
    await db.Plant.findAll({
        where: {
            UserId: req.session.user.id
        }
    }).then(plant => {
        if (plant.length < 1) {
            res.json([])
        } else {
            res.json(plant)
        }       
    })
})

// POST a new plant
router.post('/newplant', async (req, res) => {
    console.log(req.body)
    const user = await db.User.findByPk(req.session.user.id)
    try {
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
    } catch (e) {

        res.status(400).json({ error: "Failed to create plant" })
        console.error(e)
    }

})

// UPDATE a plant
router.patch('mygarden/:plantId', (req, res) => {
    
    db.plant.patch({
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

// DELETE a plant
router.delete('/mygarden/:plantId', (req, res) => {
    const plantId = parseInt(req.params.plantId);
    db.plants.destroy( {
        where: { plantId: plantId }
    })
    .then(res.json({ message: `Plant with id of ${plantId} successfully deleted.` }),
    res.redirect('/mygarden'))
})

module.exports = router;
