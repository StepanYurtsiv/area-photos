import React from 'react';
import { array, object } from 'prop-types';

import { PhotoItem } from '../../containers/AllPhotos/PhotoItem';
import { formatDateForURL } from '../../utils/dates';
import { MorePhotosBtn } from '../../containers/MorePhotosBtn';

import './styles.css';

export const AllPhotosC = ({ photos, query }) => (
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
    <MorePhotosBtn />
  </div>
);

AllPhotosC.propTypes = {
  photos: array.isRequired,
  query: object.isRequired,
};
