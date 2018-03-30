import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const MapContainer = ({ google }) => (
  <Map google={google} zoom={14}>

  </Map>
);

const GMap = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMPAS_API_KEY,
})(MapContainer)


export const App = () => (
  <GMap />
);
