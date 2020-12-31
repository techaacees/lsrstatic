import React from 'react';
import Slider from 'react-slick'
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import Button from '../button/button'
const About = () => {
    const settings  ={
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 400
    }
    return (  
        <div className = "section-about">
            <Fade top>
            <div className = "heading-primary text-white">
                About us
            </div>
            </Fade>
            <div className = "row">
                <div className = "col-1-of-2 about-image">
                   
                </div>
                <div className = "col-1-of-2">
                <Fade right>
                <h1 className = "heading-secondary heading-secondary-about">
                    A journey started 28 years ago
                </h1>
                </Fade>
                <Fade bottom>
                <p className = "paragraph paragraph-about">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <p className = "paragraph paragraph-about">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <Button type = "secondary" text = "Learn More" linkTo = "/about" />
                </Fade>

                </div>
            </div>
           
            {/* <div className = "row">
            <Fade bottom>
            <div className = "section-slider col1">           
            </div>
            </Fade>
            <div className = "about-text col1">
                <Fade right>
                <h1 className = "heading-secondary heading-secondary-about">
                    A journey started 28 years ago
                </h1>
                </Fade>
                
                <Fade bottom>
                <p className = "paragraph paragraph-about">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <p className = "paragraph paragraph-about">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                </Fade>
               
            </div>
            </div> */}
            

        </div>
    
    )
}
 
export default About