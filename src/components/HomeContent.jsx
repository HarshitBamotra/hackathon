import React from 'react';
import OurServices from './OurServices';
// import Popular from './Popular';
import discount from '../images/discount.jpg'

export default function HomeContent(){
    return(
        <div className='homeContent'>
            <div className='service'>
                <OurServices></OurServices>
                
            </div>
            <div className='discountWrapper'>
                <div className='discount'>
                    <img  src={discount} alt=''></img>
                    <div className='discountContent'></div>
                </div>
            </div>
        </div>
    )
}