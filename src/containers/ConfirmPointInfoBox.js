import * as R from 'ramda';
import { compose, mapProps } from 'recompose';

import { ConfirmPointInfoBoxC } from '../components/ConfirmPointInfoBox';
import {
  withAppState,
  setSelectedPointCoords,
  setRoute,
} from '../appState';
import { renderNothingIf } from '../utils/hocs';


export const ConfirmPointInfoBox = compose(
  withAppState(
    R.pick(['selectedPointCoords']),
    { setSelectedPointCoords, setRoute }
  ),
  renderNothingIf(
    R.complement(R.path(['selectedPointCoords', 'lat'])),
  ),
  mapProps(
    ({ selectedPointCoords, actions }) => ({
      position: selectedPointCoords,
      onCancel: () => actions.setSelectedPointCoords({}),
      onConfirm: () => actions.setRoute('images'),
    })
  )
)(ConfirmPointInfoBoxC);
