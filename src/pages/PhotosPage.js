import React from 'react';
import * as R from 'ramda';

import { CurrentPhoto } from '../containers/CurrentPhoto';
import { AllPhotos } from '../containers/AllPhotos';
import { BackBtn } from '../components/BackBtn';

import { withFetchAvailableAssets } from './hocs';
import './photosPageStyles.css';

export const PhotosPage = R.compose(
  withFetchAvailableAssets,
)(() => (
  <div className="page-container photos-page-container">
    <BackBtn />
    <div className="current-photo-container">
      <CurrentPhoto />
    </div>
    <AllPhotos />
  </div>
));
