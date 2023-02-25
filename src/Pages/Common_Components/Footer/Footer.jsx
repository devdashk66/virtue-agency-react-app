import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className='container'>
       <footer>
        <div className="footerAbout">
            <h3>About</h3>
            <p>Integer posuere erat a ante venenati dapibus posuere velit aliquet. Fusce dapibus, tellus cursus commodo, tortor mauris sed posuere.</p>
        </div>
        <div className="footerServices">
        <h3>Our Services</h3>
            <ul>
                <li><a href="/">Ui/Ux Design</a></li>
                <li><a href="/">Graphic Design</a></li>
                <li><a href="/">Web Design</a></li>
                <li><a href="/">Web Development</a></li>
            </ul>
        </div>
        <div className="footerLinks">
        <h3>Quick Links</h3>
        <ul>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">404</a></li>
            </ul>
        </div>
       </footer>
       
      </div>
      <div className="copyRightDiv">

      <p className='copyRight'>© COPYRIGHT 2022. ALL RIGHTS RESERVED.
Design And Developed By Dev <br /> <p><a target='_dev' href="https://demo.themefisher.com/bingo/index.html">Original Site Link</a></p></p>

      </div>
    </div>
  )
}

export default Footer
