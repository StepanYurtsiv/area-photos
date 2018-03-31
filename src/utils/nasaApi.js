import { stringify } from 'query-string';

import { nasaAPIKey, nasaImageryBaseURL } from './constants';


export const fetchImage = ({
  lat,
  lng,
}) => {
  const params = stringify({
    lat,
    lon: lng,
    api_key: nasaAPIKey,
    dim: 0.025,
  });

  return fetch(`${nasaImageryBaseURL}?${params}`);
};
