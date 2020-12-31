import React from 'react'
import  Carousel from './carousel'
import TimeStamp from './timeStamp'
export default function Featured() {
    return (
        <div style = {{position: 'relative', height: '100vh'}}>
            <Carousel />
            <div className = "artist_name">
                <div className = "wrapper">
                  All Your event needs
                  <br />
                  under one roof
                </div>
            </div>
            <TimeStamp />
            
        </div>
    )
}
