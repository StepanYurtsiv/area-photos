import * as R from 'ramda';
import React from 'react';
import { shouldUpdate, compose } from 'recompose';

import { Map } from './containers/Map';
import { withAppState } from './appState';
import { routes } from './utils/constants';

const { map, images } = routes;

const routesPages = {
  [map]: <Map />,
  [images]: <h1>Hello</h1>,
};

export const Pages = compose(
  withAppState(R.pick(['currentRoute'])),
  shouldUpdate(
    ({ currentRoute }, nextProps) =>
      currentRoute !== nextProps.currentRoute,
  ),
)(
  ({ currentRoute }) => routesPages[currentRoute],
);
