import React from 'react';
 
export default (props) => {
  return (
      <video className='video' autoPlay loop>
          <source className="video__vid" src="/assets/bruhhh.m4v" type="video/mp4" />
          {/* <source className="video__vid" src="/assets/._The-Hill.mp4" type="video/ogg" /> */}
          
      </video>
  );
};