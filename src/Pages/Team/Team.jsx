import React from 'react'
import SectionTitle from '../Common_Components/SectionTitle/SectionTitle'
import PageHeader from '../Common_Components/PageHeader/PageHeader'
import AboutTeam from './AboutTeam/AboutTeam'
import OurTeam from './OurTeam/OurTeam'

const Team = () => {
  return (
    <>
    <PageHeader title='Team' link='/team'/>
    
    <SectionTitle 
      title="Our Team" 
      pera='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quasi tempora obcaecati, quis similique quos.'/>
      <OurTeam/>
      <SectionTitle 
      title="About Us" 
      pera='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa placeat voluptas tempore recusandae quasi nesciunt in, facilis animi. Sint, possimus?'/>
      <AboutTeam/>
    </>
  )
}

export default Team
