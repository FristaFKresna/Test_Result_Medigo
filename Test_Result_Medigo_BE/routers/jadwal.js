const Router = require('express').Router()
const Controller = require('./../controllers/jadwal')

Router.get('/', Controller.getAllJadwal)
Router.get('/:id', Controller.getJadwalBySpesialisasi)
Router.get('/dokter/:id', Controller.getJadwalByIdDokter)

module.exports = Router