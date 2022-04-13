const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('something/index.ejs', { layout: 'layouts/diff' })
})

router.get('/new', (req, res) => {
    res.render('something/new.ejs', { layout: 'layouts/diff' })
})

module.exports = router