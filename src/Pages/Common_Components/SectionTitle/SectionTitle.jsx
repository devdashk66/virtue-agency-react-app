import React from 'react'
import './SectionTitle.css'

import Fade from 'react-reveal/Fade';

const SectionTitle = ({title, pera}) => {
  return (
        <>
          
          <div className="sectionTitleWrapper">
            <div className="container">
            <Fade top>
              <div className='section_Title'>
                <h1>{title}</h1>
                <p>{pera}</p>
              </div>
              </Fade>
            </div>
        </div>
          
        </>

    
  )
}

export default SectionTitle
