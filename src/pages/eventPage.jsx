import React from 'react'
import EventCard from '../Components/EventCard'
import p1 from '../assests/Gallery/kkr.jpg'
import p2 from '../assests/events/Animal-Feeding.jpg'
import p3 from '../assests/events/Cloths-Distribution.jpg'
import p4 from '../assests/events/Food-Donation.jpg'
import p5 from '../assests/events/Free-Workshop.jpg'
import p6 from '../assests/events/Fundraising.jpg'
import p7 from '../assests/events/Sanitary-Pads.jpg'
import p8 from '../assests/events/Tree-Plantation.jpg'
import p9 from '../assests/events/women.jpg'
import p10 from '../assests/events/file-8be10dcc-83f4-40e4-9c76-5a3bf9aa263c.jpg'
import p11 from '../assests/events/Free-Workshop.jpg'
import Footer from '../Components/Footer'
const EventPage = () => {
  return (
    <div style={{ height: "", marginTop: "5.5rem", textAlign: "center" }}>
      <img src={p1} alt='img' id='Gallerylogo' />
      <div className='GalleryDiv'>
        <div className='Galleryus' style={{textDecoration: "underline"}}>Events</div>
        <div className='HomeAndGallery'>Home / Events</div>
      </div>


      <div style={{ textAlign: "center" }}>
        <div className='Our-Gallery'>Events</div>
        <div className='OurGallerySub'>Our Charity Events: Celebrating Our Impact Together</div>

      </div>

      <div className='items'>
        <EventCard imgurl={p2} head='Ensuring Happy and Healthy Animals through Feeding Programs' desc='Join us in providing sustenance and compassion to our furry companions. Together lets make a positive impact on their lives through our Animal Feeding event.'/>
        <EventCard imgurl={p3} head='Cloths Donation Initiatives by Our NGO' desc='Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.'/>
        <EventCard imgurl={p4} head='Food Donation Initiatives by Our NGO' desc='Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals.'/>
        <EventCard imgurl={p5} head='Free Workshops' desc='Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops.'/>
        <EventCard imgurl={p6} head='Fundraising Events' desc='Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community'/>
        <EventCard imgurl={p7} head='Sanitary Pads Distribution' desc='Breaking barriers and promoting menstrual health with our Sanitary Pad Initiative. Together, lets empower women and ensure access to safe and dignified hygiene.'/>
        <EventCard imgurl={p8} head='Tree Plantation' desc='Join us in nurturing the Earths embrace one tree at a time Together lets create a greener tomorrow and breathe life into our planet.'/>
        <EventCard imgurl={p9} head='Womens Day' desc='Celebrating the strength, resilience, and achievements of women worldwide on this special Womens Day. Together, lets honor their contributions'/>
        <EventCard imgurl={p5} head='Free Workshops' desc='Discover new skills, ignite your passions, and embrace lifelong learning with our engaging and enriching free workshops.'/>
        <EventCard imgurl={p3} head='Cloths Donation Initiatives by Our NGO' desc='Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event.'/>
        
      </div>
      <Footer/>
    </div>
  )
}

export default EventPage