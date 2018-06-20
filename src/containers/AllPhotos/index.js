import * as R from 'ramda';
import { connect } from 'react-redux';

import { AllPhotosC } from '../../components/AllPhotos';


export const AllPhotos = R.compose(
  connect(
    R.pipe(
      R.pick([
        'photos',
        'photosToShow',
        'router',
      ]),
      ({ photos, photosToShow, ...rest }) => ({
        ...rest,
        photos: R.take(photosToShow, photos),
      })
    ),
  ),
)(AllPhotosC);
