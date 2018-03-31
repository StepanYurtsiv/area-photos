import React from 'react';
import { shape, number } from 'prop-types';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';


export const ConfirmPointInfoBoxC = ({
  position,
}) => (
  <InfoBox position={position}>
    <h1>Hello</h1>
  </InfoBox>
);

ConfirmPointInfoBoxC.propTypes = {
  position: shape({
    lat: number.isRequired,
    lng: number.isRequired,
  }).isRequired,
};
