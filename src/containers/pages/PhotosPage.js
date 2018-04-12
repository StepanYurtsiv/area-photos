import React from 'react';
import * as R from 'ramda';

import { CurrentPhoto } from '../CurrentPhoto';
import { withFetchAvailableAssets } from './hocs';


export const PhotosPage = R.compose(
  withFetchAvailableAssets,
)(() => (
  <div>
    <CurrentPhoto />
  </div>
));
