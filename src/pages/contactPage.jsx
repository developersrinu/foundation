import React from 'react'
import './css/contact.css'
import Footer from '../Components/Footer'

import p1 from '../assests/Contact/children-of-uganda-1994833_1280.jpg'
import p2 from '../assests/Contact/contact.jpg'
const ContactPage = () => {
  return (
  
    <div style={{ height: "", marginTop: "5rem", textAlign:"center" }}>
      
      <img src={p1} alt='img' id ='contactlogo'/>
      <div className='contactusDiv'>
        <div className='contactus' style={{textDecoration: "underline"}}>Contact Us</div>
        <div className='HomeAndContact'>Home / Contact</div>
      </div>

      <div className='touchDiv'>
        <div className='touchH'>Get In Touch</div>
        <div className='query'>Contact for any query</div>
        <div className='imgDiv'>
          <img src={p2}alt="img" />
          {/* <br /> */}
          <a href='https://docs.google.com/forms/d/e/1FAIpQLSfAaaHU-k256CY6_83JPBOYeVFtKuKBvqMJb7oBIsDLKRmwNg/viewform'className='sendMessage'>Send message</a>
        </div>
      </div>
      <Footer/>












   
     </div>
  )
}

export default ContactPage