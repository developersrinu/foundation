import React from 'react'
import './css/contact.css'
import Footer from '../Components/Footer'

import p1 from '../assests/Contact/Food-Donation.jpg'
import p2 from '../assests/Contact/Free-Workshop.jpg'
const ContactPage = () => {
  return (
  
    <div style={{ height: "", marginTop: "5rem", textAlign:"" }}>
      
      <img src={p1} alt='img' id ='contactlogo'/>
      <div className='contactusDiv' style={{textAlign:"center"}} >
        <div className='contactus' style={{textDecoration: "underline"}}>Contact Us</div>
        <div className='HomeAndContact'>Home / Contact</div>
      </div>

      <div className='touchDiv' style={{textAlign:"center"}} >
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