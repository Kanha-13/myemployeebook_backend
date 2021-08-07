const Router = require('express-promise-router')();
const { login, signup } = require('../controllers/login-signup')

Router.route('/login')
    .post(login)
Router.route('/signup')
    .post(signup)

module.exports = Router