import React from 'react';
import * as R from 'ramda';
import { compose, withState } from 'recompose';

import { withAppState } from '../appState';
import { callOn, renderNothingIf } from '../utils/hocs';
import { fromLatLng } from '../utils/coords';
import { fetchImage } from '../utils/nasaApi';


export const AreaPhoto = compose(
  withAppState(
    R.pick(['selectedPointCoords']),
  ),
  withState('imageUrl', 'setImageURL', ''),
  callOn('componentDidMount', ({ selectedPointCoords, setImageURL }) => {
    fetchImage(fromLatLng(selectedPointCoords))
      .then(res => res.json())
      .then(({ url }) => setImageURL(url));
  }),
)(({ imageUrl = '' }) =>
  <img alt="" src={imageUrl} />
);
