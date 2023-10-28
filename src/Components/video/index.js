


import React from 'react';

const Video = ({videoImg}) => {
  return (
    <div style={{ marginTop: '15%' }}>
      <video width="640" height="360" controls autoPlay>
        <source src={videoImg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;