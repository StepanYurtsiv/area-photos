import React from 'react';
import { compose } from 'ramda';
import { withProps } from 'recompose';


import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const getGMapsURL = apiKey =>
  `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp`;


const { REACT_APP_GMPAS_API_KEY } = process.env;

export const Map = compose(
  withProps({
    defaultZoom: 3,
    center: { lat: 25.03, lng: 121.6 },
    googleMapURL: getGMapsURL(REACT_APP_GMPAS_API_KEY),
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100vh' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(GoogleMap);
