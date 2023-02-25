import React from 'react'
import "./PromoVideo.css"
const PromoVideo = () => {
  return (
    <div className='container'>
        <div className="promoVideo">
        <iframe src="https://www.youtube.com/embed/mS3tCWnNRqk" title="Video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default PromoVideo
