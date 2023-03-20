import React from 'react';

function NavBar(){
    return(
        <div className='navBar'>
            <div className='logoElement'>HANGRY</div>
            <a className='loginElement' href='/login'>
                Log in/ Sign up
            </a>
        </div>
    )
}
export default NavBar;