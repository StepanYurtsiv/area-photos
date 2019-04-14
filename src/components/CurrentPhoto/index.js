import React from 'react';
import { formatDate } from '../../utils/dates';

import './styles.css';

export const CurrentPhotoC = ({
  photo: { url, date },
}) => ([
    <img key={1} className="curr-photo" alt="" src={url} />,
    date ? <div key={2} className="photo-date">{formatDate(date)}</div> : null
]);
