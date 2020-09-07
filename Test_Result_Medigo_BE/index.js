const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/dokter', require('./routers/doktor'))
app.use('/jadwal', require('./routers/jadwal'))
app.use('/spesialisasi', require('./routers/spesialisasi'))
app.use('/keahlian', require('./routers/keahlian'))
app.use('/penyakit', require('./routers/penyakitTerkait'))

app.get('/', (req, res)=>{
    res.send('<h1>API Test Result Medigo</h1>')
})
app.listen(port, ()=>console.log('API run on port ' + port))