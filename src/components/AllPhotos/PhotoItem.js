import React from 'react';
import { string } from 'prop-types';


export const PhotoItemC = ({ url }) => (
  <div className="photo-item-container">
    {url ?
      <img src={url} alt="item" /> :
      <div className="placeholder">Loading...</div>}
  </div>
);

PhotoItemC.propTypes = {
  url: string,
};

PhotoItemC.defaultProps = {
  url: '',
};
