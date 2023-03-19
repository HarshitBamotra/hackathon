import React from 'react';

import Header from './header';
import OurServices from './OurServices';
import Popular from './Popular';


function Home(){
    return(
        <div>
            <Header></Header>
            <OurServices></OurServices>
            <Popular></Popular>
        </div>
    )
}

export default Home;