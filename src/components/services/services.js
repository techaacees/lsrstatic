import React from 'react'
import liveSound from '../../photos/live-sound.png'
import ledWall from '../../photos/ledWall.jpeg'
import stateLight from '../../photos/stageLight.jpg'
import Bounce from 'react-reveal/Bounce';

export default function Services() {
    return (
        <div className = "section_services">
            <div className = "heading-primary">
                our services
            </div>
            <Bounce left>
                <div className = "services-1">
                    <div className = "service-item service-item-1" >
                        Live Sound Rental
                    </div>
                    <div className = "service-item service-item-2">
                        LED screen wall
                    </div>
                    <div className = "service-item service-item-3" >
                        Stage lighting
                    </div>              
                </div>
            </Bounce>
            <Bounce delay = {50} left>
            <div className = "services-2">
                 <div className = "service-item service-item-4">
                Trussing and Staging
                </div>
                <div className = "service-item service-item-5">
                Backline System
                </div>
                <div className = "service-item service-item-6">
                    A/V production
                </div>
            </div>
            </Bounce>
            
        </div>
    )
}
