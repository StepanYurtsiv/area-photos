import * as R from 'ramda';
import {
  createActions,
  handleActions,
} from 'redux-actions';

export const {
  setActivePhoto,
  setNextActivePhoto,
  setPrevActivePhoto,
} = createActions(
  'SET_ACTIVE_PHOTO',
  'SET_NEXT_ACTIVE_PHOTO',
  'SET_NEXT_PREV_PHOTO',
);


export const activePhotoReducer = handleActions({
  ROUTER_LOCATION_CHANGED: R.always(0),
  [setActivePhoto]: (_, { payload }) => payload,
  [setNextActivePhoto]: R.add(1),
  [setPrevActivePhoto]: state => state > 0 ? state : state - 1,
}, 0);
