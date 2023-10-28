import React from 'react'
import'./style.css'
const EventCard = ({imgurl,head,desc}) => {
  return (
    <div className='EventCard'>
        <img src={imgurl} alt='img'/>
        <div className='details'>
            <div className='head'>{head}</div>
            <div className='desc'>{desc}</div>
        </div>

    </div>
  )
}

export default EventCard