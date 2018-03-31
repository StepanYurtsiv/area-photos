import React from 'react';
import { func, shape } from 'prop-types';
import { InfoBox } from 'react-google-maps/lib/components/addons/InfoBox';

import './styles.css';

export const ConfirmPointInfoBoxC = ({
  position,
  onConfirm,
  onCancel,
}) => (
  <InfoBox
    onCloseClick={onCancel}
    defaultPosition={position}
    options={{ enableEventPropagation: true }}
  >
    <div className="info-box-container">
      <button onClick={onConfirm}>
        Select
      </button>
    </div>
  </InfoBox>
);

ConfirmPointInfoBoxC.propTypes = {
  position: shape({
    lat: func.isRequired,
    lng: func.isRequired,
  }).isRequired,
  onConfirm: func.isRequired,
  onCancel: func.isRequired,
};
