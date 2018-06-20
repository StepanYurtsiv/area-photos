import React from 'react';
import { func } from 'prop-types';

import './styles.css';

export const MorePhotosBtnC = ({ onClick }) => (
  <button className="more-photos-btn" onClick={onClick}>More</button>
);

MorePhotosBtnC.propTypes = {
  onClick: func.isRequired,
};
