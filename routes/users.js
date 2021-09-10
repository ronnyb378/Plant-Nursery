var express = require('express');
var router = express.Router();
const db = require('../models')
const bcrypt = require('bcrypt')

/* GET users listing. */
router.post('/signup', function(req, res, next) {
    // take username, password
  if (!req.body.username || !req.body.password) {
    res.status(400).json({
      error:'please include username and password'
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

router.post('/login', async(req, res) => {
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

// respond with success/error
res.json({
  success: 'Successfully logged in'
})
})



module.exports = router;
