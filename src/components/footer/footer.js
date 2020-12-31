import React from 'react';
import logo from '../../photos/logo_small.jpg'
import {Link} from 'react-router-dom'
 const Footer = () => {
    return (
        <div className = "footer-wrapper bck_black">
            <div className = "row">
                <div className = "col1-of-2  social-media">
                   
                    <div className = "row footer-row">
                        <div>
                            follow us on :
                        </div>
                        
                        <div>
                        <a href="https://www.facebook.com/littlestarrecords">Facebook</a>
                            
                        </div>
                        <div>
                        <a href="https://www.youtube.com/channel/UCyHmldhe_gl9l5cCU_l0Kbg">Youtube</a>
                        </div>
                        <div>
                        <a href="https://www.instagram.com/littlestarrecords/">Instagram</a>
                        </div>

                    </div>
                </div>
                <div className = "col1-of-2 copyright">
                    <img src = {logo} class = "footer-logo" />
                    <div className = "footer-text">
                    &#xa9; All Rights Reserved {(new Date()).getFullYear()} 
                        
                    </div>
                    <div> Little star records</div>
                   
                    <br/>
                    <br/>
                    <br/>
                    <div className = "webmaster">
                    webiste created by: Ashish bajracharya
                    </div>
                  
                   
                </div>
            </div>
            
        </div>
    );
};

export default Footer;