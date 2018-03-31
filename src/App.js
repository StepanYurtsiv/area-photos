import * as R from 'ramda';
import React from 'react';
import { shouldUpdate, compose } from 'recompose';

import { Map } from './containers/Map';
import { AppStateProvider, withAppState } from './appState';
import './globalStyles.css';


const Pages = compose(
  withAppState(R.pick(['currentRoute'])),
  shouldUpdate(
    ({ currentRoute }, nextProps) =>
      currentRoute !== nextProps.currentRoute,
  ),
)(
  ({ currentRoute = 'map' }) => (
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
