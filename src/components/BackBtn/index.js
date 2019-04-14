import React from 'react';
import { Link } from 'react-router-dom';

import { routesNames } from '../../utils/constants';
import './styles.css'

export const BackBtn = () => (
  <Link className="back-btn" to={routesNames.MAP}>
    ←
  </Link>
)
