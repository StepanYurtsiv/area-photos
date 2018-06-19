import { createStore, combineReducers } from 'redux';


import {
  selectedPointCoordsReducer,
} from './selectedPointCoords';
import {
  activePhotoReducer,
} from './activePhoto';
import { photosReducer } from './photos';


const rootReducer = combineReducers({
  selectedPointCoords: selectedPointCoordsReducer,
  activePhoto: activePhotoReducer,
  photos: photosReducer,
});

export const store = createStore(
  rootReducer
);
