import * as R from 'ramda';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import {
  selectedPointCoordsReducer,
} from './selectedPointCoords';
import {
  activePhotoReducer,
} from './activePhoto';
import { photosReducer } from './photos';
import {
  routerReducer,
  routerMiddleware,
  routerEnhanacer,
} from './router';

const rootReducer = combineReducers({
  selectedPointCoords: selectedPointCoordsReducer,
  activePhoto: activePhotoReducer,
  photos: photosReducer,
  router: routerReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || R.compose;
export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(
    routerEnhanacer,
    applyMiddleware(routerMiddleware),
  )
);
