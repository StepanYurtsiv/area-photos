import { routerForBrowser } from 'redux-little-router';
import { routesNames } from '../utils/constants';


const routes = {
  [routesNames.MAP]: {
    title: 'Map',
  },
  [routesNames.PHOTOS]: {
    title: 'Photos',
  },
};

export const {
  reducer: routerReducer,
  middleware: routerMiddleware,
  enhancer: routerEnhanacer,
} = routerForBrowser({
  routes,
});
