import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import logo from '../../assests/logos/Suvidha Logo.png'
import Hamburger from './hamberger'


const Header = () => {
  return (
    <navbar>
     

  
      <div className='leftDiv'>
        <Link to='/'> <img src={logo} alt='Suvidha Logo' width="200px" height="100px" /></Link>
      </div>

      <div className='rightDiv'>
      <Link to="/internshipPage" className='navitem item1'>Apply For Internship</Link>
      <Link to="/helpPage" className='navitem item2'>Help Now</Link>
      <Link to="/eventPage" className='navitem item3'>Events</Link>
      <Link to="/galleryPage" className='navitem item4'>Gallery</Link>
      <Link to="/contactPage" className='navitem item5'>Contact</Link>
      </div>
      <Hamburger/>
  
    </navbar>

  )
}

export default Header