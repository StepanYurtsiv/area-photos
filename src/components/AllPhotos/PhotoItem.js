import React from 'react';
import { string, func } from 'prop-types';


export const PhotoItemC = ({ url, onClick, isActive }) => (
  <div className="photo-item-container">
    {url ?
      // eslint-disable-next-line
      <img onClick={onClick} src={url} alt="item" /> :
      <div className="placeholder">Loading...</div>}
  </div>
);

PhotoItemC.propTypes = {
  url: string,
  onClick: func.isRequired,
};

PhotoItemC.defaultProps = {
  url: '',
};
