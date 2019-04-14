import * as R from 'ramda';
import { stringify } from 'query-string';

import {
  nasaAPIKey,
  nasaImageryBaseURL,
  nasaAssetsBaseURL,
} from './constants';

const fetchWithParams = url => params =>
  fetch(`${url}?${stringify({ ...params, api_key: nasaAPIKey })}`)
    .then(
      R.ifElse(
        R.prop('ok'),
        res => res.json(),
        (res) => { throw new Error(res.statusText) }
      )
    )

export const fetchImage = fetchWithParams(nasaImageryBaseURL);
export const fetchAvailableAssets = fetchWithParams(nasaAssetsBaseURL);
