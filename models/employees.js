const mongoose = require("mongoose")

const employees = mongoose.Schema({
    name: String,
    empId: String,
    address: String,
    gender: String,
    dept: String,
    age: String,
    salary: String,
    mobile: String,
    email: String,
})

module.exports = mongoose.model('employee', employees);