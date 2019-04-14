import { createStore, combineReducers } from 'redux';

import {
  selectedPointCoordsReducer,
} from './selectedPointCoords';
import {
  activePhotoReducer,
} from './activePhoto';
import { photosReducer } from './photos';
import { photosToShowReducer } from './photosToShow';

const rootReducer = combineReducers({
  selectedPointCoords: selectedPointCoordsReducer,
  activePhoto: activePhotoReducer,
  photos: photosReducer,
  photosToShow: photosToShowReducer,
});

export const store = createStore(
  rootReducer,
  {},
);
