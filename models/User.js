const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    }
})

// Create the Model: The user collection inside mongo
// This will get used in the router
module.exports = mongoose.model('User', userSchema)