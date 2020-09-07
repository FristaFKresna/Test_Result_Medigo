const db = require('./../database/mysql')

const getAllJadwal = (req,res) => {
    let sql = `select idDokter, idRS, BookingOnline, Hari, Jam, Nama, Gender, Domisili, RumahSakit, AlamatRS, Spesialisasi_id, Spesialisasi from jadwalpraktik as jp 
    join dokter as d on jp.idDokter = d.id
    join rumahsakit as rs on jp.idRS = rs.id
    join spesialisasi as s on d.Spesialisasi_id = s.id;`

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


const getJadwalBySpesialisasi = (req,res) => {
    let spesialisasi_id = req.params.id

    let sql = `select idDokter, idRS, BookingOnline, Hari, Jam, Nama, Gender, Domisili, RumahSakit, AlamatRS, Spesialisasi_id, Spesialisasi from jadwalpraktik as jp 
    join dokter as d on jp.idDokter = d.id
    join rumahsakit as rs on jp.idRS = rs.id
    join spesialisasi as s on d.Spesialisasi_id = s.id where Spesialisasi_id = ?;`

    db.query(sql, spesialisasi_id, (err,result) => {
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

const getJadwalByIdDokter = (req,res) => {
    let id_dokter = req.params.id

    let sql = `select idDokter, idRS, BookingOnline, Hari, Jam, Nama, Gender, Domisili, RumahSakit, AlamatRS, Spesialisasi_id, Spesialisasi from jadwalpraktik as jp 
    join dokter as d on jp.idDokter = d.id
    join rumahsakit as rs on jp.idRS = rs.id
    join spesialisasi as s on d.Spesialisasi_id = s.id where idDokter = ?;`

    db.query(sql, id_dokter, (err,result) => {
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
    getAllJadwal,
    getJadwalBySpesialisasi,
    getJadwalByIdDokter
}


