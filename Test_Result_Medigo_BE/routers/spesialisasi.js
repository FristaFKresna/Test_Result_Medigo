const Router = require('express').Router()
const Controller = require('./../controllers/spesialisasi')

Router.get('/', Controller.getAllSpesialisasi)
Router.get('/doktor', Controller.getSpesialisasiDoktor)


module.exports = Router