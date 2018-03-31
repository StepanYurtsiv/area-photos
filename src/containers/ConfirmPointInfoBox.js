import * as R from 'ramda';
import { compose, mapProps } from 'recompose';

import { ConfirmPointInfoBoxC } from '../components/ConfirmPointInfoBox';
import {
  withAppState,
  setSelectedPointCoords,
  setPage,
} from '../appState';
import { renderNothingIf } from '../utils/hocs';
import { pages } from '../utils/constants';
import { fromLatLng } from '../utils/coords';


export const ConfirmPointInfoBox = compose(
  withAppState(
    R.pick(['selectedPointCoords']),
    { setSelectedPointCoords, setPage }
  ),
  renderNothingIf(
    R.complement(R.path(['selectedPointCoords', 'lat'])),
  ),
  mapProps(
    ({ selectedPointCoords, actions }) => ({
      position: selectedPointCoords,
      onCancel: () => actions.setSelectedPointCoords({}),
      onConfirm: () =>
        actions.setPage(pages.images, fromLatLng(selectedPointCoords)),
    })
  )
)(ConfirmPointInfoBoxC);
