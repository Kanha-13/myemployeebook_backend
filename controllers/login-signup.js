const Admin = require('../models/admin')
module.exports = {
    login: async (req, res) => {
        console.log(req.body)
        const admin = await Admin.findOne({ email: req.body.email })
        if (admin) {
            if (admin.password === req.body.password) {
                res.status(201).json({ message: "Login successful" })
            }
            else {
                res.status(200).json({ message: "Wrong Password" })
            }
        }
        else {

            res.status(200).json({ message: "Admin not found" })
        }
    },
    signup: async (req, res) => {
        const admin = await Admin.findOne({ email: req.body.email })
        if (admin) {
            res.status(200).json({ message: "Email already exists" })
        }
        else {
            const data = req.body
            const newAdmin = new Admin({ name: data.name, email: data.email, password: data.password })
            const ress = await newAdmin.save()
            if (ress)
                res.status(201).json({ message: "signup successful" })
        }
    }
}