import React from 'react';

import { PhotoItem } from '../../containers/AllPhotos/PhotoItem';
import { formatDateForURL } from '../../utils/date';
import './styles.css';

export const AllPhotosC = ({ photos = [], selectedPointCoords }) => (
  <div className="all-photos-container">
    {photos.map(({ date }, i) => (
      <PhotoItem
        key={i}
        date={formatDateForURL(date)}
        lat={selectedPointCoords.lat}
        lng={selectedPointCoords.lng}
      />
    ))}
  </div>
);
