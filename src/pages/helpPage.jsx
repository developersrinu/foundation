import React from 'react'
import './css/Help.css'
import pp from '../assests/Help/QR-Codes.jpg'
import qq from '../assests/Help/217344930_123341003295742_5230912381867260948_n.jpg'
import Footer from '../Components/Footer'

const HelpPage = () => {
  return (
    <div   style={{ height: "", marginTop: "5.5rem", textAlign:'' }}>

      <img src={qq} alt='img' id='contactlogo' />
      <div className='contactusDiv' style={{textAlign:"center"}}>
        <div className='contactus' style={{textDecoration: "underline"}}>Contact Us</div>
        <div className='HomeAndContact'>Home / Contact</div>
      </div>


      <div className='Account'>
        <div className='ACCOUNT-DETAILS'><center>ACCOUNT DETAILS</center></div>

        <div className='mainDiv'>
          <div className='details'>
            <div info>For Indian Donors</div>
            <div info>Bank Of Baroda</div>
            <div info>Contact No: +91 8010996763</div>
            <div info>Account Name: Suvidha Mahila Mandal</div>
            <div info>Suvidha Account No: 97840100027609</div>
            <div info>IFSC Code: BARB0DBKPAR</div>

          </div>
          <div className='Qrcode'>
            <img src={pp} alt="" />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HelpPage