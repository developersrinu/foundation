import React from 'react'
import Footer from '../Components/Footer'
import './css/intern.css'
import p1 from '../assests/intern/p1.jpg'
import p2 from '../assests/intern/p2.jpeg'
import p3 from '../assests/intern/p3.jpg'
import p4 from '../assests/intern/p4.jpg'
import p5 from '../assests/intern/file-e36f5a15-fd80-419d-9342-9a2f48be43bf.jpg'

import A1 from '../assests/maincard/ben-7656dd36.jpeg'
import A2 from '../assests/maincard/claire-bfdbc161.jpeg'
import A3 from '../assests/maincard/download.jpg'
import A4 from '../assests/maincard/iwan-70e1c572.jpeg'
import A5 from '../assests/maincard/judith-8d0417f0.jpeg'

import A6 from '../assests/maincard/lori-07099057.jpeg'
import A7 from '../assests/maincard/mali-a8248c71 (1).webp'
import A8 from '../assests/maincard/mi-68a0f720.jpeg'
import A9 from '../assests/maincard/nim-d6bbfb63.jpeg'
import A10 from '../assests/maincard/san-3b86301b.jpeg'

import A11 from '../assests/maincard/sanjid-2d7a907f.jpeg'
import A12 from '../assests/maincard/steph-68f47994.jpeg'
import A13 from '../assests/maincard/zak-be2e6aeb.jpeg'


const InternshipPage = () => {
  return (
    <div style={{ height: "", marginTop: "5.5rem", textAlign: "" }}>
      <div className='main'>


        <div className='text'>
          <div className='head1'>Suvidha Foundation InternShip</div>
          <div className='head2'id='aaa'>Join Our Impactful Internship Program and Make a Difference. </div>
          <div className='head3'>Empower Communities Through an Internship at Suvidha Foundation</div>
          <div className='button' ><a href="https://docs.google.com/forms/d/e/1FAIpQLSdPAVP_An-H2y9DgR9kgmMrroeBk3kZJVUR93IC1vJevWM6BA/viewform">Apply for internship</a></div>
          <div className='profile'>

            <img src={p2} alt="img" />
            <div className='desc'>Divina Malfoy
              “It was great experience to work in suvidha foundation, team work is very good. They conduct daily meetings to guide how to work,which they make our work more easy. So, overall it's amazing organization to learn. ”
              Divina Malfoy</div>
          </div>
        </div>

        <div className='imgDiv'>
          <img src={p1} alt="img" />

        </div>

      </div>

      <div className='internCard'>

        <div className='imglogo'>
          <img src={p3} alt="" />
        </div>

        <div className='infoDiv'>
          <div className='heading'>Why You Should Apply for This Internship.</div>
          <div className='desc1'>Student internship and mentorship program at our NGO Suvidha Foundation (Suvidha Mahila Mandal) offers valuable opportunities for students to gain practical experience, contribute to meaningful projects, and receive guidance from experienced professionals in the nonprofit sector.During a student internship, individuals have the chance to work closely with the NGO's team, understanding its mission, values, and operations.</div>
        </div>

      </div>


      <div className='internCard'>

        <div className='infoDiv'>
          <div className='heading'>Student Internship and Mentorship Programs.</div>
          <div className='desc1'>At Suvidha Foundation, we offer a range of free internship opportunities, both technical and non-technical, as well as social work programs. Our internship programs aim to provide valuable hands-on experience to students and individuals, allowing them to contribute to our organization's initiatives and projects.</div>
        </div>

        <div className='imglogo'>
          <img src={p4} alt="img" />
        </div>

      </div>


      {/* --------------------------------- */}
      <div className='descdiv'>
        <div className='head3'>   "Suvidha Foundation NGO stands out for its impactful programs, commitment to empowerment, collaborative approach, transparency, and diverse range of initiatives. It provides a meaningful platform for individuals to contribute their skills and make a real difference in society."</div>
        {/* <div className='imageDiv'> */}
          <img src={p5} alt="" className='myimage' />
        {/* </div> */}
        <div className='imgName'>Soumya Sharma</div>
      </div>

     {/* ------------------------------mainCard--------------------------- */}

       <div className='mainCard'>
        <div className='pics'>

          <img src={A1} alt="img" />
          <img src={A2} alt="img" />
          <img src={A3} alt="img" />
          <img src={A4} alt="img" />
          <img src={A5} alt="img" />
          <img src={A6} alt="img" />
          <img src={A7} alt="img" />
          <img src={A8} alt="img" />
          <img src={A9} alt="img" />
          <img src={A10} alt="img" />
          <img src={A11} alt="img" />
          <img src={A12} alt="img" />
          <img src={A13} alt="img" />

          
          
         
        </div>
       
        <div className='join'>Join Suvidha Foundation Internship Today.</div>
        <div className='appBtn' ><a href="#aaa">Apply Now For Internship</a></div>
        
       </div>
   

     <Footer/>

    </div>
  )
}

export default InternshipPage