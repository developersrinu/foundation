// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import "./index.css"
// const Hamburger = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navigate = useNavigate()

//  // Handle the click event
//  const handleInternClick = () => {
//   // Navigate to the internship page
//   navigate('/internshipPage');
// };

// const handleHelpClick = () => {
//   // Navigate to the help page
//   navigate('/helpPage');
// };

//   return (
//     <div className="hamburger-menu">
//       <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </div>
//       {isOpen && (
//         <div className="menu">
//           {/* Your navigation menu items go here */}
//           <div className='intern' onClick={handleInternClick}>Internship</div>
//           <div className='help' onClick={handleHelpClick}>Help</div>
//           <Link to="/eventPage" onClick={toggleMenu} className='navitem item3'>Events</Link>
//           <Link to="/galleryPage" onClick={toggleMenu} className='navitem item4'>Gallery</Link>
//           <Link to="/contactPage" onClick={toggleMenu} className='navitem item5'>Contact</Link>
      
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hamburger;





import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './index.css';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  // Handle the click event
  const handleInternClick = () => {
    // Navigate to the internship page
    navigate('/internshipPage');
  };

  const handleHelpClick = () => {
    // Navigate to the help page
    navigate('/helpPage');
  };

  return (
    <div className="hamburger-menu">
      <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {isOpen && (
        <div className="menu">
          {/* Your navigation menu items go here */}
          <div className='intern' onClick={handleInternClick}>Internship</div>
          <div className='help' onClick={handleHelpClick}>Help</div>
          <Link to="/eventPage" onClick={toggleMenu} className='navitem item3'>Events</Link>
          <Link to="/galleryPage" onClick={toggleMenu} className='navitem item4'>Gallery</Link>
          <Link to="/contactPage" onClick={toggleMenu} className='navitem item5'>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
