import * as R from 'ramda';

import { withAppState, setAvailableAssets } from '../appState';

import { callOn } from '../utils/hocs';
import { fetchAvailableAssets } from '../utils/nasaApi';
import { fromLatLng } from '../utils/coords';


export const withFetchAvailableAssets = R.compose(
  withAppState(
    R.pick(['selectedPointCoords']),
    { setAvailableAssets }
  ),
  callOn(
    'componentDidMount',
    ({
      selectedPointCoords,
      actions,
    }) =>
      R.pipe(
        fromLatLng,
        ({ lat, lng }) =>
          fetchAvailableAssets({
            lat,
            lon: lng,
          })
            .then(
              R.pipe(
                R.prop('results'),
                R.map(
                  R.evolve({ date: date => new Date(date) }),
                ),
                R.take(10),
                actions.setAvailableAssets,
              )
            )
      )(selectedPointCoords),
  )
);
