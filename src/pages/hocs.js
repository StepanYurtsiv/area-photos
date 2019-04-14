import * as R from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withProps } from 'recompose';
import { parse } from 'query-string';

import { fetchAvailableAssets } from '../utils/nasaApi';
import { setPhotos } from '../appState/photos';
import { callOn } from '../utils/hocs';


export const withFetchAvailableAssets = R.compose(
  connect(
    null,
    { setPhotos }
  ),
  withRouter,
  withProps(
    R.pipe(
      R.path(['history', 'location', 'search']),
      parse,
      R.objOf('targetPointCoords')
    )
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
                R.when(R.isNil, () => {
                  throw new Error('No results for such coords')
                }),
                R.map(
                  R.evolve({ date: date => new Date(date) }),
                ),
                R.sortWith([
                  R.descend(R.prop('date')),
                ]),
                actions.setPhotos,
              )
            )
            .catch(
              R.pipe(R.prop('message'), alert)
            )
      )(targetPointCoords),
  )
);
