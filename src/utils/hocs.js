import { branch, renderNothing } from 'recompose';

export const renderNothingIf = test => branch(
  test,
  renderNothing
);
