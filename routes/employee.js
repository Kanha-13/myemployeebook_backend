const { addEmp, getEmp, getEmpId, deleteEmp, updateEmp } = require('../controllers/employee');
const Router = require('express-promise-router')();
Router.route('/employee')
    .post(addEmp)
    .get(getEmp)
Router.route('/employee/:id')
    .get(getEmpId)
    .delete(deleteEmp)
    .put(updateEmp)

module.exports = Router