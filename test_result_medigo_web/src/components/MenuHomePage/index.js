import React, { useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuHomePage = (props) => {
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
        <div className='d-flex align-items-center justify-content-between' style={mediaquery()}>
            <div>
                <img src={props.logo} alt='logo' width={120} />
            </div>
            <div>
                <h4>{props.title}</h4>
                <h6>{props.desc}</h6>
            </div>
            <div>
                <Link to={props.link}>
                    <FaChevronRight size={50} color='#A0A4A8'/>
                </Link>
            </div>
        </div>
        
    )
}

export default MenuHomePage

const style = {
    border : '1px solid #A0A4A8', 
    borderRadius : '5px',
    padding : '20px', 
    height : '20vh', 
    width : '60vh'
}

const minStyle = {
    border : '1px solid #A0A4A8', 
    borderRadius : '5px',
    height : '20vh', 
    marginBottom : '30px'
}

const mediaquery = () => {
    if(window.innerWidth < 800){
        return minStyle
    }else{
        return style
    }
}


