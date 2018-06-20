import React from 'react';
import { formatDate } from '../../utils/dates';

import './styles.css';

export const CurrentPhotoC = ({
  photo: { url, date },
}) => (
  <div>
    <div className="img-container">
      <img alt="" src={url} />
    </div>
    {date ? <div className="photo-date">{formatDate(date)}</div> : null}
  </div>
);
