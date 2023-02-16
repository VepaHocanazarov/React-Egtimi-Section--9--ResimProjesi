import React from 'react'
import "./imageslist.css"
import Images from './Images';

const ImageList = ({ images }) => {

  const prepearImagesList = images.map(image => {
    return (
      <Images key = {image.id} image = {image}/>
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


