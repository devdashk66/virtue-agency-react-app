import React from 'react'
import './Button.css'

import Bounce from 'react-reveal/Bounce';

const Button = (title) => {
  return (
    <>
<Bounce>
<button className='btn-grad '>{title.title}</button>
</Bounce>

    </>
  )
}

export default Button
