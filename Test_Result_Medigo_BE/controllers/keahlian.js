const db = require('../database/mysql')

const getAllKeahlian = (req,res) => {
    let sql = `select Dokter_id, Keahlian_id, Nama, Gender, Domisili, Keahlian from dokter_has_keahlian as dhk 
    join dokter as d on dhk.Dokter_id = d.id
    join keahlian as k on dhk.Keahlian_id = k.id;`

    db.query(sql, (err,result) => {
        try{
            if(err) throw err
            res.json({
                error : false,
                data : result
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
}

const getKeahlianById = (req,res) => {
    let id = req.params.id
    let sql = `select Dokter_id, Keahlian_id, Nama, Gender, Domisili, Keahlian from dokter_has_keahlian as dhk 
    join dokter as d on dhk.Dokter_id = d.id
    join keahlian as k on dhk.Keahlian_id = k.id where Dokter_id = ?;`

    db.query(sql, id, (err,result) => {
        try{
            if(err) throw err
            res.json({
                error : false,
                data : result
            })
        }catch(err){
            res.json({
                error : true,
                message : err.message
            })
        }
    })
}

module.exports = {
    getAllKeahlian,
    getKeahlianById
}