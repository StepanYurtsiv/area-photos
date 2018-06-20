import {
  createAction,
  handleActions,
} from 'redux-actions';

export const setSelectedPointCoords = createAction('SET_POINT_COORDS');

export const selectedPointCoordsReducer = handleActions({
  ROUTER_LOCATION_CHANGED: () => {},
  [setSelectedPointCoords]: (_, { payload }) => payload,
}, {});
