import * as R from 'ramda';
import { parse } from 'query-string';

import { pages } from '../utils/constants';
import { toLatLng } from '../utils/coords';


export const getStateFromHash = R.pipe(
  parse,
  ({ page, lat, lng }) => ({
    currentPage: pages[page] ? page : pages.map,
    selectedPointCoords: lat && lng ?
      toLatLng(window)(+lat, +lng) : {},
  })
);
