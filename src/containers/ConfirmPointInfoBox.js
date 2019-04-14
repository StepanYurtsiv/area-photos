import * as R from 'ramda';
import { compose, mapProps } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { stringify } from 'query-string';

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
    { setSelectedPointCoords }
  ),
  withRouter,
  renderNothingIf(
    R.complement(R.path(['selectedPointCoords', 'lat'])),
  ),
  mapProps(
    ({ selectedPointCoords, history, ...actions }) => ({
      position: selectedPointCoords,
      onCancel: () => actions.setSelectedPointCoords({}),
      onConfirm: () =>
        R.pipe(
          fromLatLng,
          stringify,
          query => `${routesNames.PHOTOS}?${query}`,
          history.push
        )(selectedPointCoords)
    })
  )
)(ConfirmPointInfoBoxC);