const db = require('../database/mysql')

const getAllPenyakitTerkait = (req,res) => {
    let sql = `select Dokter_id, PenyakitTerkait_id, Nama, Gender, Domisili, Penyakit from dokter_has_penyakitterkait as dhp 
    join dokter as d on dhp.Dokter_id = d.id
    join penyakitterkait as pt on dhp.PenyakitTerkait_id = pt.id;`

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

const getPenyakitTerkaitById = (req,res) => {
    let id = req.params.id
    let sql = `select Dokter_id, PenyakitTerkait_id, Nama, Gender, Domisili, Penyakit from dokter_has_penyakitterkait as dhp 
    join dokter as d on dhp.Dokter_id = d.id
    join penyakitterkait as pt on dhp.PenyakitTerkait_id = pt.id where Dokter_id = ?;`

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
    getAllPenyakitTerkait,
    getPenyakitTerkaitById
}

