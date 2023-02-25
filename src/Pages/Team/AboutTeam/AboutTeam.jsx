import React from 'react'
import './AboutTeam.css'
import Button from '../../Common_Components/Button/Button'
import { NavLink } from 'react-router-dom';

const AboutTeam = () => {
  return (
    <div className='container'>
        <div className="aboutTeam">
            <div className="aboutTeamLeft">
                <img src="https://demo.themefisher.com/bingo/images/about-us.jpg" alt="" />
            </div>

            <div className="aboutTeamRight">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tempor eros. Pellentesque elementum nulla sed justo tempor posuere sit amet sit amet ligula. Curabitur felis nibh, imperdiet eu erat non, luctus cursus lectus. Donec maximus diam leo, sed fringilla nisl auctor eget. Donec dictum neque est, ac faucibus ex blandit a.</p>
                <br />
                <p>Curabitur felis nibh, imperdiet eu erat non, luctus cursus lectus. Donec maximus diam leo, sed fringilla nisl auctor eget. Donec dictum neque est, ac faucibus ex blandit a</p>
                <br />
                <NavLink to='/about'><Button title='contact us' /></NavLink>
            </div>
        </div>
      
    </div>
  )
}

export default AboutTeam
