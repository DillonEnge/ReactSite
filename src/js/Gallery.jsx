import React from 'react';
import AdvancedComponent from './AdvancedComponent';
import GalleryImage from './GalleryImage';
import { Images } from './images/Images';
import './css/Gallery.css';

class Gallery extends AdvancedComponent {

    populateGallery() {
        const count = 11;
        let images = [];

        for(let i = 0; i < count; i++){
            images[i] = <GalleryImage key={ Images.Keys[i] } src={ Images[ 'Kellie' + (i + 1) ] } />;
        }

        return Object(images);
    }

    render() {

        return (
            <div className='gallery'>
                { this.populateGallery() }
            </div>
        );
    }
}

export default Gallery;