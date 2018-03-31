
import React from 'react';
import { pick } from 'ramda';

import { withState, compose, withProps } from 'recompose';

const AppStateContext = React.createContext({});

export const AppStateProvider = compose(
  withState('state', 'setState', {}),
  withProps(
    ({ state, setState }) => ({
      value: {
        state,
        handlers: {
          coords: {
            setCoords: coords => setState({ ...state, coords }),
          },
        },
      },
    })
  ),
)(AppStateContext.Provider);

/* eslint-disable react/display-name */
export const withAppState = (keys = []) => Component => props => (
  <AppStateContext.Consumer>
    {({ state, handlers }) => (
      <Component
        {...props}
        state={pick(keys, state)}
        actions={pick(keys, handlers)}
      />
    )}
  </AppStateContext.Consumer>
);
