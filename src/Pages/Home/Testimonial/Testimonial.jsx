import React from 'react'
import './Testimonial.css'
import ForumIcon from '@mui/icons-material/Forum';
import SingleTPicOne from '../../../images/clients-1.jpg'
import SingleTPicTwo from '../../../images/clients-2.jpg'
import SingleTPicThree from '../../../images/clients-3.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Testimonial = () => {
  return (

<Carousel removeArrowOnDeviceType={["tablet", "mobile","desktop","breakpoint"]} infinite={true} autoPlay={true} responsive={responsive}>
  <div> 
    <div className="testimonial">
        <div className='container'>
      <div className="singleT">
        <ForumIcon/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati ducimus molestiae assumenda minima doloribus eos sapiente blanditiis dicta debitis culpa at eius excepturi eaque amet, facere labore ab, eligendi quas sed fugiat hic libero. Obcaecati culpa vitae voluptatum quae repellendus natus facere laborum soluta harum quis. Modi, vero! Minima id vitae facere dignissimos officia nesciunt eos, assumenda sed perferendis.</p>
        
      </div>
      </div>
    </div>
    <div className='container'>
    <div className="singleTInfo">
            <img src={SingleTPicOne} alt="Persoin One" />
            <h2>William Martin</h2>
            <p>CEO, Company Name</p>
        </div>
        </div>
    </div>
  <div> 
    <div className="testimonial">
        <div className='container'>
      <div className="singleT">
        <ForumIcon/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati ducimus molestiae assumenda minima doloribus eos sapiente blanditiis dicta debitis culpa at eius excepturi eaque amet, facere labore ab, eligendi quas sed fugiat hic libero. Obcaecati culpa vitae voluptatum quae repellendus natus facere laborum soluta harum quis. Modi, vero! Minima id vitae facere dignissimos officia nesciunt eos, assumenda sed perferendis.</p>
        
      </div>
      </div>
    </div>
    <div className='container'>
    <div className="singleTInfo">
            <img src={SingleTPicTwo} alt="Persoin One" />
            <h2>Emma Harrison</h2>
            <p>CEO, Company Name</p>
        </div>
        </div>
    </div>
  <div> 
    <div className="testimonial">
        <div className='container'>
      <div className="singleT">
        <ForumIcon/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati ducimus molestiae assumenda minima doloribus eos sapiente blanditiis dicta debitis culpa at eius excepturi eaque amet, facere labore ab, eligendi quas sed fugiat hic libero. Obcaecati culpa vitae voluptatum quae repellendus natus facere laborum soluta harum quis. Modi, vero! Minima id vitae facere dignissimos officia nesciunt eos, assumenda sed perferendis.</p>
        
      </div>
      </div>
    </div>
    <div className='container'>
    <div className="singleTInfo">
            <img src={SingleTPicThree} alt="Persoin One" />
            <h2>Alexander Lucas</h2>
            <p>CEO, Company Name</p>
        </div>
        </div>
    
    
    
    </div>
</Carousel>

  
  )
}

export default Testimonial
