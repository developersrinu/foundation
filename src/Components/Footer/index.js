
import React from 'react'
import "./style.css"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer' style={{ width: '100%', height: "auto", background: "#20212B" }}>
      <div className='innerDiv'>

        <div className='info'>
          <div style={{ color: "#F5B20F" }} >Suvidha Foundation (Suvidha Mahila Mandal)</div>
          <div style={{ color: "white" }} >Suvidha Mahila Mandal, Walni Ward No. 1, Jai Bhole Nagar, Walni, Saoner</div>
          <div style={{ color: "white" }} >Nagpur, Maharashtra 441102</div>
          <div style={{ color: "white" }}> Email:info@suvidhafoundationedutech.org</div>
          <div style={{ color: "white" }}> Cell: +91 7020044091</div>

          <div className='media'>
            <a href='https://www.facebook.com/suvidhamahilamandal/'> <FaFacebook style={{ color: "white", margin: '5px'}} /></a>
            <a href='https://www.instagram.com/suvidha_mahila_mandal/?igshid=YmMyMTA2M2Y%3D'><FaInstagram style={{ color: "white", margin:"5px"}} /></a>
            <a href='https://www.linkedin.com/company/suvidha-foundation/'><FaLinkedin style={{ color: "white", margin: '5px'}} /></a>
          </div>

          

        </div>

        <div className='doc'>
          <div style={{ color: "var(--yellow)", fontSize: "1.4rem" }}>Certificates</div>
          <div ><a style={{ color: "white" }} href='https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf'>80G Certificate</a></div>
          <div ><a style={{ color: "white" }} href='https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf'>12A Certificate</a></div>
          <div > <a style={{ color: "white" }} href='https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF'>CSR Certificate</a></div>
          <div ><a style={{ color: "white" }} href='https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf'>Suvidha Darpan Registration</a></div>
          <div><a style={{ color: "white" }} href='https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf'>suvidha Pan Card</a></div>
        </div>
        <div className='links'>
          <div style={{ color: "var(--yellow)", fontSize: "1.4rem" }}>Useful Links</div>
          <div ><a style={{ color: "white" }} href='https://suvidhafoundationedutech.org/verify.php'>Verify Your Cerificate</a></div>
          <div ><a style={{ color: "white" }} href='https://suvidhafoundationedutech.org/privacypolicy.php'>Privacy Policy</a></div>
        </div>
      </div>
      <hr style={{ color: 'white' }}></hr>

      <div id='bottomFooter'style={{display:'flex',justifyContent:'space-evenly',padding:'10px'}} >
        <div className='leftbuttom' style={{ color: 'white' }}>© Suvidha Foundation (Suvidha Mahila Mandal), All Right Reserved.</div>
        <div className='rigttbuttom' style={{ color: 'var(--yellow)' }}>Designed By HTML Codex</div>
      </div>

      <div>

      </div>

    </div>
  )
}

export default Footer