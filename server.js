if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// REQUIRED
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const somethingRouter = require('./routes/something')

// NOW SET UP WHAT IS REQUIRED
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

// NOW USE WHAT IS SET UP
app.use(expressLayouts)
app.use(express.static('public'))

// USE ROUTERS
app.use('/', indexRouter)
app.use('/something', somethingRouter)

// DATABASE CONNECTION
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

// LISTENING...
app.listen(process.env.PORT || 3000)