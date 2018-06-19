import * as R from 'ramda';
import { connect } from 'react-redux';

import { AllPhotosC } from '../../components/AllPhotos';


export const AllPhotos = R.compose(
  connect(
    R.pick([
      'photos',
      'router',
    ]),
  ),
)(AllPhotosC);
