import * as R from 'ramda';
import { compose, mapProps } from 'recompose';
import { connect } from 'react-redux';
import { push } from 'redux-little-router';

import { ConfirmPointInfoBoxC } from '../components/ConfirmPointInfoBox';
import {
  setSelectedPointCoords,
} from '../appState/selectedPointCoords';
import { renderNothingIf } from '../utils/hocs';
import { routesNames } from '../utils/constants';
import { fromLatLng } from '../utils/coords';


export const ConfirmPointInfoBox = compose(
  connect(
    R.pick(['selectedPointCoords']),
    { setSelectedPointCoords, push }
  ),
  renderNothingIf(
    R.complement(R.path(['selectedPointCoords', 'lat'])),
  ),
  mapProps(
    ({ selectedPointCoords, ...actions }) => ({
      position: selectedPointCoords,
      onCancel: () => actions.setSelectedPointCoords({}),
      onConfirm: () =>
        actions.push({
          pathname: routesNames.PHOTOS,
          query: fromLatLng(selectedPointCoords),
        }),
    })
  )
)(ConfirmPointInfoBoxC);
