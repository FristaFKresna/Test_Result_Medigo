const Router = require('express').Router()
const Controller = require('./../controllers/penyakitTerkait')

Router.get('/', Controller.getAllPenyakitTerkait)
Router.get('/:id', Controller.getPenyakitTerkaitById)


module.exports = Router