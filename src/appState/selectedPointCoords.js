import {
  createAction,
  handleAction,
} from 'redux-actions';

export const setSelectedPointCoords = createAction('SET_POINT_COORDS');

export const selectedPointCoordsReducer = handleAction(
  setSelectedPointCoords,
  (_, { payload }) => payload,
  {},
);
