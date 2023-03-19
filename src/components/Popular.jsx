import React from 'react';
import GoogleFit from "../images/googleFit.webp"

function Popular(){
    return(
        <div className='popularWrapper'>
            <div className='popular'>
                <img src={GoogleFit} alt=''></img>
                <div className="popularContentWrapper">
                    <div className='popularHeading'>Get The Most Out Of Hangry</div>
                    <div className='popularContent'>Log in to Google Fit to earn extra rewards</div>
                </div>
            
            </div>
        </div>
        
    )
}
export default Popular;