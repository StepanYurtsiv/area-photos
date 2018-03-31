import React from 'react';

import { AppStateProvider } from './appState';
import { Pages } from './Pages';

import './globalStyles.css';

export const App = () => (
  <AppStateProvider>
    <Pages />
  </AppStateProvider>
);
