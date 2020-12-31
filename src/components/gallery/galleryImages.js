import React, { Component } from 'react'
import  ImageGallery from 'react-image-gallery'

import g1 from '../../photos/gallery/1.jpg'
import g2 from '../../photos/gallery/2.jpg'
import g3 from '../../photos/gallery/3.jpg'
import g4 from '../../photos/gallery/4.jpg'
import g5 from '../../photos/gallery/5.jpg'
import g6 from '../../photos/gallery/6.jpg'
import g7 from '../../photos/gallery/7.jpg'
import g8 from '../../photos/gallery/8.jpg'
import g9 from '../../photos/gallery/9.jpg'
import g10 from '../../photos/gallery/10.jpg'

const images = [
    {
        original: `${g1}`
    },
    {
        original: `${g2}`
    },
    {
        original: `${g3}`
    }
]

export default class GalleryImages extends Component {
    render() {
        return (
            <div>
                <ImageGallery items = {images}/>
            </div>
        )
    }
}
