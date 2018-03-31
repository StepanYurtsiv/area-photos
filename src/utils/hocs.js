import { branch, lifecycle, renderNothing } from 'recompose';

export const renderNothingIf = test => branch(
  test,
  renderNothing
);

export const callOn = (lifecycleMethod, func) =>
  lifecycle({
    [lifecycleMethod]() {
      func(this.props);
    },
  });
