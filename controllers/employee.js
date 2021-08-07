const Employee = require('../models/employees')
module.exports = {
    addEmp: async (req, res) => {
        console.log(req.body)
        const newEmp = new Employee(req.body)
        const ress = await newEmp.save()
        res.status(201).json(ress)
    },
    getEmp: async (req, res) => {
        const employees = await Employee.find({})
        res.status(200).json(employees)
    },
    getEmpId: async (req, res) => {
        const employee = await Employee.findOne({ _id: req.params.id })
        res.status(200).json(employee)
    },
    deleteEmp: async (req, res) => {
        await Employee.deleteOne({ _id: req.params.id })
        res.status(201).json()
    },
    updateEmp: async (req, res) => {
        const updatedData = req.body
        const update = await Employee.updateOne({ _id: req.params.id }, { $set: updatedData })
        res.status(201).json(update)
    }
}