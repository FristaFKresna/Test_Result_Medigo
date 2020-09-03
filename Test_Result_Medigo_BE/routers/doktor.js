const Router = require('express').Router()
const Controller = require('./../controllers/doktor')

Router.get('/', Controller.getAllDokter)
Router.get('/:id', Controller.getDokterById)


module.exports = Router