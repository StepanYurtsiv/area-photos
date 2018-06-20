import React from 'react';
import { string, func, bool } from 'prop-types';


export const PhotoItemC = ({ url, onClick, isActive }) => (
  <div
    className={`photo-item-container ${isActive && 'active-photo'}`}
  >
    {url ?
      // eslint-disable-next-line
      <img onClick={onClick} src={url} alt="item" /> :
      <div className="placeholder">...</div>}
  </div>
);

PhotoItemC.propTypes = {
  url: string,
  onClick: func.isRequired,
  isActive: bool.isRequired,
};

PhotoItemC.defaultProps = {
  url: '',
};
