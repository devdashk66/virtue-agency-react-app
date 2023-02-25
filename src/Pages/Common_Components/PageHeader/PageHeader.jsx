import React from 'react'
import './PageHeader.css'
import { Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade';

const PageHeader = ({title, link}) => {
    
  return (
    <>
       <div className="pageHeader">
        <div className="container">
          <Fade right >
            <div className="pageHeaderWrapper">
            <h2>{title}</h2>
            <p><Link to="/">Home / </Link><Link to={link}>{title}</Link></p>
            </div>
            </Fade>
        </div>
       </div>
    </>
  )
}

export default PageHeader
