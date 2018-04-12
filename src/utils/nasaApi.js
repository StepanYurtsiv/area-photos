import { stringify } from 'query-string';

import { nasaAPIKey, nasaImageryBaseURL } from './constants';

const fetchWithParams = url => params =>
  fetch(`${url}?${stringify({ ...params, api_key: nasaAPIKey })}`)
    .then(res => res.json());


export const fetchImage = fetchWithParams(nasaImageryBaseURL);
