import React from 'react';
import Featured from '../featured/featured'
import Services from '../services/services'
import About from '../about/about'
import Location from '../location/location'
import {Element} from 'react-scroll'
const Home = () => {
    return (
        <div>
            <Element name = "home">
                 <Featured />
            </Element>
            <Element  name = "services">
            <Services />
            </Element>
            <Element name = "about">
            <About />
            </Element>
            <Element name = "location">
            <Location />
            </Element>
          
          
        </div>
    );
};

export default Home;