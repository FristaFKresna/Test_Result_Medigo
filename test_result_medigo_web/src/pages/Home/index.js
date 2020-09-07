import React, { useEffect } from 'react';
import Logo1 from './../../assets/images/logo1.png';
import Logo2 from './../../assets/images/logo2.png';
import Logo3 from './../../assets/images/logo3.png';
import { MenuHomePage } from '../../components';



const Home = () => {
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
      useEffect(() => {
        const handleResize = () => {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        }
        window.addEventListener('resize', handleResize)
      }, [])


    return(
        <div className='container-fluid' style={{backgroundColor:'#E1F7E8'}}>
            <div style={mediaquery().title_wrapper}>
                <h1 style={mediaquery().title}>Selamat datang di IHC</h1>
                <h3 style={mediaquery().quote}>Kami memberikan pelayan komprehensif dan terpadu dengan standar pelayanan terakreditasi</h3>
            </div>

            <div className='d-md-flex justify-content-between' style={mediaquery().wrapper_menu}>
                <MenuHomePage 
                    logo = {Logo1}
                    title = 'Booking Cepat'
                    desc = 'Pesan dokter langganan'
                    link = '/*'
                />
                <MenuHomePage 
                    logo = {Logo2}
                    title = 'Cari Faskes'
                    desc = 'Rumah sakit dan klinik'
                    link = '/*'
                />
                <MenuHomePage 
                    logo = {Logo3}
                    title = 'Cari Dokter'
                    desc = 'Umum dan spesialis'
                    link = '/spesialisasi'
                />

            </div>

            
            
        </div>
    )
}

export default Home

const styles = {
    title_wrapper : { 
        padding : '30px' 
    },
    title : { 
        color : '#216BC4' 
    },
    quote : { 
        color : '#A0A4A8' 
    },
    wrapper_menu : { 
        margin : '50px' 
    }
}

const minStyles = {
    title_wrapper : { 
        padding : '10px' 
    },
    title : { 
        color : '#216BC4',
        fontSize : '35px'
    },
    quote : { 
        color : '#A0A4A8',
        fontSize : '18px'
    },
    wrapper_menu : { 
       margin : '5px'
    }
}

const mediaquery = () => {
    if(window.innerWidth < 800){
        return minStyles
    }else{
        return styles
    }
}
