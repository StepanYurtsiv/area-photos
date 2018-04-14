import React from 'react';

import { PhotoItem } from '../../containers/AllPhotos/PhotoItem';
import { formatDateForURL } from '../../utils/date';


export const AllPhotosC = ({ photos = [], selectedPointCoords }) => (
  <div>
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
