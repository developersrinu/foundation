import React from 'react'
import Video from '../Components/video'
import videourl from '../assests/fondation/infovideo.mp4'

const VideoPage = () => {
    return (
        <div style={{ textAlign: 'center'}}>
               <Video videoImg = {videourl}  />

        </div>

         
      
    )
}

export default VideoPage