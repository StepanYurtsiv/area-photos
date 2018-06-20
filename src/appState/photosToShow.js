import {
  createAction,
  handleAction,
} from 'redux-actions';

export const setPhotosToShow = createAction('SET_PHOTOS_TO_SHOW');
export const photosToShowReducer = handleAction(
  setPhotosToShow,
  (_, { payload }) => payload,
  5,
);
