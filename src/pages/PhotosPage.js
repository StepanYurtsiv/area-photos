import React from 'react';
import * as R from 'ramda';

import { CurrentPhoto } from '../containers/CurrentPhoto';
import { withFetchAvailableAssets } from './hocs';
import { AllPhotos } from '../containers/AllPhotos';
import './photosPageStyles.css';

export const PhotosPage = R.compose(
  withFetchAvailableAssets,
)(() => (
  <div className="page-container photos-page-container">
    <div className="current-photo-container">
      <CurrentPhoto />
    </div>
    <AllPhotos />
  </div>
));
