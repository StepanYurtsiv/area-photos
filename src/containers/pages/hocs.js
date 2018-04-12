import * as R from 'ramda';

import { withAppState, setAvailableImgDates } from '../../appState';

import { callOn } from '../../utils/hocs';
import { fetchAvailableAssets } from '../../utils/nasaApi';
import { fromLatLng } from '../../utils/coords';


export const withFetchAvailableAssets = R.compose(
  withAppState(
    R.pick(['selectedPointCoords']),
    { setAvailableImgDates }
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
                R.map(R.prop('date')),
                actions.setAvailableImgDates,
              )
            )
      )(selectedPointCoords),
  )
);

