import * as R from 'ramda';
import { connect } from 'react-redux';
import { withProps } from 'recompose';

import { PhotoItemC } from '../../components/AllPhotos/PhotoItem';
import { callOn } from '../../utils/hocs';
import { fetchImage } from '../../utils/nasaApi';
import { setPhotoURL } from '../../appState/photos';
import { setActivePhoto } from '../../appState/activePhoto';


export const PhotoItem = R.compose(
  connect(R.pick(['activePhoto']), { setPhotoURL, setActivePhoto }),
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
      .catch(
        R.pipe(R.prop('message'), alert)
      )
  ),
  withProps(
    ({ index, activePhoto, ...actions }) => ({
      onClick: () => actions.setActivePhoto(index),
      isActive: index === activePhoto,
    })
  )
)(PhotoItemC);
