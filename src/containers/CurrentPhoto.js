import * as R from 'ramda';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { CurrentPhotoC } from '../components/CurrentPhoto';


export const CurrentPhoto = compose(
  connect(
    ({ photos, activePhoto }) => ({
      photo: R.pipe(
        R.find(
          R.propEq('index', activePhoto),
        ),
        R.defaultTo({}),
      )(photos),
    })
  ),
)(CurrentPhotoC);
