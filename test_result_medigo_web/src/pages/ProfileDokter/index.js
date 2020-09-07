import React, { useState, useEffect } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button, CardHeader, CardFooter,ListGroup, ListGroupItem
  } from 'reactstrap';
  import { AiOutlineRight } from 'react-icons/ai';
import Axios from 'axios';
import { urlApi } from '../../supports/constants/urlAPI';
import { Link } from 'react-router-dom';
  

const ProfileDokter = () => {
    const [dokter,setDokter] = useState([]);
    const [semuaLokasi, setSemuaLokasi] = useState(false);
    const [keahlian, setKeahlian] = useState([]);
    const [semuaKeahilan, setSemuaKeahlian] = useState(false);
    const [penyakitTerkait, setPenyakitTerkait] = useState([]);
    const [semuaPenyakit, setSemuaPenyakit] = useState(false);


    useEffect(()=>{getDokter()},[])

    const getDokter = () => {
        let idDokter = window.location.pathname.split('/')[2]
        Axios.get(urlApi + 'jadwal/dokter/' + idDokter)
        .then((res)=>{
            setDokter(res.data.data)

            Axios.get(urlApi + 'keahlian/' + idDokter)
            .then((res)=>{
                setKeahlian(res.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })

            Axios.get(urlApi + 'penyakit/' + idDokter)
            .then((res)=>{
                setPenyakitTerkait(res.data.data)
            })
            .catch((err)=>{
                console.log(err)
            })

        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const renderLokasiPraktik = () => {
        var sliceLokasiPraktik
        if(semuaLokasi){
            sliceLokasiPraktik = dokter
        }else{
            sliceLokasiPraktik = dokter.slice(0,2)
        }

        return sliceLokasiPraktik.map((val, index)=>{
            return(
                <ListGroupItem key={index}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div>
                            <h3>{val.RumahSakit}</h3>
                            <h5>{val.AlamatRS}</h5>
                        </div>
                        <div>
                            <Link to='/*'>
                                <AiOutlineRight size={50} color='#A0A4A8'/>
                            </Link>
                        </div>
                    </div>
                </ListGroupItem>
            )       
        })
    }

    const renderKeahlian = () => {
        var sliceKeahlian
        if(semuaKeahilan){
            sliceKeahlian = keahlian
        }else{
            sliceKeahlian = keahlian.slice(0,3)
        }
        return sliceKeahlian.map((val, index)=>{
            return(
                <ListGroupItem key={index}>
                    <h5>
                        {val.Keahlian}
                    </h5>
                </ListGroupItem>
            )
        })
    }

    const renderPenyakitTerkait = () => {
        var slicePenyakit
        if(semuaPenyakit){
            slicePenyakit = penyakitTerkait
        }else{
            slicePenyakit = penyakitTerkait.slice(0,3)
        }
        return slicePenyakit.map((val, index)=>{
            return(
                <ListGroupItem key={index}>
                    <h5>
                        {val.Penyakit}
                    </h5>
                </ListGroupItem>
            )
        })
    }





    if(dokter.length === 0){
        return(
            <div></div>
        )
    }

    return(
        <div className='d-md-flex p-5' style={{backgroundColor : '#E1F7E8'}}>
            <div className='w-100 mr-5'>
                <Card style={{padding : '10px', marginBottom:'20px'}}>
                    <CardBody>
                    <div className='d-flex justify-content-center'>
                        <img alt='broken' style={{width:'200px', height : '200px'}} src='https://images.vexels.com/media/users/3/151709/isolated/preview/098c4aad185294e67a3f695b3e64a2ec-doctor-avatar-icon-by-vexels.png' width='100%'/>
                    </div>
                    <CardTitle>
                        <h2>{dokter[0].Nama}</h2>
                        <h5>{dokter[0].Gender}</h5>
                    </CardTitle>
                    </CardBody>
                </Card>


                <Card>
                    <CardHeader tag="h3">Jadwal Praktik Terdekat</CardHeader>
                    <CardBody>
                    <CardTitle tag='h5'>Rumah Sakit Pusat Pertamina</CardTitle>
                    <CardText>Kamis, 10 Juni 2018</CardText>
                    <Button href='/*' className='w-100' color='info'>Buat Janji</Button>
                    </CardBody>
                    <CardFooter className="text-muted">
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                Liat Semua
                            </div>
                            <div>
                                <Link to='/*'>
                                    <AiOutlineRight size={30} color='#A0A4A8'/>
                                </Link>
                            </div>                            
                        </div>
                    </CardFooter>
                </Card>
            </div>

            <div className='w-100'>

                <h2>Lokasi Praktik</h2>
                <ListGroup>
                    {renderLokasiPraktik()}
                    {dokter.length > 2 ?
                        <ListGroupItem style={{cursor:'pointer'}} onClick={()=>setSemuaLokasi(!semuaLokasi)} color="info" active tag="h6" action>{semuaLokasi ? 'Kembali' : 'Lihat Semua'}</ListGroupItem>
                        :
                        <div></div>
                    }
                </ListGroup>
                
                <h2>Keahlian</h2>
                <ListGroup>
                    {renderKeahlian()}
                    {keahlian.length > 3 ?
                        <ListGroupItem style={{cursor:'pointer'}} onClick={()=>setSemuaKeahlian(!semuaKeahilan)} color="info" active tag="h6" action>{semuaKeahilan ? 'Kembali' : 'Lihat Semua'}</ListGroupItem>
                        :
                        <div></div>
                    }
                </ListGroup>

                <h2>Penyakit Terkait</h2>
                <ListGroup>
                    {renderPenyakitTerkait()}
                    {penyakitTerkait.length > 3 ?
                        <ListGroupItem style={{cursor:'pointer'}} onClick={()=>setSemuaPenyakit(!semuaPenyakit)} color="info" active tag="h6" action>{semuaPenyakit ? 'Kembali' : 'Lihat Semua'}</ListGroupItem>
                        :
                        <div></div>
                    }
                </ListGroup>
            </div>
        </div>
        
    )
}

export default ProfileDokter