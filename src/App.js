import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,  Route } from "react-router-dom";

import { MapPage, PhotosPage } from './pages';
import { store } from './appState';
import { routesNames } from './utils/constants';


import './globalStyles.css';

export const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path={routesNames.MAP} exact component={MapPage} />
      <Route path={routesNames.PHOTOS} exact component={PhotosPage} />
    </BrowserRouter>
  </Provider>
);
