import React from 'react';
import * as R from 'ramda';
import { mapProps } from 'recompose';

import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import {
  withAppState,
  setSelectedPointCoords,
} from '../appState';
import { ConfirmPointInfoBox } from './ConfirmPointInfoBox';
import { googleMapURL } from '../utils/constants';


export const Map = R.compose(
  withAppState(
    R.pick(['selectedPointCoords']),
    { setSelectedPointCoords }
  ),
  mapProps(
    ({ actions }) => ({
      defaultZoom: 2,
      defaultCenter: { lat: 0, lng: 0 },
      googleMapURL,
      loadingElement: <div style={{ height: '100%' }} />,
      containerElement: <div style={{ height: '400px' }} />,
      mapElement: <div style={{ height: '100vh' }} />,
      onClick: R.pipe(
        R.prop('latLng'),
        actions.setSelectedPointCoords,
      ),
    }),
  ),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap {...props}>
    <ConfirmPointInfoBox />
  </GoogleMap>
));
