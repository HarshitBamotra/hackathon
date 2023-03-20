import React from 'react';

import Header from './header';
// import OurServices from './OurServices';
import Popular from './Popular';
import HomeContent from './HomeContent';
import ChefSlider from './chefSlider';

function Home(){
    return(
        <div>
            <Header></Header>
            {/* <OurServices></OurServices>
            <Popular></Popular> */}
            <HomeContent></HomeContent>
            <ChefSlider></ChefSlider>
            <Popular></Popular>

        </div>
    )
}

export default Home;