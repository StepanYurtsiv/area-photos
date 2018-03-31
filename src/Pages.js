import * as R from 'ramda';
import React from 'react';
import { shouldUpdate, compose } from 'recompose';

import { Map } from './containers/Map';
import { AreaPhoto } from './containers/AreaPhoto';
import { withAppState } from './appState';
import { pages } from './utils/constants';

const { map, images } = pages;

const pagesComponents = {
  [map]: <Map />,
  [images]: <AreaPhoto />,
};

export const Pages = compose(
  withAppState(R.pick(['currentPage'])),
  shouldUpdate(
    ({ currentPage }, nextProps) =>
      currentPage !== nextProps.currentPage,
  ),
)(
  ({ currentPage }) => pagesComponents[currentPage],
);
