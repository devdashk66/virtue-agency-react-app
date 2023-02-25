import React from 'react'
import PageHeader from '../Common_Components/PageHeader/PageHeader'
import SectionTitle from '../Common_Components/SectionTitle/SectionTitle'
import Award from '../Home/Award/Award'
import OurOffer from '../Home/OurOffer/OurOffer'
import Testimonial from '../Home/Testimonial/Testimonial'
import OurServices from './OurServices/OurServices'
import OurSkills from './OurSkills/OurSkills'

function Services() {
  return (
    <>
      <PageHeader title="Services" link='/services'/>
      <SectionTitle title='Our Services' pera='Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.'/>
      <OurServices/>
      <SectionTitle 
      title="What Do We Offer" 
      pera='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vero dicta mollitia, explicabo corrupti porro laboriosam quod aspernatu.'/>
      <OurOffer/>
      <SectionTitle title='Our Skills' pera='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus fugiat, vel veniam, eos et delectus eveniet molestiae. Esse, voluptas ratione.'/>
      <OurSkills/>
      <SectionTitle title='Award-Winning Agency' pera='Vestibulum nisl tortor, consectetur quis imperdiet bibendum, laoreet sed arcu. Sed condimentum iaculis ex, in faucibus lorem accumsan non. Donec mattis tincidunt metus. Morbi sed tortor a risus luctus dignissim.'/>
      <Award/>
      <Testimonial/>
      
    </>
  )
}

export default Services
