import React from "react";

const PhotosElement = ({data}) => {
    console.log('url>>>>',data);
    return (
        <div>
            IMAGE
            <img className='card-image-picture' src={data} alt="photo" />
        </div>
    )
}
export default PhotosElement;
