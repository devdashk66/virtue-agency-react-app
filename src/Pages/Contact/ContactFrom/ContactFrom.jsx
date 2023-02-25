import React from 'react'
import './ContactFrom.css'
import Button from '../../Common_Components/Button/Button'
import HomeIcon from '@mui/icons-material/Home';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';

const ContactFrom = () => {
  return (
    <div className='container'>
      <div className="contactFrom">
        <div className="contactFromInfo">
            <h3>Contact Details</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, vero, provident, eum eligendi blanditiis ex explicabo vitae nostrum facilis asperiores dolorem illo officiis ratione vel fugiat dicta laboriosam labore adipisci.
            </p> <br />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo at saepe perferendis ab dolores.
            </p>
            <h4><HomeIcon/> Home Address</h4>
            <h4><PhoneIphoneIcon/> Phone Number</h4>
            <h4><EmailIcon/> Email Address</h4>
        </div>
        <div className="contactFromInput">
            <input type="name" placeholder='Your Name'/>
            <input type="email" placeholder='Your Email'/>
            <input type="subject" placeholder='Subject'/>
            <textarea rows="4" cols="50" type="text" placeholder='Your Message'/>
            <Button title="Submit"/>
        </div>
      </div>
    </div>
  )
}

export default ContactFrom
