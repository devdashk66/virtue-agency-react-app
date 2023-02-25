import React from 'react'
import PageHeader from '../Common_Components/PageHeader/PageHeader'
import SectionTitle from '../Common_Components/SectionTitle/SectionTitle'
import CreateDesign from './CreateDesign/CreateDesign'
import MissionVision from './MissionVision/MissionVision'
import PromoVideo from './PromoVideo/PromoVideo'
import CreateTogether from '../Home/CreateTogether/CreateTogether'
import Testimonial from '../Home/Testimonial/Testimonial'
import Award from '../Home/Award/Award'




const About = () => {
  return (
    <>
      <PageHeader title='About Us' link='/about'/>
      <CreateDesign/>
      <br /> <br />
      <MissionVision />
      <SectionTitle 
      title="Our Promo Video" 
      pera='Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu.Sed condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.'/>
      <PromoVideo/>
      <Testimonial/>
      <SectionTitle 
      title="Award-Winning Agency" 
      pera='Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.'/>
      <Award/>
      <CreateTogether />
    </>
  )
}

export default About
