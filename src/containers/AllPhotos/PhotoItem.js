import * as R from 'ramda';
import { connect } from 'react-redux';

import { PhotoItemC } from '../../components/AllPhotos/PhotoItem';
import { callOn } from '../../utils/hocs';
import { fetchImage } from '../../utils/nasaApi';
import { setPhotoURL } from '../../appState/photos';


export const PhotoItem = R.compose(
  connect(null, { setPhotoURL }),
  callOn('componentDidMount', ({
    date,
    lat,
    lng,
    id,
    ...actions
  }) =>
    fetchImage({ date, lat, lon: lng, dim: 0.09 })
      .then(
        R.pipe(
          R.prop('url'),
          url => actions.setPhotoURL({ id, url }),
        )
      )
  ),
)(PhotoItemC);
