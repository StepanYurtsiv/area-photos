import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const MapContainer = ({ google }) => (
  <Map google={google} zoom={14}>

  </Map>
);

const GMap = GoogleApiWrapper({
})(MapContainer)


export const App = () => (
  <GMap />
);
