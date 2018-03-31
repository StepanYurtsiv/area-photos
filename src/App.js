import React from 'react';

import { Map } from './containers/Map';
import { AppStateProvider } from './containers/AppState';
import './globalStyles.css';


export const App = () => (
  <AppStateProvider>
    <Map />
  </AppStateProvider>
);
