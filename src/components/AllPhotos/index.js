import React from 'react';
import { array, object } from 'prop-types';

import { PhotoItem } from '../../containers/AllPhotos/PhotoItem';
import { formatDateForURL } from '../../utils/date';
import './styles.css';

export const AllPhotosC = ({ photos, router: { query } }) => (
  <div className="all-photos-container">
    {photos.map(photo => (
      <PhotoItem
        key={photo.id}
        {...photo}
        date={formatDateForURL(photo.date)}
        lat={query.lat}
        lng={query.lng}
      />
    ))}
  </div>
);

AllPhotosC.propTypes = {
  photos: array.isRequired,
  router: object.isRequired,
};
