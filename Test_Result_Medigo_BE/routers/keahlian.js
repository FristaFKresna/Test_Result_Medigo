const Router = require('express').Router()
const Controller = require('./../controllers/keahlian')

Router.get('/', Controller.getAllKeahlian)
Router.get('/:id', Controller.getKeahlianById)


module.exports = Router