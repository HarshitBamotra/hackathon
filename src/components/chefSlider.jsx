import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Sanjeev from '../images/sanjeev.jpg';
// import Vikaas from '../images/vikaas.jpg';
// import Gordan from '../images/gordon.jpg';

function ChefSlider(){
    const sliderImages = [
        {url:"https://www.forbesindia.com/media/images/2018/Jun/img_106499_chefsanjeevkapoor3.jpg"},
        {url:"https://assets.entrepreneur.com/images/misc/1603706736_IMG_5881.jpg"},
        {url:"https://deadline.com/wp-content/uploads/2021/08/MC10_1007-17-16-Elim_0305.jpg"}
    ];

    return(
        <div className='chefImageWrapper'>
            <div className='chefImage'>
                <SimpleImageSlider width={700} height={400} images={sliderImages} showNavs={true}></SimpleImageSlider>
            </div>
            
        </div>
    )
}


export default ChefSlider;

//////////////////////////////////////////////////////////////////////////////////////////////





