import React from 'react';
import * as R from 'ramda';

import { CurrentPhoto } from '../CurrentPhoto';
import { withFetchAvailableAssets } from './hocs';
import { AllPhotos } from '../AllPhotos';

export const PhotosPage = R.compose(
  withFetchAvailableAssets,
)(() => (
  <div>
    <CurrentPhoto />
    <AllPhotos />
  </div>
));
