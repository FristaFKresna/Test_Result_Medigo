import React, { useState, useEffect } from 'react';
import { InputGroup, InputGroupAddon, Input, ListGroup, ListGroupItem, Table, Button } from 'reactstrap';
import { AiOutlineSearch, AiOutlineRight, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import Axios from 'axios';
import { urlApi } from './../../supports/constants/urlAPI'
import { Link } from 'react-router-dom';


const SpesialisasiDokter = () => {
    const [spesialisasi, setSpesialisasi] = useState([]);
    const [searchNama, setSearchNama] = useState('');
    const [jadwal, setJadwal] = useState([])

    useEffect(()=>{getSpesialisasi();getJadwal()},[])

    const getSpesialisasi = () => {
        Axios.get(urlApi+'spesialisasi')
        .then((res)=>{
            setSpesialisasi(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const getJadwal = () => {
        Axios.get(urlApi+'jadwal')
        .then((res)=>{
            setJadwal(res.data.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    
    const getThisDay = () => {
        var Days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
        var date = new Date().getDay()
        return Days[date]
    }

    const renderSpesialisasi = () => {
        return spesialisasi.map((val)=>{
            return(
                <ListGroup key={val.id}>
                    <ListGroupItem>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div style={{marginLeft : '30px', paddingTop : '20px', paddingBottom : '20px'}}>
                                <h3 style={{color:'#7A7A7A', marginBottom:'10px'}}>{val.Spesialisasi}</h3>
                                <h5 style={{color:'#A0A4A8'}}>{val.Deskripsi}</h5>
                            </div>
                            <div>
                                <Link to={'jadwal/' + val.id}>
                                    <AiOutlineRight size={50} color='#A0A4A8'/>
                                </Link>
                            </div>
                        </div>
                    </ListGroupItem>
                </ListGroup>
            )
        })
    }

    const renderSearchNama = () => {        
        let filterNama = jadwal.filter((val)=>{
            return val.Nama.toLowerCase().includes(searchNama)
        })

        if(filterNama){
            return(
                filterNama.map((val,index)=>{
                    return(
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{val.Nama}</td>
                            <td>{val.RumahSakit}</td>
                            <td>Praktik {val.Hari === getThisDay() ? 'hari ini' : val.Hari} ({val.Jam})</td>
                            <td>{val.Domisili}</td>
                            <td>{val.BookingOnline === 1 ? <AiOutlineCheck size={25} color={'#31B057'}/> : <AiOutlineClose size={25} color={'#E52A34'}/>}</td>
                            <td><Button href={'/dokter/' + val.idDokter} outline color="info">See Detail</Button></td>
                        </tr>                        
                    )
                })
            )
        }
    }


    return(
        <div className='container-fluid' style={{padding:'50px', backgroundColor : '#E1F7E8'}}>
            <div className='d-flex justify-content-end'>
                <div className='d-flex align-items-end'>
                <InputGroup size="lg">
                    <InputGroupAddon addonType="prepend" style={{backgroundColor:'white'}}><AiOutlineSearch size={45}/></InputGroupAddon>
                    <Input value={searchNama} onChange={(e)=>{setSearchNama(e.target.value)}} placeholder='Cari nama dokter ...' />
                </InputGroup>
                </div>
            </div>
            
                {
                    searchNama ?
                    <div style={{marginTop : '40px'}}>
                        <h2 style={{marginBottom : '30px', textAlign : 'center', color:'#7A7A7A'}}>Jadwal</h2>
                        <Table className='table-responsive-md'>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nama</th>
                                    <th>Rumah Sakit</th>
                                    <th>Jadwal Praktik</th>
                                    <th>Lokasi</th>
                                    <th>Booking Online</th>
                                    <th>See Detail</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderSearchNama()}   
                            </tbody>
                        </Table>
                    </div>

                    :

                    <div style={{marginTop : '40px'}}>
                        <h2 style={{marginBottom : '30px', textAlign : 'center', color:'#7A7A7A'}}>Spesialisasi Dokter</h2>
                        {renderSpesialisasi()} 
                    </div>
                }

        </div>
    )
}

export default SpesialisasiDokter