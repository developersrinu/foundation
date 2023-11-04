import React from 'react'
import MyCarousel from '../Components/Carousel'
import Image from "../assests/HomepageAssests/about.jpg"
import Tabs from '../Components/Tabs'
import Footer from "../Components/Footer"
import EventCard from '../Components/EventCard'
import EventCardimg1 from "../assests/events/Fundraising.jpg"
import EventCardimg2 from "../assests/events/Tree-Plantation.jpg"
import testmonialCard1 from '../assests/testmonialCards/106.jpg'
import testmonialCard2 from '../assests/testmonialCards/5.jpg'
import testmonialCard3 from '../assests/testmonialCards/89.jpg'
import Teaming1 from '../assests/Team/Shobha_Motghare.jpeg'
import Teaming2 from '../assests/Team/Payal_Badhe.jpg'
import Teaming3 from '../assests/Team/Bharti_Shendre.jpg'
import Teaming4 from '../assests/Team/Nilima_Kalambe.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo1 from '../assests/logos/collab-1 (1).jpg'
import logo2 from '../assests/logos/collab-2.jpg'
import footerCard1 from '../assests/FooterCard/1.jpg'
import footerCard2 from '../assests/FooterCard/5 (1).jpg'
import footerCard3 from '../assests/FooterCard/9.jpg'

import VideoPage from '../Components/video'
import { Link } from 'react-router-dom'

import './pages.css'
import "./css/home.css"

import img from '../assests/fondation/facts (1).jpg'
const HomePage = () => {

    const tabData = [
        {
            title: "About",
            data: "Suvidha Mahila Mandal is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship and the scope to volunteer. Through these programmes, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equip them for the unforeseen future.",
        },
        {
            title: "Mission",
            data: "To Inspire Students, help them Innovate and let them Integrate to build the next generation humankindTo Run Food Donation And Awareness Campaign In Rural Region."

        },
        {
            title: "Vision",
            data: "To build Next Generation Entrepreneur, by providing them a Skill-Based Education.To Provide Internship, Training And Workshops and Quality Education All Over The World..",
        },
    ];

    return (
        <div className="homediv" style={{ height: "auto", marginTop: "6rem" }}>
            <MyCarousel />

            {/* horizontal Card with tabs */}
            <div className='H-card'>
                <img src={Image} className='leftImage' />
                <div className='rightDiv1'>
                    <div className='heading'>Learn About Us</div>
                    <div className='subHeading'>Suvidha Foundation <br />(Suvidha Mahila Mandal)</div>

                    <Tabs data={tabData} />

                </div>
            </div>
            {/* -------------------------- */}

            <div className='InternshipDiv' style={{ background: "#737373", width: "100%", height: 'auto', padding: "10px", textAlign: "center", marginTop: "1rem" }}>
                <div style={{ color: "var(--yellow)", fontSize: "3.4rem" }}>Apply For Internship and Mentorship Programs</div>
                <div style={{ fontSize: "2rem" }}>Seize the opportunity to gain invaluable experience and jumpstart your career with an internship that propels you towards success.</div>
                <div style={{ fontSize: "1rem", margin: '10px' }}>The Suvidha Foundation Internship Program is a unique opportunity for students and recent graduates to gain experience and contribute to the work of Suvidha Foundation. Along with undertaking tasks related to their specific skills, we encourage interns to develop a reputable professional portfolio.</div>
                <Link
                    to="internshipPage"
                    className="apply"
                    style={{
                        color: "var(--yellow)", padding: "5px", borderRadius: "5px"
                    }} > Apply Here
                </Link>

            </div>


            {/* what we do  */}
            <div className='whatWeDo'>
                <div style={{ fontSize: "2rem", color: "var(--yellow)" }}>What We Do?</div>
                <div style={{ fontSize: "2.3rem", color: "#4A4C70", fontWeight: "bolder" }}>Causes for a Sustainable Future</div>
                <div className='boxs'>
                    <div className='box'>
                        <h2 style={{ color: "#4A4C70" }}>Healthy Food</h2>
                        <p>By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.</p>
                    </div>
                    <div className='box'>
                        <h2 style={{ color: "#4A4C70" }}>Social Awareness</h2>
                        <p>We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment and prevent the spread of diseases.</p>
                    </div>
                    <div className='box'>
                        <h2 style={{ color: "#4A4C70" }}>Healthy Food</h2>
                        <p>By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.</p>
                    </div>
                    <div className='box'>
                        <h2 style={{ color: "#4A4C70" }}>Healthy Food</h2>
                        <p>By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.</p>
                    </div>
                    <div className='box'>
                        <h2 style={{ color: "#4A4C70" }}>Health Care</h2>
                        <p>We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need.</p>
                    </div>
                    <div className='box'>
                        <h2 style={{ color: "#4A4C70" }}>Social Care</h2>
                        <p>Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals</p>
                    </div>
                </div>
            </div>

            {/* what we do  */}

            {/* ----------------------- */}
            <div className='blog' >
                <img src={img} alt="" style={{ width: "100%", height: '70vh' }} />
                <div className='list'>

                    <div className='list1'>15<sup>+</sup><br className='Q'></br>Countries</div>
                    <div className='list1'>3L<sup>+</sup><br className='Q'></br>Volunteers</div>
                    <div className='list1'>1Cr<sup>+</sup ><br className='Q'></br>Internship Goal</div>
                    <div className='list1'>54<sup>+</sup ><br className='Q'></br>Trees Planted</div>

                </div>
            </div>
            {/* ------------------------- */}
            {/* eventphoto */}
            <div className='Event'>
                <div className='EventH'>Suvidha Events</div>
                <div className='EventD'>Our Charity Events: Celebrating Our Impact Together</div>
            </div>

            <div className='EventCardDiv'>
                <EventCard imgurl={EventCardimg1} head="Fundraising Events" desc='Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community.' />
                <EventCard imgurl={EventCardimg2} head="Tree Plantation" desc="Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet." />
            </div>

            <div className='showMore1'><Link to="eventPage" className='showMore'>Show more</Link></div>
            {/* eventphoto */}

            {/* testmonal */}
            <div className='testmonal'>

                <div className='testmonalHead'>Testimonial</div>
                <div className='testmonalSubHead'>What people are talking about our charity activities</div>

                <div className='testmonalCards'>
                    <img src={testmonialCard1} alt="img" />
                    <img src={testmonialCard2} alt="img" />
                    <img src={testmonialCard3} alt="img" />
                </div>

                <div className='testmonalBtn1'><a className='testmonalBtn' href='https://drive.google.com/drive/u/0/folders/1lCc5YL2t6eFN3nlk9mgseCXCg7kOdty8'>See More</a></div>

            </div>

            {/* testmonal */}

            {/* team */}
            <div className='team'>

                <div className='teamH'>Meet Our Team</div>
                <div className='teamHsun'>Awesome guys behind our charity activities</div>

                <div className='teamCards'>
                    <div className='teamCard'>
                        <img src={Teaming1} alt="img" />
                        <div className='media1'>
                            <a href='https://www.facebook.com/suvidhamahilamandal/'> <FaFacebook style={{ color: "black", margin: '5px' }} /></a>
                            <a href='https://www.instagram.com/suvidha_mahila_mandal/?igshid=YmMyMTA2M2Y%3D'><FaInstagram style={{ color: "black", margin: '5px' }} /></a>
                            <a href='https://www.linkedin.com/company/suvidha-foundation/'><FaLinkedin style={{ color: "black", margin: '5px' }} /></a>
                        </div>
                        <div className='name'>Shobha Motghare</div>
                        <div className='nameInfo'>Secretary</div>
                    </div>

                    <div className='teamCard'>
                        <img src={Teaming2} alt="img" />

                        <div className='media1'>
                            <a href='https://www.facebook.com/suvidhamahilamandal/'> <FaFacebook style={{ color: "black", margin: '5px' }} /></a>
                            <a href='https://www.instagram.com/suvidha_mahila_mandal/?igshid=YmMyMTA2M2Y%3D'><FaInstagram style={{ color: "black", margin: '5px' }} /></a>
                            <a href='https://www.linkedin.com/company/suvidha-foundation/'><FaLinkedin style={{ color: "black", margin: '5px' }} /></a>
                        </div>
                        <div className='name'>Shobha Motghare</div>
                        <div className='nameInfo'>Secretary</div>
                    </div>

                    <div className='teamCard'>
                        <img src={Teaming3} alt="img" />
                        <div className='media1'>
                            <a href='https://www.facebook.com/suvidhamahilamandal/'> <FaFacebook style={{ color: "black", margin: '5px' }} /></a>
                            <a href='https://www.instagram.com/suvidha_mahila_mandal/?igshid=YmMyMTA2M2Y%3D'><FaInstagram style={{ color: "black", margin: '5px' }} /></a>
                            <a href='https://www.linkedin.com/company/suvidha-foundation/'><FaLinkedin style={{ color: "black", margin: '5px' }} /></a>
                        </div>
                        <div className='name'>Shobha Motghare</div>
                        <div className='nameInfo'>Secretary</div>
                    </div>

                    <div className='teamCard'>
                        <img src={Teaming4} alt="img" />
                        <div className='media1'>
                            <a href='https://www.facebook.com/suvidhamahilamandal/'> <FaFacebook style={{ color: "black", margin: '5px' }} /></a>
                            <a href='https://www.instagram.com/suvidha_mahila_mandal/?igshid=YmMyMTA2M2Y%3D'><FaInstagram style={{ color: "black", margin: '5px' }} /></a>
                            <a href='https://www.linkedin.com/company/suvidha-foundation/'><FaLinkedin style={{ color: "black", margin: '5px' }} /></a>
                        </div>
                        <div className='name'>Shobha Motghare</div>
                        <div className='nameInfo'>Secretary</div>
                    </div>
                </div>



            </div>
            {/* team */}


            {/* logos */}
            <div className='logosDiv'>
                <div className='logosHead'>Empowering Change Together:<br />Our Collaborative Initiatives</div>
                <div className='logos'>
                    <img src={logo1} alt="img" />
                    <img src={logo2} alt="img" />
                    <img src={logo1} alt="img" />
                </div>
            </div>

            {/*logos */}


            {/* footerTestmonal */}
            <div className='footerTestmonal'>
                <div className='footerTestmonalH'>Testimonial</div>
                <div className='footerTestmonalS'>What people are talking about<br></br> our charity activities</div>
                <div className='footerTestmonalCards' >
                    <div className='footerTestmonalCard'>
                        <span><img src={footerCard1} alt="img" /></span> <span style={{ fontSize: "2rem", textAlign: 'center', marginLeft: '7px' }}>Aheri Ghosh</span>
                        <hr />
                        <div className='cardDesc'>I'm glad to have work the suvidha foundation because . iam  passionate about their message and what they do</div>

                    </div>

                    <div className='footerTestmonalCard'>
                        <span><img src={footerCard2} alt="img" /></span><span style={{ fontSize: "2rem", textAlign: 'center', marginLeft: '7px' }}>Samrudhi Nawale</span>
                        <hr />
                        <div className='cardDesc'>The experience here at Suvidha Foundation was wonderful .i learnt a lot .it was worth it</div>

                    </div>

                    <div className='footerTestmonalCard'>
                        <span><img src={footerCard3} alt="img" /></span><span style={{ fontSize: "2rem", textAlign: 'center', marginLeft: '7px' }}>LeKhashree</span>
                        <hr />
                        <div className='cardDesc'>it was a greate exprerince working with your NGO .I learned to connect with the socitey and helped the underprivileged of the society</div>

                    </div>
                </div>
                {/* < footer /> */}

            </div>
            {/* fotterTestmonal */}










            <Footer />






        </div>
    )
}

export default HomePage