import React from 'react';
import * as R from 'ramda';
import { mapProps } from 'recompose';

import { GoogleMap, withGoogleMap } from 'react-google-maps';
import {
  withAppState,
  setSelectedPointCoords,
} from '../../appState';
import { ConfirmPointInfoBox } from '../ConfirmPointInfoBox';


export const MapPage = R.compose(
  withAppState(
    () => {},
    { setSelectedPointCoords }
  ),
  mapProps(
    ({ actions }) => ({
      defaultZoom: 2,
      defaultCenter: { lat: 0, lng: 0 },
      containerElement: <div style={{ height: '400px' }} />,
      mapElement: <div style={{ height: '100vh' }} />,
      onClick: R.pipe(
        R.prop('latLng'),
        actions.setSelectedPointCoords,
      ),
    }),
  ),
  withGoogleMap,
)(props => (
  <GoogleMap {...props}>
    <ConfirmPointInfoBox />
  </GoogleMap>
));
