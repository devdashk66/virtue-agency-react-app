import React from 'react'
import PageHeader from '../Common_Components/PageHeader/PageHeader'
import SectionTitle from '../Common_Components/SectionTitle/SectionTitle'
import ContactFrom from './ContactFrom/ContactFrom'
const Contact = () => {
  return (
    <>
    <PageHeader title='Contact Us' link='/contact'/>
      <SectionTitle 
      title="Get In Touch" 
      pera='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate facilis eveniet maiores ab maxime nam ut numquam molestiae quaerat incidunt?'/>
      <ContactFrom/>
    </>
  )
}

export default Contact
