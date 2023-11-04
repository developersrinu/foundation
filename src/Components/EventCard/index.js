// import React from 'react'
// import './style.css'
// const EventCard = ({ imgurl, head, desc }) => {

//   const elements = document.getElementsByClassName("EventCard");
//   for (let element of elements) {
//     element.addEventListener("click", () => {
//       element.style.padding = "200px";
//     });
//   }

//   return (

//     <div className='EventCard'>
//       <img src={imgurl} alt='img' />
//       <div className='details'>
//         <div className='head'>{head}</div>
//         <div className='desc'>{desc}</div>
//       </div>
//     </div>
//   )
// }

// export default EventCard


import React, { useState, useEffect, useRef } from 'react';
import './style.css';

const EventCard = ({ imgurl, head, desc }) => {
  const [isExpanded, setExpanded] = useState(false);
  const cardRef = useRef(null);

  const handleScroll = () => {
    if (cardRef.current) {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const cardTop = cardRef.current.getBoundingClientRect().top;

      if (scrollY > cardTop - windowHeight * 0.75) {
        setExpanded(true);
      }
    }
  };

  const cardStyle = {
    transform: isExpanded ? 'translateY(0)' : 'translateY(100%)',
    transition: 'transform 4s ease', // 3-second transition
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`EventCard`} style={cardStyle} ref={cardRef}>
      <img src={imgurl} alt='img' />
      <div className='details'>
        <div className='head'>{head}</div>
        <div className='desc'>{desc}</div>
      </div>
    </div>
  );
}

export default EventCard;
