import React from 'react';
import { formatDate } from '../../utils/dates';


export const CurrentPhotoC = ({
  photo: { url, date },
}) => (
  <div>
    <img alt="" src={url} />
    {date ? <div>{formatDate(date)}</div> : null}
  </div>
);
