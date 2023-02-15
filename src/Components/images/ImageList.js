import React from 'react'

const ImageList = ({images}) => {

    const prepearImagesList = images.map(image =>
        {
            return (
                <img key = {image.id} src={image.urls.small} alt="" />
            )
        }
        );
  return (
    <div>
      {/* {images.length} kadar  resim var */}

      {prepearImagesList}
     
    </div>
  )
}

export default ImageList


