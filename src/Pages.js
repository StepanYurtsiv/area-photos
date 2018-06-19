import * as R from 'ramda';
import React from 'react';
import { shouldUpdate, compose } from 'recompose';

import { withAppState } from './appState';
import { pages } from './utils/constants';
import { MapPage, PhotosPage } from './pages';


const { map, images } = pages;

const pagesComponents = {
  [map]: <MapPage />,
  [images]: <PhotosPage />,
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
