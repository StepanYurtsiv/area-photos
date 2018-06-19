import * as R from 'ramda';
import {
  createAction,
  handleActions,
} from 'redux-actions';

export const setPhotos = createAction('SET_PHOTOS');
export const setPhotoURL = createAction('SET_PHOTO_URL');

export const photosReducer = handleActions({
  [setPhotos]: (_, { payload }) => payload,
  [setPhotoURL]: (state, { payload: { id, url } }) =>
    R.map(
      R.when(
        R.propEq('id', id),
        R.assoc('url', url)
      ),
    ),
}, []);
