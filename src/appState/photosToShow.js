import {
  createAction,
  handleActions,
} from 'redux-actions';

export const setPhotosToShow = createAction('SET_PHOTOS_TO_SHOW');
export const photosToShowReducer = handleActions({
  ROUTER_LOCATION_CHANGED: () => 5,
  [setPhotosToShow]: (_, { payload }) => payload,
}, 5);
