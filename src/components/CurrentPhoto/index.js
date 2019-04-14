import React from 'react';
import { formatDate } from '../../utils/dates';

import './styles.css';

export const CurrentPhotoC = ({
  photo: { url, date },
}) => ([
    <img className="curr-photo" alt="" src={url} />,
    date ? <div className="photo-date">{formatDate(date)}</div> : null
]);
