import * as R from 'ramda';
import { mapProps } from 'recompose';
import { connect } from 'react-redux';
import { setPhotosToShow } from '../appState/photosToShow';
import { MorePhotosBtnC } from '../components/MorePhotosBtn';


export const MorePhotosBtn = R.compose(
  connect(
    R.pick(['photosToShow']),
    { setPhotosToShow },
  ),
  mapProps(
    ({ photosToShow, ...actions }) => ({
      onClick: () => actions.setPhotosToShow(
        photosToShow + 5
      ),
    })
  )
)(MorePhotosBtnC);
