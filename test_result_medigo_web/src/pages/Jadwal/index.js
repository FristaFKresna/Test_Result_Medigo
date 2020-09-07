import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, ButtonToggle, Table } from 'reactstrap';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import Axios from 'axios';
import { urlApi } from '../../supports/constants/urlAPI';


const Jadwal = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownValue, setDropDownValue] = useState('Pilih Kota');
    const [jadwal, setJadwal] = useState([]);
    const [lokasi, setLokasi] = useState([]);
    const [spesialiasi, setSpesialiasi] = useState('Dokter');
    const [semua, setSemua] = useState(false);
    const [hariIni, setHariIni] = useState(false);
    const [booking, setBooking] = useState(false);
    

    useEffect(()=>{getJadwal()},[])

    const getJadwal = () => {
        let id_spesialisasi = window.location.pathname.split('/')[2]
        Axios.get(urlApi+'jadwal')
        .then((res)=>{
            if(id_spesialisasi){
                let filter = res.data.data.filter((val)=>{
                    return val.Spesialisasi_id === Number(id_spesialisasi)
                })
                setJadwal(filter)
                getFilterLokasi(filter)
                setSpesialiasi(filter[0].Spesialisasi)
            }else{
                setJadwal(res.data.data)
                getFilterLokasi(res.data.data)
                setSpesialiasi('Dokter')
            }
            setSemua(true)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const getFilterLokasi = (jadwal) => {
        let lokasi = []
        jadwal.map((val)=>{
            if(!lokasi.includes(val.Domisili)){
                lokasi.push(val.Domisili)
            }
        })
        setLokasi(lokasi)
    }

    const getThisDay = () => {
        var Days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
        var date = new Date().getDay()
        return Days[date]
    }

    const renderJadwal = () => {
        if(dropdownValue !== 'Pilih Kota'){
            var filterJadwal = jadwal.filter((val)=>{
                return val.Domisili === dropdownValue
            })
        }else{
            filterJadwal = jadwal
        }

        if(semua){
            filterJadwal = filterJadwal
        }

        if(booking){
            var filterJadwal = filterJadwal.filter((val)=>{
                return val.BookingOnline === 1
            })
        }

        if(hariIni){
            var filterJadwal = filterJadwal.filter((val)=>{
                return val.Hari === getThisDay()
            })
        }

        return filterJadwal.map((val, index)=>{
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

    }



   
    return(
        <div style={{padding:'50px', backgroundColor : '#E1F7E8'}}>
            <div className='d-flex justify-content-start' style={{marginBottom : '30px'}}>
                <div style={{marginRight : '20px'}}>
                    <h5>{spesialiasi} di sekitar</h5>

                    <Dropdown isOpen={dropdownOpen} toggle={()=>setDropdownOpen(prevState => !prevState)} style={{marginRight:'20px'}}>
                        <DropdownToggle caret size='lg' color='info'>
                            {dropdownValue}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={(e)=>setDropDownValue('Pilih Kota')} >Pilih Kota</DropdownItem>
                            {
                                lokasi.map((val, index)=>{
                                    return(
                                        <DropdownItem key={index} onClick={(e)=>setDropDownValue(e.currentTarget.textContent)} >{val}</DropdownItem>
                                    )
                                })
                            }
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>

            <div style={{textAlign:'center', marginBottom: '20px'}}>
                <ButtonToggle onClick={()=>{setSemua(true);setHariIni(false);setBooking(false)}} className={semua ? 'active' : null} outline color="secondary" style={{marginRight:'20px'}}>Semua</ButtonToggle>
                <ButtonToggle onClick={()=>{setHariIni(true);setSemua(false);setBooking(false)}} className={hariIni ? 'active' : null} outline color="secondary" style={{marginRight:'20px'}}>Praktik hari ini</ButtonToggle>
                <ButtonToggle onClick={()=>{setBooking(true);setSemua(false);setHariIni(false)}} className={booking ? 'active' : null} outline color="secondary" style={{marginRight:'20px'}}>Booking online</ButtonToggle>
            </div>

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
                    {
                        renderJadwal()
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default Jadwal