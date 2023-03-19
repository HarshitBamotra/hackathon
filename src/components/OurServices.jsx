import React from 'react';
import orderonline from "../images/orderonline.jpg"
import diningout from "../images/diningout.jpg"
import hangrypro from "../images/hangrypro.jpg"


function OurServices(){
    return(
        <div className='ourServicesWrapper'>
            <div className='ourServices'>
                <a href='/order'>
                    <div className='card'>
                        <img src={orderonline} alt=''></img>
                        <div>Order Online</div>
                    </div>
                </a>
                
                <a href='/order'>
                    <div className='card'>
                        <img src={diningout} alt=''></img>
                        <div>
                            Dine Out
                        </div>
                    </div>
                </a>
                
                <div className='card'>
                    <img src={hangrypro} alt=''></img>
                    <div>Hangry Pro</div>
                </div>
            </div>
        </div>
        
    )
}

export default OurServices;