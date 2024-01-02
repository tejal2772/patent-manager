// ImageComponent.js

import React from 'react';


const ImageComponent = () => {
  const imageUrl = './pppp.jpeg'; 
  const imageStyle = {
    position: 'fixed',
    width: '100%',
    height: 400,
  };

  return (
    <div>
      <img src={imageUrl} alt="Fixed Image" style={imageStyle} />
    </div>
  );
};

export default ImageComponent;
