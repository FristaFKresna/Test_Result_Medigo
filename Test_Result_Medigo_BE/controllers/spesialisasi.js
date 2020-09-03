const db = require('./../database/mysql')

const getAllSpesialisasi = (req,res) => {
    let sql = 'select * from spesialisasi'

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

const getSpesialisasiDoktor = (req,res) => {
    let sql = `select Dokter.id as ID_Dokter, Spesialisasi.id as ID_Spesialisasi, Nama, Gender, Domisili, Spesialisasi, Deskripsi from dokter 
    join spesialisasi on dokter.Spesialisasi_id = spesialisasi.id;`

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



module.exports = {
    getAllSpesialisasi,
    getSpesialisasiDoktor
}