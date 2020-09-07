import React from 'react';
import { IoIosConstruct } from 'react-icons/io'

const UnderConstruction = () => {
    return(
        <div className='container'>
            <div className='d-flex flex-column align-items-center' style={{marginTop:'200px'}}>
                <h1>Under Construction</h1>
                <IoIosConstruct size={80}/>
            </div>
        </div>
    )
}

export default UnderConstruction