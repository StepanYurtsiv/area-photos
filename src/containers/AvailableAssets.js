import React from 'react';
import * as R from 'ramda';
import {
  withAppState,
} from '../appState';


export const AvailableAssets = R.compose(
  withAppState(
    R.pick(['availableImageDates']),
  ),
)(({ availableImageDates = [] }) => (
  <ul>
    {availableImageDates.map(date =>
      <li>{date}</li>
    )}
  </ul>
));
