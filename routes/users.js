const express = require('express')
const router = express.Router()
const User = require('../models/User')

// All Users
router.get('/', (req, res) => {
    res.render('users/index.ejs', { layout: 'layouts/diff' })
})

// New User
router.get('/new', (req, res) => {
    res.render('users/new.ejs', { user: new User(), layout: 'layouts/diff'})
})

// Create User
router.post('/', async (req, res) => {
    // const name = req.body.name
    // const age = req.body.age
    //res.send(`Name: ${name}, Age: ${age}`)

    const user = new User({
        name: req.body.name,
        age: req.body.age
    })
    try {
        const newUser = await user.save()
        //res.send(user)
        res.redirect('users')
    } catch {
        res.render('users/new', {
            user: user,
            errorMessage: 'Error creating User'
        })
    }
})

module.exports = router