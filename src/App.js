import React from 'react';
import { Fragment } from 'redux-little-router';
import { Provider } from 'react-redux';

import { MapPage, PhotosPage } from './pages';
import { store } from './appState';
import { routesNames } from './utils/constants';


import './globalStyles.css';

export const App = () => (
  <Provider store={store}>
    <Fragment forRoute="/">
      <div>
        <Fragment forRoute={routesNames.MAP}>
          <MapPage />
        </Fragment>
        <Fragment forRoute={routesNames.PHOTOS}>
          <PhotosPage />
        </Fragment>
      </div>
    </Fragment>
  </Provider>
);
