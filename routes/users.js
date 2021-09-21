const express = require('express');
const router = express.Router();
const db = require('../models')
const bcrypt = require('bcrypt')

/* POST users listing. */
// POST /api/v1/users
router.post('/signup', function (req, res, next) {
  // take username, password
  if (!req.body.username || !req.body.password) {
    res.status(400).json({
      error: 'please include username and password'
    })
    return
  }


  // check if username is taken
  db.User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then((user) => {
      if (user) {
        res.status(400).json({
          error: 'username already in use'
        })
        return
      }

      // hash password
      bcrypt.hash(req.body.password, 10)
        .then((hash) => {
          // store in database
          db.User.create({
            username: req.body.username,
            password: hash
          })
            .then((user) => {
              // respond with success/error
              res.status(201).json({
                success: 'User created'
              })
            })
        })
    })
});

router.post('/login', async (req, res) => {
  // check if username and password 
  if (!req.body.username || !req.body.password) {
    res.status(400).json({
      error: 'please include username and password'
    })
    return
  }
  // find user by username
  const user = await db.User.findOne({
    where: {
      username: req.body.username
    }
  })

  if (!user) {
    res.status(400).json({
      error: 'could not find user with that username'
    })
    return
  }

  // check password
  const success = await bcrypt.compare(req.body.password, user.password)

  if (!success) {
    res.status(401).json({
      error: 'incorrect password'
    })
    return
  }
  // login
  req.session.user = user

  // extract password from user, assign all other ot a new userData variable
  // this is a New Structuring Assignment
  const { password, ...userData } = user.dataValues;

  // respond with success/error
  res.json({
    success: 'Successfully logged in',
    user: userData
  })
  // res.redirect('/api/v1/plants')
})

router.get('/logout', (req, res, next) => {
  //tell express that the user logged out
  req.session.destroy()
  // req.sessions.user = null
  // send response to show it successful
  res.json({ message: 'successfully logged out' })
  // res.redirect('/')
  // next()
})

router.get('/login/guest', (req, res) => {
  const guest = db.User.findOne({
    where: {
      username: 'guest'
    }
  })
    .then((user) => {
      if (user) {
        req.session.user = guest
        res.redirect('/garden')
      }
    })
})

// Edit user information
router.patch('/edit', async (req, res) => {
  const user = await db.User.findByPk(req.session.user.id)
  if (!user) {
    res.status(401).json({
      error: 'Not logged in'
    })
  }
  let password = user.password
  if (req.body.newpassword !== '' && req.body.oldpassword === user.password) {
    password = bcrypt.hashSync(req.body.newpassword, 10)
  }
  if (user.password !== req.body.oldpassword && req.body.oldpassword !== '') {
    res.json({error: 'incorrect current password'})
  }
  db.User.update({
    username: req.body.username,
    password: password    
},{
    where: {
        id: user.id
    }
}).then(function () {
    db.User.sync()
    res.json({success: 'User information successfully changed'})
})


})

// current user
router.get('/current', async (req,res)=>{
  const user = await db.User.findByPk(req.session.user?.id)
  if (!user) {
    res.status(401).json({
      error: 'Not logged in'
    })
    return
  }
  const { password, ...userData } = user.dataValues
  res.json(userData)
})

module.exports = router;
