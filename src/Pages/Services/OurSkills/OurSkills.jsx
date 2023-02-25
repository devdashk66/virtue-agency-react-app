import React from 'react'
import './OurSkills.css'
import Button from '../../Common_Components/Button/Button'
import SkillBar from 'react-skillbars';
import { NavLink } from 'react-router-dom';


const skills = [
    { type: 'HTML', level: 90 },
    { type: 'Css', level: 85 },
    { type: 'Javascript', level: 75 },
    { type: 'React', level: 85 },
    { type: 'Node JS', level: 60 },
  ];

  const colors = {
    bar: '#28abe3',
    background:'red',
    title: {
        text: "#fff",
        background: "#2980b9"
    },
  };

const OurSkills = () => {
  return (
    <div className='container'>
      <div className="ourSkills">
        <div className="ourSkillsLeft">
            <h2>Simple To Start</h2>
            <p>Vestibulum nisl tortor, consectetur quis imperdiet bium, letcu. Sedndime ntumiaculis ex, in faucibus lorem accumsan non. Donec mattis tin unt metuorbi sed tort Igor aman luctus dignissim. Vestibulum nisl tortor, consectetur quis imperdiet bium, letcu. Sedndime ntumiaculis ex, in fauciblaus lorem accumsan non.</p>
            <NavLink to='/contact'><Button title='contact us' /></NavLink>
        </div>
        <div className="ourSkillsRight">
        <SkillBar colors={colors} skills={skills} height={35} />
        </div>
      </div>
    </div>
  )
}

export default OurSkills
