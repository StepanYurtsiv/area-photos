import React from 'react';

export const PhotoItemC = ({ imageSrc }) => (
  <div className="photo-item-container">
    {imageSrc ?
      <img src={imageSrc} alt="item" /> : 'Loading...'}
  </div>
);
