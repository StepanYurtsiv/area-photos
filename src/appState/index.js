
import React from 'react';
import * as R from 'ramda';

import { withState, withProps, compose } from 'recompose';

export * from './updaters';

const AppStateContext = React.createContext({});

export const AppStateProvider = compose(
  withState('state', 'setState', {
    currentRoute: 'map',
    selectedPointCoords: {},
  }),
  withProps(R.objOf('value')),
)(AppStateContext.Provider);

const generateActions = (state, setState) => R.mapObjIndexed(
  func => (...args) => setState(func(state)(...args)),
);

/* eslint-disable react/display-name */
export const withAppState = (getState, handlers = {}) => Component => props => (
  <AppStateContext.Consumer>
    {({ state, setState }) => (
      <Component
        {...props}
        {...getState(state)}
        actions={generateActions(state, setState)(handlers)}
      />
    )}
  </AppStateContext.Consumer>
);
