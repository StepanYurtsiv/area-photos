import * as R from 'ramda';
import { connect } from 'react-redux';

import { setPhotos } from '../appState/photos';

import { callOn } from '../utils/hocs';
import { fetchAvailableAssets } from '../utils/nasaApi';


export const withFetchAvailableAssets = R.compose(
  connect(
    R.pipe(
      R.path(['router', 'query']),
      R.objOf('targetPointCoords'),
    ),
    { setPhotos }
  ),
  callOn(
    'componentDidMount',
    ({
      targetPointCoords,
      ...actions
    }) =>
      R.pipe(
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
                R.take(20),
                actions.setPhotos,
              )
            )
      )(targetPointCoords),
  )
);
