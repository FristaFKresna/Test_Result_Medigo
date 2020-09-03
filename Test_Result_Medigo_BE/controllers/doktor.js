const db = require('./../database/mysql')

const getAllDokter = (req,res) => {
    let sql = 'select * from dokter'

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

const getDokterById = (req,res) => {
    let id = req.params.id
    let sql = 'select * from dokter where id = ?'

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
    getAllDokter,
    getDokterById
}