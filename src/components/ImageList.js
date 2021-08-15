import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

//If there were more properties we could've destructured the 
//image props

const ImageList = props => {
    const images = props.images.map(image => {
        return <ImageCard key={image.id} image={image} />
    })

    return (
        <div className="image-list">{images}</div>
    )
}

export default ImageList;