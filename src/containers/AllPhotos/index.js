import * as R from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { parse } from 'query-string';
import { withProps } from 'recompose';

import { AllPhotosC } from '../../components/AllPhotos';


export const AllPhotos = R.compose(
  connect(
    R.pipe(
      R.pick([
        'photos',
        'photosToShow',
      ]),
      ({ photos, photosToShow, ...rest }) => ({
        ...rest,
        photos: R.take(photosToShow, photos),
      })
    ),
  ),
  withRouter,
  withProps(props => ({
    query: parse(props.history.location.search) 
  }))
)(AllPhotosC);
