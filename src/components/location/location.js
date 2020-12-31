import React from 'react';

const Location = () => {
    return (
        <div className = "location-wrapper" >
            <div className = "heading-primary heading-primary-location" >Our Location</div>
            <iframe 
            className = "location-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4156142579423!2d85.32917061438381!3d27.673546633584838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c3077c6aab%3A0x6f82a190d2aa6fb3!2sLittle%20Star%20Records!5e0!3m2!1sen!2snp!4v1603031221834!5m2!1sen!2snp"
            width="100%"
            height="500px" 
            frameBorder="0"
           
            allowFullScreen=""
             
              ></iframe>
            <div className = "location_tag">
                Location
            </div>
        </div>
    );
};

export default Location ;