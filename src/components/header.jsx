import React from 'react';
import NavBar from './Nav';
function Header(){
    return(
        <div className='header'>
            <NavBar></NavBar>
            <div className='bannerImage'>
                <div className='heading'>WELCOME TO HANGRY</div>
            </div>
        </div>
    )
}

export default Header;