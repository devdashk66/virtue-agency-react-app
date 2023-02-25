import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../Common_Components/Button/Button'
import './CreateTogether.css'

const CreateTogether = () => {
  return (
    <div className="createTogetherWrapper">
    <div className="container">
      <div className="createTogether">
        <h2>Let's Create Somthing Together</h2>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin bibendum auctor, nisi elit consequat ipsum, nesagittis sem nid elit. Duis sed odio sitain elit.</p>
      <NavLink to='/contact'><Button title="Contact Us"/></NavLink>
      </div>
    </div>
    </div>
  )
}

export default CreateTogether
