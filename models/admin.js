const mongoose = require("mongoose")

const admin = mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('admin', admin);