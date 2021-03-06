const express = require('express');
const router = express.Router();
const db = require('../models');
const validate = require('../validate');

// GET all plants
router.get('/mygarden', async function (req, res, next) {
    // console.log("**************SESSION*****************",req.session.user.id)
    await db.Plant.findAll({
        where: {
            UserId: req.session.user.id
        },
        // order: [
        //     ['createdAt', 'DESC']
        // ]
    }).then(plant => {
        if (plant.length < 1) {
            res.json([])
        } else {
            res.json(plant)
        }
    })
})

//grab individual plant
router.get('/plant/:plantId', async function (req, res, next) {
    const plantPageId = parseInt(req.params.plantId)
    // const plantPageId = req.params.plantId

    // console.log("**************SESSION*****************",req.session.user.id)
    try {
    await db.Plant.findByPk({
        where: {
            id: plantPageId
        },
    }).then(plant => {
        if (plant.length < 1) {
            res.json([])
        } else {
            res.json(plant)
        }
    })
} catch (e) {
    // res.status(400).json({ error: "Failed to create plant" })
    console.error(e)
}
})


// POST a new plant
const { body, validationResult } = require('express-validator');
router.post('/newplant', [
    body('name')
        .notEmpty()
        .withMessage('Field is required')
        .isLength({ max: 20 })
        .withMessage('20 Characters only')
        .trim()
        .escape(),
    body('nickname')
        .isLength({ max: 30 })
        .withMessage('30 Characters only')
        .trim()
        .escape(),
    validate
], async (req, res) => {
    // console.log(req.body)
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
            dateacquired: req.body.dateacquired || null,
            location: req.body.location,
            photo: req.body.photo
        })
        res.json(plant)
    } catch (e) {
        // res.status(400).json({ error: "Failed to create plant" })
        console.error(e)
    }

})

// UPDATE a plant
router.patch('/mygarden/:plantId', async (req, res) => {
    const plantId = parseInt(req.params.plantId)
    const plant = await db.Plant.findByPk(plantId)

    db.Plant.update({
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
        location: req.body.location,
        photo: req.body.photo
    }, {
        where: {
            id: plant.id
        }
    }).then(function () {
        db.Plant.sync()
        res.json({ message: 'changes made' })
    })
})

// DELETE a plant
router.delete('/mygarden/:plantId', (req, res) => {
    const plantId = parseInt(req.params.plantId);
    Promise.all([
    db.Event.destroy({
        where: { PlantId: plantId }
    }),
    db.Plant.destroy({
        where: { id: plantId }
    })
    ])
        .then(res.json({ message: `Plant with id of ${plantId} successfully deleted.` })
            )
})

router.get('/:plantId', async (req, res, next) => {
    const plantId = parseInt(req.params.plantId)
    // console.log(req.params.plantId)
    // console.log(plantId)
    db.Event.findAll({
        where: {
            PlantId: plantId
        },
        include: [db.Plant]
    }) 
    .then(events => {
        res.json(events)
    })
})



// POST new events for existing plants (on plant page)
router.post('/events/:plantId', async function (req, res) {
    const plantID = parseInt(req.params.plantId)
    try {
        const event = db.Event.create({
            PlantId: plantID,
            type: req.body.type,
            notes: req.body.text
        })
        .then(event => {
        res.json(event)
        })
    } catch (e) {
        console.log(e)
    }
})

module.exports = router;
