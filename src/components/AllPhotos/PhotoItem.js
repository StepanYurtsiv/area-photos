import React from 'react';
import { string } from 'prop-types';


export const PhotoItemC = ({ imageSrc }) => (
  <div className="photo-item-container">
    {imageSrc ?
      <img src={imageSrc} alt="item" /> :
      <div className="placeholder">Loading...</div>}
  </div>
);

PhotoItemC.propTypes = {
  imageSrc: string.isRequired,
};
