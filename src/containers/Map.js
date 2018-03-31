import React from 'react';
import { compose } from 'ramda';
import { withProps } from 'recompose';


import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { withAppState } from './AppState';
import { ConfirmPointInfoBox } from './ConfirmPointInfoBox';


const getGMapsURL = apiKey =>
  `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp`;


const { REACT_APP_GMPAS_API_KEY } = process.env;

export const Map = compose(
  withAppState(['coords']),
  withProps(
    ({ actions }) => ({
      defaultZoom: 2,
      defaultCenter: { lat: 0, lng: 0 },
      googleMapURL: getGMapsURL(REACT_APP_GMPAS_API_KEY),
      loadingElement: <div style={{ height: '100%' }} />,
      containerElement: <div style={{ height: '400px' }} />,
      mapElement: <div style={{ height: '100vh' }} />,
      onClick: ({ latLng }) => {
        actions.coords.setCoords(
          latLng
        );
      },
    }),
  ),
  withScriptjs,
  withGoogleMap,
)(props => (
  <GoogleMap {...props}>
    <ConfirmPointInfoBox />
  </GoogleMap>
));
