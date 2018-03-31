import React from 'react';
import { shouldUpdate, compose } from 'recompose';

import { Map } from './containers/Map';
import { AppStateProvider, withAppState } from './containers/AppState';
import './globalStyles.css';


const Pages = compose(
  withAppState(['currentRoute']),
  shouldUpdate(
    ({ state: { currentRoute } }, next) =>
      currentRoute !== next.state.currentRoute,
  ),
)(
  ({ state: { currentRoute } }) => (
    <div>
      {currentRoute === 'map' &&
        <Map />}
      {currentRoute === 'images' &&
        <h1>Here are images</h1>}
    </div>
  )
);

export const App = () => (
  <AppStateProvider>
    <Pages />
  </AppStateProvider>
);
