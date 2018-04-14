import React from 'react';
import * as R from 'ramda';
import { compose, withState } from 'recompose';

import { withAppState } from '../appState';
import { callOn } from '../utils/hocs';
import { fromLatLng } from '../utils/coords';
import { fetchImage } from '../utils/nasaApi';


export const CurrentPhoto = compose(
  withAppState(
    R.pick(['selectedPointCoords']),
  ),
  withState('imageUrl', 'setImageURL', ''),
  callOn('componentDidMount', ({ selectedPointCoords, setImageURL }) =>
    R.pipe(
      fromLatLng,
      ({ lat, lng }) =>
        fetchImage({
          lat,
          lon: lng,
          dim: 0.09,
        })
          .then(({ url }) => setImageURL(url))
    )(selectedPointCoords),
  ),
)(({ imageUrl = '' }) =>
  <img alt="" src={imageUrl} />
);
