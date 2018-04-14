import * as R from 'ramda';

import { withState } from 'recompose';

import { PhotoItemC } from '../../components/AllPhotos/PhotoItem';
import { callOn } from '../../utils/hocs';
import { fetchImage } from '../../utils/nasaApi';


export const PhotoItem = R.compose(
  withState('imageSrc', 'setImageSrc', ''),
  callOn('componentDidMount', ({ date, lat, lng, setImageSrc }) =>
    fetchImage({ date, lat, lon: lng, dim: 0.09 })
      .then(
        R.pipe(
          R.prop('url'),
          setImageSrc,
        )
      )
  ),
)(PhotoItemC);
