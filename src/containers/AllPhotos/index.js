import * as R from 'ramda';

import {
  withAppState,
} from '../../appState';
import { AllPhotosC } from '../../components/AllPhotos';
import { fromLatLng } from '../../utils/coords';


export const AllPhotos = R.compose(
  withAppState(
    R.pipe(
      R.pick(['photos', 'selectedPointCoords']),
      R.evolve({ selectedPointCoords: fromLatLng }),
    )
  ),
)(AllPhotosC);
