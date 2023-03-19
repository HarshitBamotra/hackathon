import React from 'react';
import Fish from "../images/fish.png";
import Biryani from "../images/biryani.png";
import Biryani2 from "../images/biryani2.png";
import Chapathi from "../images/chapathi.png";
import IceCream from "../images/icecream.png";
import Kfc from "../images/kfc.png";
import Pizza from "../images/pizza.png";
import Profile from "../images/profile.png"

function OrderOnline(){
    return(
        <div>
            <div className='orderNav'>
                <div className='logoElement'>HANGRY</div>
                <div className='profileElement'>
                    <img src={Profile} alt=''></img>
                    <div className='profile'>profile</div>
                </div>
            </div>

            <div className='restrauntsWrapper'>
                <div className='restrauntHeading'>Delivery restraunts in Jaipur</div>

                <div className='restCardWrapper'>

                    <div className='restCard'>
                        <img src={Fish} alt=''></img>
                        <div className='restContent'>
                            <div className='restName'>Mangal Hotel</div>
                            <div className='rating'>3.6</div>
                        </div>
                        <div className='restContent'>
                            <div className='cuisine'>South Indian</div>
                            <div className='price'>350 for one</div>
                        </div>
                    </div>

                    <div className='restCard'>
                        <img src={Biryani} alt=''></img>
                        <div className='restContent'>
                            <div className='restName'>Mangal Hotel</div>
                            <div className='rating'>3.6</div>
                        </div>
                        <div className='restContent'>
                            <div className='cuisine'>South Indian</div>
                            <div className='price'>350 for one</div>
                        </div>
                    </div>
                    <div className='restCard'>
                        <img src={IceCream} alt=''></img>
                        <div className='restContent'>
                            <div className='restName'>Mangal Hotel</div>
                            <div className='rating'>3.6</div>
                        </div>
                        <div className='restContent'>
                            <div className='cuisine'>South Indian</div>
                            <div className='price'>350 for one</div>
                        </div>
                    </div>
                    <div className='restCard'>
                        <img src={Pizza} alt=''></img>
                        <div className='restContent'>
                            <div className='restName'>Mangal Hotel</div>
                            <div className='rating'>3.6</div>
                        </div>
                        <div className='restContent'>
                            <div className='cuisine'>South Indian</div>
                            <div className='price'>350 for one</div>
                        </div>
                    </div>
                    <div className='restCard'>
                        <img src={Chapathi} alt=''></img>
                        <div className='restContent'>
                            <div className='restName'>Mangal Hotel</div>
                            <div className='rating'>3.6</div>
                        </div>
                        <div className='restContent'>
                            <div className='cuisine'>South Indian</div>
                            <div className='price'>350 for one</div>
                        </div>
                    </div>
                    <div className='restCard'>
                        <img src={Biryani2} alt=''></img>
                        <div className='restContent'>
                            <div className='restName'>Mangal Hotel</div>
                            <div className='rating'>3.6</div>
                        </div>
                        <div className='restContent'>
                            <div className='cuisine'>South Indian</div>
                            <div className='price'>350 for one</div>
                        </div>
                    </div>
                    <div className='restCard'>
                        <img src={Kfc} alt=''></img>
                        <div className='restContent'>
                            <div className='restName'>Mangal Hotel</div>
                            <div className='rating'>3.6</div>
                        </div>
                        <div className='restContent'>
                            <div className='cuisine'>South Indian</div>
                            <div className='price'>350 for one</div>
                        </div>
                    </div>
                    <div className='restCard'>
                        <img src={Pizza} alt=''></img>
                        <div className='restContent'>
                            <div className='restName'>Mangal Hotel</div>
                            <div className='rating'>3.6</div>
                        </div>
                        <div className='restContent'>
                            <div className='cuisine'>South Indian</div>
                            <div className='price'>350 for one</div>
                        </div>
                    </div>
                    <div className='restCard'>
                        <img src={Fish} alt=''></img>
                        <div className='restContent'>
                            <div className='restName'>Mangal Hotel</div>
                            <div className='rating'>3.6</div>
                        </div>
                        <div className='restContent'>
                            <div className='cuisine'>South Indian</div>
                            <div className='price'>350 for one</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OrderOnline;