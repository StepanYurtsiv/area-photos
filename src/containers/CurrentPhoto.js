import React from 'react';
import * as R from 'ramda';
import { compose } from 'recompose';
import { connect } from 'react-redux';


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
)(
  ({ photo: { url = '' } }) =>
    <img alt="" src={url} />
);
