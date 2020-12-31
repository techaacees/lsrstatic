import React from 'react'
import Slider from 'react-slick'
import slide_one from '../../photos/slide1.jpg'
import slide_two from '../../photos/slide2.jpg'
import slide_three from '../../photos/slide3.jpg'
export default function Carousel() {
    const settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 500
    }
    return (
        <div
            className = "carrousel_wrapper"
            style = {{
               
                height:'100vh',
                overflow: 'hidden',
                background: 'green'
            }}
        >
           <Slider {...settings}>
                <div>
                   <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_one})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height:'100vh'
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_two})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height:'100vh'
                        }}
                   ></div>
                </div>
                <div>
                    <div 
                        className="carrousel_image"
                        style={{
                            background:`url(${slide_three})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height:'100vh'
                        }}
                   ></div>
                </div>
            </Slider>
            
        </div>
    )
}
