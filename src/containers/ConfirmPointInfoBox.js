import * as R from 'ramda';
import { compose, mapProps } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { stringify } from 'query-string';

import { ConfirmPointInfoBoxC } from '../components/ConfirmPointInfoBox';
import {
  setSelectedPointCoords,
} from '../appState/selectedPointCoords';
import { setPhotosToShow } from '../appState/photosToShow';
import { setPhotos } from '../appState/photos';
import { renderNothingIf } from '../utils/hocs';
import { routesNames } from '../utils/constants';
import { fromLatLng } from '../utils/coords';


export const ConfirmPointInfoBox = compose(
  connect(
    R.pick(['selectedPointCoords']),
    { setSelectedPointCoords, setPhotos, setPhotosToShow }
  ),
  withRouter,
  renderNothingIf(
    R.complement(R.path(['selectedPointCoords', 'lat'])),
  ),
  mapProps(
    ({ selectedPointCoords, history, ...actions }) => ({
      position: selectedPointCoords,
      onCancel: () => actions.setSelectedPointCoords({}),
      onConfirm: () => {
        actions.setPhotosToShow(5);
        actions.setPhotos([]);
        R.pipe(
          fromLatLng,
          stringify,
          query => `${routesNames.PHOTOS}?${query}`,
          history.push
        )(selectedPointCoords);
      }
    })
  )
)(ConfirmPointInfoBoxC);