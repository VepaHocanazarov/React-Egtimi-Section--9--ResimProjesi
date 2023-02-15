import React from 'react'
import "./imageslist.css"

const ImageList = ({images}) => {

    const prepearImagesList = images.map(image =>
        {
            return (
                <img key = {image.id} src={image.urls.small} alt="" />
            )
        }
        );
  return (
    <div className='imageslist'>
      {/* {images.length} kadar  resim var */}

      {prepearImagesList}
     
    </div>
  )
}

export default ImageList


