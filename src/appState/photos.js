import * as R from 'ramda';
import {
  createAction,
  handleActions,
} from 'redux-actions';

export const setPhotos = createAction('SET_PHOTOS');
export const setPhotoURL = createAction('SET_PHOTO_URL');

const mapIndexed = R.addIndex(R.map);
export const photosReducer = handleActions({
  ROUTER_LOCATION_CHANGED: R.always([]),
  [setPhotos]: (_, { payload }) => mapIndexed(
    (photo, index) => ({
      ...photo,
      index,
    })
  )(payload),
  [setPhotoURL]: (state, { payload: { id, url } }) =>
    R.map(
      R.when(
        R.propEq('id', id),
        R.assoc('url', url)
      ),
    )(state),
}, []);
